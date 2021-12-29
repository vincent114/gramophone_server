
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

    # Artistes
    # -

    config.add_route('artists', '/artists')
    config.add_route('artists_actions', '/artists_actions/{action}')

    # Albums
    # -

    config.add_route('albums', '/albums')
    config.add_route('albums_actions', '/albums_actions/{action}')

    # Morceaux
    # -

    config.add_route('tracks', '/tracks')
    config.add_route('tracks_actions', '/tracks_actions/{action}')

    # ---

    # Années
    # -

    config.add_route('years', '/years')
    config.add_route('years_actions', '/years_actions/{action}')

    # Genres
    # -

    config.add_route('genres', '/genres')
    config.add_route('genres_actions', '/genres_actions/{action}')

    # Playlists
    # -

    config.add_route('playlists', '/playlists')
    config.add_route('playlists_actions', '/playlists_actions/{action}')

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
