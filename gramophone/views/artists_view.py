from pyramid.view import view_config


# Views
# ======================================================================================================

@view_config(route_name='artists', renderer='gramophone:templates/main.jinja2')
def artists_get(request):
    return dict()
