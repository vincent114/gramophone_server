
from nexus import smap
smap.register('gramophone')

from pyramid.config import Configurator

from gramophone.resources import Root
from gramophone.resources.app_datas import AppDatasGramophone
from gramophone import views


def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    config = Configurator(
        settings=settings,
        root_factory = Root,
    )

    config.include('pyramid_jinja2')

    # NxApp config
    config.include('nexus.pyramid')

    # Init callback
    config.registry.settings['init_app_callback'] = AppDatasGramophone.to_raw

    # Routes
    # ------------------------------------------------------

    config.add_route('home', '/')
    config.add_route('search', '/search')
    config.add_route('search_actions', '/search_actions/{action}')

    # ---

    # Blog
    # -

    config.add_route('blog', '/blog')

    # ---

    # Download
    # -

    config.add_route('download', '/download')
    config.add_route('download_actions', '/download_actions/{action}')

    # Help
    # -

    config.add_route('help', '/help')
    config.add_route('help_actions', '/help_actions/{action}')

    # Changelog
    # -

    config.add_route('changelog', '/changelog')

    # ---

    # A propos
    # -

    config.add_route('about', '/about')

    # Administration
    # -

    config.add_route('admin', '/admin')

    # ---

    # Mon compte

    config.add_route('account', '/account')

    # ---

    # Static
    if settings['pyramid.reload_templates'].lower() == 'true':
        config.add_static_view('static', 'gramophone:static', cache_max_age=0)
    else:
        config.add_static_view('static', 'gramophone:static', cache_max_age=60*60*24)

    # ------------------------------------------------------

    config.scan('gramophone:views')

    return config.make_wsgi_app()
