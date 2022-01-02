from pyramid.view import view_config


# Views
# ======================================================================================================

@view_config(route_name='changelog', renderer='gramophone:templates/main.jinja2')
def changelog_get(request):
    return dict()
