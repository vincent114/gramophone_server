from pyramid.view import view_config


# Views
# ======================================================================================================

@view_config(route_name='help', renderer='gramophone:templates/main.jinja2')
def help_get(request):
    return dict()
