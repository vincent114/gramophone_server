from pyramid.view import view_config


# Views
# ======================================================================================================

@view_config(route_name='blog', renderer='gramophone:templates/main.jinja2')
def blog_get(request):
    return dict()
