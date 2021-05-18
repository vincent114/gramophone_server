
from nexus import smap
smap.register('gramophone')

from pyramid.config import Configurator

from gramophone import views


def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    config = Configurator(
        settings=settings
    )

    config.include('pyramid_jinja2')

    # NxApp config
    config.include('nexus.pyramid')

    # Routes
    # ------------------------------------------------------

    config.add_route('home', '/')

    # Static
    if settings['pyramid.reload_templates'].lower() == 'true':
        config.add_static_view('static', 'gramophone:static', cache_max_age=0)
    else:
        config.add_static_view('static', 'gramophone:static', cache_max_age=60*60*24)

    # ------------------------------------------------------

    config.scan('gramophone:views')

    return config.make_wsgi_app()
