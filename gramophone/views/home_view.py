from pyramid.view import view_config


# Views
# ======================================================================================================

@view_config(route_name='home', renderer='gramophone:templates/main.jinja2')
def home_get(request):
    return dict()