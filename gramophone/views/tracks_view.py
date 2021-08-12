from pyramid.view import view_config


# Views
# ======================================================================================================

@view_config(route_name='tracks', renderer='gramophone:templates/main.jinja2')
def tracks_get(request):
    return dict()
