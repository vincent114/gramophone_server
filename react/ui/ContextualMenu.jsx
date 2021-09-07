import React from 'react';
import { types, getRoot } from "mobx-state-tree";
import { observer } from "mobx-react-lite";
import clsx from 'clsx';

import {
	MenuDivider,
	MenuItem,
	Menu
} from 'nexus/layout/menu/Menu';
import { HomeMenuItem } from 'nexus/contexts/home/Home';
import { AboutMenuItem } from 'nexus/contexts/about/About';
import { AdminMenuItem } from 'nexus/contexts/admin/Admin';
import {
	LoginMenuItem,
	LogoutMenuItem,
} from 'nexus/contexts/auth/Auth';
import { AccountMenuItem } from 'nexus/contexts/account/Account';
import { Icon } from 'nexus/ui/icon/Icon';

import { SearchMenuItem } from 'gramophone/contexts/search/Search';
import { ArtistsMenuItem } from 'gramophone/contexts/artists/Artists';
import { AlbumsMenuItem } from 'gramophone/contexts/albums/Albums';
import { TracksMenuItem } from 'gramophone/contexts/tracks/Tracks';
import { YearsMenuItem } from 'gramophone/contexts/years/Years';
import { GenresMenuItem } from 'gramophone/contexts/genres/Genres';
import { PlaylistsMenuItem } from 'gramophone/contexts/playlists/Playlists';


// Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------

// ***** ContextualMenu *****
// **************************

const TAG_ContextualMenu = () => {}
export const ContextualMenu = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// From ... store

	const context = app.context;
	const breakPoint650 = app.breakPoint650;

	// Render
	// ==================================================================================================

	return (
		<Menu>
			<HomeMenuItem />
			<SearchMenuItem />

			<MenuDivider />

			<ArtistsMenuItem />
			<AlbumsMenuItem />
			<TracksMenuItem />

			<MenuDivider />

			<YearsMenuItem />
			<GenresMenuItem />
			<PlaylistsMenuItem />

			<MenuDivider />

			<AboutMenuItem />
			<AdminMenuItem />

			{breakPoint650 && <MenuDivider />}

			<LoginMenuItem />
			<AccountMenuItem />
			<LogoutMenuItem />

		</Menu>
	)
})
