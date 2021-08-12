from pyramid.view import view_config


# Views
# ======================================================================================================

@view_config(route_name='albums', renderer='gramophone:templates/main.jinja2')
def albums_get(request):
    return dict()
