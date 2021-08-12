from pyramid.view import view_config


# Views
# ======================================================================================================

@view_config(route_name='years', renderer='gramophone:templates/main.jinja2')
def years_get(request):
    return dict()
