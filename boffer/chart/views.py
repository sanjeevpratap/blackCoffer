from django.shortcuts import render
from django.shortcuts import render
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate, login
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import viewsets, permissions, status
from .models import DataEntry
from .serializers import DataEntrySerializer, UserSerializer 
# Create your views here.

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer

class DataEntryViewSet(viewsets.ModelViewSet):
    queryset = DataEntry.objects.all()
    serializer_class = DataEntrySerializer
    # permission_classes = [permissions.IsAuthenticated]
    def get_queryset(self):
        sector_filter = self.request.query_params.get('sector', None)
        end_year_filter = self.request.query_params.get('end_year', None)
        topic_filter=self.request.query_params.get('topic', None)
        pestle_filter=self.request.query_params.get('pestle', None)
        region_filter=self.request.query_params.get('region', None)
        likelihood_filter=self.request.query_params.get('region', None)
        relevance_filter=self.request.query_params.get('region', None)
        country_filter=self.request.query_params.get('region', None)
        start_year_filter=self.request.query_params.get('region', None)
        
        query = self.queryset.all()  # Initialize the queryset
        
        if sector_filter == 'all':
            pass  
        elif sector_filter:
            query = query.filter(sector=sector_filter)
        
       
        if end_year_filter == 'all':
            pass  
        elif end_year_filter:
            intval=int(end_year_filter)
            query = query.filter(end_year=intval)

        if start_year_filter == 'all':
            pass  
        elif start_year_filter:
            intval=int(start_year_filter)
            query = query.filter(start_year=intval)

        if relevance_filter == 'all':
            pass  
        elif relevance_filter:
            intval=int(relevance_filter)
            query = query.filter(relevance=intval)
        if likelihood_filter == 'all':
            pass  
        elif likelihood_filter:
            intval=int(likelihood_filter)
            query = query.filter(likelihood=intval)

        if country_filter == 'all':
            pass  
        elif country_filter:
            query = query.filter(country=country_filter)

        if topic_filter == 'all':
            pass  
        elif topic_filter:
            query = query.filter(topic=topic_filter)

        if pestle_filter == 'all':
            pass  
        elif pestle_filter:
            query = query.filter(pestle=pestle_filter)

        if region_filter == 'all':
            pass  
        elif region_filter:
            query = query.filter(region=region_filter)
       
        return query  

def index(request):
    return render(request,'chart/index.html')

def add_chart(request):
    return render(request,'chart/add_chart.html')