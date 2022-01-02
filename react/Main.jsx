import React from 'react';
import ReactDOM from 'react-dom';
import { types } from "mobx-state-tree";
import { observer } from "mobx-react-lite";

import { NxAppStore, NxApp, makeInitSnapshot } from 'nexus/NxApp';

import { BlogStore, BlogPage } from 'nexorium/contexts/blog/Blog';

import { ContextualHeader } from 'gramophone_server/ui/ContextualHeader';
import { ContextualMenu } from 'gramophone_server/ui/ContextualMenu';
import { HomePage } from 'gramophone_server/contexts/home/Home';
import { SearchStore, SearchPage } from 'gramophone_server/contexts/search/Search';
import { DownloadStore, DownloadPage } from 'gramophone_server/contexts/download/download';
import { HelpStore, HelpPage } from 'gramophone_server/contexts/help/help';
import { AdminPage } from 'gramophone_server/contexts/admin/Admin';

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

		// Blog
		// -

		'blog': types.optional(BlogStore, {}),

		// Download
		// -

		'download': types.optional(DownloadStore, {}),

		// Help
		// -

		'help': types.optional(HelpStore, {}),

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

			// Blog
			if (navContext == 'blog') {
				app.navigate('/blog', 'blog', [
					{"op": "replace", "path": "/blog/loaded", "value": false},
				]);
			}

			// -

			// Download
			if (navContext == 'download') {
				app.navigate('/download', 'download', [
					{"op": "replace", "path": "/download/loaded", "value": false},
				]);
			}

			// Help
			if (navContext == 'help') {
				app.navigate('/help', 'help', [
					{"op": "replace", "path": "/help/loaded", "value": false},
				]);
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

	'blog': BlogPage,

	'download': DownloadPage,
	'help': HelpPage,

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

	'blog': '/blog',

	'download': '/download',
	'help': '/help',

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
