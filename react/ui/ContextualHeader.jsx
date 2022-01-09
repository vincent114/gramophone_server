import React from 'react';
import { types, getRoot } from "mobx-state-tree";
import { observer } from "mobx-react-lite";
import clsx from 'clsx';

import { Header } from 'nexus/layout/header/Header';
import { HomeHeaderMiddle } from 'nexus/contexts/home/Home';
import { SearchHeaderMiddle } from 'nexus/contexts/search/Search';

import {
	DownloadHeaderLeft,
	DownloadHeaderRight
} from 'gramophone_server/contexts/download/Download';
import {
	HelpHeaderLeft,
	HelpHeaderRight
} from 'gramophone_server/contexts/help/Help';


// Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------

// ***** ContextualHeader *****
// ****************************

const TAG_ContextualHeader = () => {}
export const ContextualHeader = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// From ... store

	const context = app.context;
	const homeContext = app.homeContext;
	const authContext = app.authContext;

	// Render
	// ==================================================================================================

	let headerLeft = null;
	let headerMiddle = null;
	let headerRight = null;

	// -------------------------------------------------

	const renderHeaderHome = () => {

		if ([homeContext, authContext].indexOf(context) == -1 ) { return; }

		headerMiddle = <HomeHeaderMiddle />
	}

	const renderHeaderSearch = () => {

		if (context != 'search') { return; }

		headerMiddle = <SearchHeaderMiddle />
	}

	// -------------------------------------------------

	const renderHeaderDownload = () => {

		if (context != 'download') { return; }

		headerLeft = <DownloadHeaderLeft />
		headerRight = <DownloadHeaderRight />
	}

	const renderHeaderHelp = () => {

		if (context != 'help') { return; }

		headerLeft = <HelpHeaderLeft />
		headerRight = <HelpHeaderRight />
	}

	// -------------------------------------------------

	renderHeaderHome();
	renderHeaderSearch();

	renderHeaderDownload();
	renderHeaderHelp();

	return (
		<Header
			left={headerLeft}
			right={headerRight}
		>
			{headerMiddle}
		</Header>
	)
})
