import graphene
from graphene_django import DjangoObjectType

from .models import Place

class PlaceType(DjangoObjectType):
    class Meta:
        model = Place


class AddPlace(graphene.Mutation):
    place = graphene.Field(PlaceType)

    class Arguments:
        place_id = graphene.String(required=True)
        name = graphene.String(required=True)
        description = graphene.String()
        lat = graphene.Float(required=True)
        lng = graphene.Float(required=True)
        visited_date = graphene.String()

    def mutate(self, info, place_id, name, lat, lng, description=None, visited_date=None):
        user = info.context.user
        if user.is_anonymous:
            raise Exception('Not logged in!')

        place = Place(
            user = user,
            place_id = place_id,
            name = name,
            description = description,
            lat = lat,
            lng = lng,
            visited_date = visited_date,
        )
        place.save()

        return AddPlace(place=place)

class DeletePlace(graphene.Mutation):
    ok = graphene.Boolean()

    class Arguments:
        id = graphene.Int(required=True)

    def mutate(self, info, id):
        user = info.context.user
        if user.is_anonymous:
            raise Exception('Not logged in!')

        place = Place.objects.get(pk=id)
        place.delete()

        return DeletePlace(ok=True)


class Query(graphene.ObjectType):
    places = graphene.List(PlaceType)

    def resolve_places(self, info, **kwargs):
        user = info.context.user
        if user.is_anonymous:
            raise Exception('Not logged in!')

        return Place.objects.filter(user=user)


class Mutation(graphene.ObjectType):
    add_place = AddPlace.Field()
    delete_place = DeletePlace.Field()
