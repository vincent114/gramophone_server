
from pyramid.view import notfound_view_config


@notfound_view_config(renderer='gramophone:templates/main.jinja2')
def notfound(request):
    return dict()
