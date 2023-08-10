from django.core.management.base import BaseCommand
from chart.models import DataEntry
from django.contrib.auth import get_user_model
import json
from datetime import datetime
from django.utils import timezone

class Command(BaseCommand):
    help = 'Populate data from JSON file'

    def handle(self, *args, **options):
        with open('jsondata.json') as json_file:
            json_data = json.load(json_file)
            for entry in json_data:
                published_value = entry['published']
                self.stdout.write(self.style.SUCCESS(f"Published value: {published_value}"))

                # Convert published_value to datetime only if it's not an empty string
                if published_value:
                    try:
                        published = datetime.strptime(published_value, '%B, %d %Y %H:%M:%S')
                        published = timezone.make_aware(published, timezone.get_default_timezone())
                    except ValueError:
                        self.stdout.write(self.style.ERROR(f"Invalid datetime format: {published_value}"))
                        published = None
                else:
                    published = None

                self.stdout.write(self.style.SUCCESS(f"Published datetime: {published}"))

                # Rest of your code remains the same...


                # Create the DataEntry instance with the processed published value
                data_entry = DataEntry(
                    user=get_user_model().objects.get(email='admin@gmail.com'),
                    end_year=entry['end_year'],
                    intensity=entry['intensity'],
                    sector=entry['sector'],
                    topic=entry['topic'],
                    insight=entry['insight'],
                    url=entry['url'],
                    region=entry['region'],
                    start_year=entry['start_year'],
                    impact=entry['impact'],
                    added=datetime.strptime(entry['added'], '%B, %d %Y %H:%M:%S'),
                    published=published,  # Use the processed datetime value here
                    country=entry['country'],
                    relevance=entry['relevance'],
                    pestle=entry['pestle'],
                    source=entry['source'],
                    title=entry['title'],
                    likelihood=entry['likelihood']
                )
                data_entry.save()
