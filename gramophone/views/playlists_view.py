from pyramid.view import view_config


# Views
# ======================================================================================================

@view_config(route_name='playlists', renderer='gramophone:templates/main.jinja2')
def playlists_get(request):
    return dict()
