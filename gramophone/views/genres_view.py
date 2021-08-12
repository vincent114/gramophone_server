from pyramid.view import view_config


# Views
# ======================================================================================================

@view_config(route_name='genres', renderer='gramophone:templates/main.jinja2')
def genres_get(request):
    return dict()
