import React from 'react';
import ReactDOM from 'react-dom';
import { types } from "mobx-state-tree";
import { observer } from "mobx-react-lite";

import { NxAppStore, NxApp, makeInitSnapshot } from 'nexus/NxApp';

import { ContextualHeader } from 'gramophone_server/ui/ContextualHeader';
import { ContextualMenu } from 'gramophone_server/ui/ContextualMenu';
import { HomePage } from 'gramophone_server/contexts/home/Home';
import { SearchStore, SearchPage } from 'gramophone_server/contexts/search/Search';
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

		},

	}))


// Init
// -------------------------------------------------------------------------------------------------------------

// Contexts
// -

let contexts = {
	'home': HomePage,
	'search': SearchPage,
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
