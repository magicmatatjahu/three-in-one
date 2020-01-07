from django.db import models
from django.contrib.auth import get_user_model

class Place(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    place_id = models.CharField('Place ID', max_length=128)
    lat = models.FloatField('Latitude')
    lng = models.FloatField('Longitude')
    name = models.CharField('Place Name', max_length=128)
    description = models.CharField('Place Description', max_length=256, null=True)
    visited_date = models.CharField('Visited Date', max_length=128, null=True)

    class Meta:
        unique_together = ('user', 'place_id') # No duplicate places for users