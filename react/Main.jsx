import React from 'react';
import ReactDOM from 'react-dom';
import { types } from "mobx-state-tree";
import { observer } from "mobx-react-lite";

import { NxAppStore, NxApp, makeInitSnapshot } from 'nexus/NxApp';

import { ContextualHeader } from 'gramophone/ui/ContextualHeader';
import { ContextualMenu } from 'gramophone/ui/ContextualMenu';
import { HomePage } from 'gramophone/contexts/home/Home';
import { SearchStore, SearchPage } from 'gramophone/contexts/search/Search';
import { ArtistsStore, ArtistsPage } from 'gramophone/contexts/artists/Artists';
import { AlbumsStore, AlbumsPage } from 'gramophone/contexts/albums/Albums';
import { TracksStore, TracksPage } from 'gramophone/contexts/tracks/Tracks';
import { YearsStore, YearsPage } from 'gramophone/contexts/years/Years';
import { GenresStore, GenresPage } from 'gramophone/contexts/genres/Genres';
import { PlaylistsStore, PlaylistsPage } from 'gramophone/contexts/playlists/Playlists';
import { AdminPage } from 'gramophone/contexts/admin/Admin';

import './Main.css';


// Models
// -------------------------------------------------------------------------------------------------------------

// ***** RootStore *****
// *********************

const TAG_RootStore = () => {}
const RootStore = types
	.model({
		'app': types.optional(NxAppStore, {}),

		// Search
		// -

		'search': types.optional(SearchStore, {}),

		// Artistes
		// -

		'artists': types.optional(ArtistsStore, {}),

		// Albums
		// -

		'albums': types.optional(AlbumsStore, {}),

		// Titres
		// -

		'tracks': types.optional(TracksStore, {}),

		// Années
		// -

		'years': types.optional(YearsStore, {}),

		// Genres
		// -

		'genres': types.optional(GenresStore, {}),

		// Playlists
		// -

		'playlists': types.optional(PlaylistsStore, {}),

	})
	.views(self => ({

		get ajaxGramophone() {
			const app = self.app;
			const services = app.services;
			return services.getAjaxBase('gramophone');
		},

	}))
	.actions(self => ({

		update: (datas) => {

			// Gramophone-specific init datas
			// ---

			console.log(datas);
		},

		navigateTo: (navContext, contextId, contextUrl, contextExtras, callback) => {

			// Herald own navigation function
			// ---

			const app = self.app;
			const context = app.context;

			// -

			// Search
			if (navContext == 'search') {
				app.navigate('/search', 'search');
			}

			// -

			// Artistes
			if (navContext == 'artists') {
				app.navigate('/artists', 'artists');
			}

			// Albums
			if (navContext == 'albums') {
				app.navigate('/albums', 'albums');
			}

			// Tracks
			if (navContext == 'tracks') {
				app.navigate('/tracks', 'tracks');
			}

			// -

			// Années
			if (navContext == 'years') {
				app.navigate('/years', 'years');
			}

			// Genres
			if (navContext == 'genres') {
				app.navigate('/genres', 'genres');
			}

			// Playlists
			if (navContext == 'playlists') {
				app.navigate('/playlists', 'playlists');
			}

		},

	}))


// Init
// -------------------------------------------------------------------------------------------------------------

// Contexts
// -

let contexts = {
	'home': HomePage,
	'search': SearchPage,
	'artists': ArtistsPage,
	'albums': AlbumsPage,
	'tracks': TracksPage,
	'years': YearsPage,
	'genres': GenresPage,
	'playlists': PlaylistsPage,
	'admin': AdminPage,
}

// Popups
// -

let popups = {}

// Routes
// -

let routes = {
	'home': '/',
	'search': '/search',
	'artists': '/artists',
	'albums': '/albums',
	'tracks': '/tracks',
	'years': '/years',
	'genres': '/genres',
	'playlists': '/playlists',
	'admin': '/admin',
}

// Store
// -

let initSnapshot = makeInitSnapshot(routes, {
	'app': {
		'theme': {
			'variant': 'light',
			'palette': {
				'default': {
					'main': '#000000',
					'contrastText': '#fff',
				},
				'primary': {
					'main': '#009688',
					'contrastText': '#fff',
				},
				'secondary': {
					'main': '#607d8b',
					'contrastText': '#fff',
				},
			}
		}
	}
});

export const rootStore = RootStore.create(initSnapshot);
export const RootStoreContext = React.createContext(rootStore);

window.store = rootStore;
window.storeContext = RootStoreContext;

rootStore.app.init(
	(datas) => {
		rootStore.update(datas);
	},
	popups,
	{}
);


// Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------

// ***** Root *****
// ****************

const TAG_Root = () => {}
const Root = observer(() => {

	// Render
	// ==================================================================================================

	return (
		<RootStoreContext.Provider value={rootStore}>
			<NxApp
				header={ContextualHeader}
				menu={ContextualMenu}
				contexts={contexts}
				popups={popups}
			/>
		</RootStoreContext.Provider>
	)
})


// DOM Ready
// --------------------------------------------------------------------------------------------------------------------------------------------

window.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Root></Root>,
		document.getElementById("nx-root")
	);
});
