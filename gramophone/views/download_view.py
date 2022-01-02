from pyramid.view import view_config


# Views
# ======================================================================================================

@view_config(route_name='download', renderer='gramophone:templates/main.jinja2')
def download_get(request):
    return dict()
