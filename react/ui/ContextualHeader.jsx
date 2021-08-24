import React from 'react';
import { types, getRoot } from "mobx-state-tree";
import { observer } from "mobx-react-lite";
import clsx from 'clsx';

import { Header } from 'nexus/layout/header/Header';
import { HomeHeaderMiddle } from 'nexus/contexts/home/Home';
import { AboutHeaderLeft } from 'nexus/contexts/about/About';
import { AdminHeaderLeft } from 'nexus/contexts/admin/Admin';
import { AccountHeaderLeft } from 'nexus/contexts/account/Account';

import { SearchHeaderMiddle } from 'gramophone/contexts/search/Search';
import { ArtistsHeaderLeft } from 'gramophone/contexts/artists/Artists';
import { AlbumsHeaderLeft } from 'gramophone/contexts/albums/Albums';
import { TracksHeaderLeft } from 'gramophone/contexts/tracks/Tracks';
import { YearsHeaderLeft } from 'gramophone/contexts/years/Years';
import { GenresHeaderLeft } from 'gramophone/contexts/genres/Genres';
import { PlaylistsHeaderLeft } from 'gramophone/contexts/playlists/Playlists';


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

	const renderHeaderArtists = () => {

		if (context != 'artists') { return; }

		headerLeft = <ArtistsHeaderLeft />
	}

	const renderHeaderAlbums = () => {

		if (context != 'albums') { return; }

		headerLeft = <AlbumsHeaderLeft />
	}

	const renderHeaderTracks = () => {

		if (context != 'tracks') { return; }

		headerLeft = <TracksHeaderLeft />
	}

	// -------------------------------------------------

	const renderHeaderYears = () => {

		if (context != 'years') { return; }

		headerLeft = <YearsHeaderLeft />
	}

	const renderHeaderGenres = () => {

		if (context != 'genres') { return; }

		headerLeft = <GenresHeaderLeft />
	}

	const renderHeaderPlaylists = () => {

		if (context != 'playlists') { return; }

		headerLeft = <PlaylistsHeaderLeft />
	}

	// -------------------------------------------------

	const renderHeaderAbout = () => {

		if (context != app.aboutContext) { return; }

		headerLeft = <AboutHeaderLeft />
	}

	const renderHeaderAdmin = () => {

		if (context != app.adminContext) { return; }

		headerLeft = <AdminHeaderLeft />
	}

	// -------------------------------------------------

	const renderHeaderAccount = () => {

		if (context != app.accountContext) { return; }

		headerLeft = <AccountHeaderLeft />
	}

	// -------------------------------------------------

	renderHeaderHome();
	renderHeaderSearch();

	renderHeaderArtists();
	renderHeaderAlbums();
	renderHeaderTracks();

	renderHeaderYears();
	renderHeaderGenres();
	renderHeaderPlaylists();

	renderHeaderAbout();
	renderHeaderAdmin();

	renderHeaderAccount();

	return (
		<Header
			left={headerLeft}
			right={headerRight}
		>
			{headerMiddle}
		</Header>
	)
})
