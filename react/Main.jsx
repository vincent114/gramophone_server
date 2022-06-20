import React from 'react';
import ReactDOM from 'react-dom';
import { types } from "mobx-state-tree";
import { observer } from "mobx-react-lite";

import { NxAppStore, NxApp, makeInitSnapshot } from 'nexus/NxApp';

import { ContextualHeader } from 'gramophone_server/ui/ContextualHeader';
import { ContextualMenu } from 'gramophone_server/ui/ContextualMenu';
import { HomePage } from 'gramophone_server/contexts/home/Home';
import { SearchStore, SearchPage } from 'gramophone_server/contexts/search/Search';
import { DownloadStore, DownloadPage } from 'gramophone_server/contexts/download/download';
import { HelpStore, HelpPage } from 'gramophone_server/contexts/help/help';

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

		// ---

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

	'download': DownloadPage,
	'help': HelpPage,
}

// Popups
// -

let popups = {}

// Routes
// -

let routes = {
	'download': '/download',
	'help': '/help',
}

// Store
// -

let initSnapshot = makeInitSnapshot(routes, {
	'app': {
		'theme': {
			'palette_light': {
				'primary': {
					'main': '#009688',
				},
				'secondary': {
					'main': '#607d8b',
				},
			},
			'palette_dark': {
				'primary': {
					'main': '#009688',
				},
				'secondary': {
					'main': '#607d8b',
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
