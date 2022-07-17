import React from 'react';
import { types, getRoot } from "mobx-state-tree";
import { observer } from "mobx-react-lite";
import clsx from 'clsx';

import {
	MenuDivider,
	MenuItem,
	Menu
} from 'nexus/layout/menu/Menu';
import { PortalMenuItem } from 'nexus/contexts/portal/Portal';
import { HomeMenuItem } from 'nexus/contexts/home/Home';
import { SearchMenuItem } from 'nexus/contexts/search/Search';
import { AboutMenuItem } from 'nexus/contexts/about/About';
import { PreferencesMenuItem } from 'nexus/contexts/preferences/Preferences';
import { AdminMenuItem } from 'nexus/contexts/admin/Admin';
import {
	LoginMenuItem,
	LogoutMenuItem,
} from 'nexus/contexts/auth/Auth';
import { AccountMenuItem } from 'nexus/contexts/account/Account';
import { Icon } from 'nexus/ui/icon/Icon';

import { BlogMenuItem } from 'nexorium/contexts/blog/Blog';

import { ChangelogsMenuItem } from 'ladybug/contexts/changelogs/Changelogs';

import { DownloadMenuItem } from 'gramophone_server/contexts/download/Download';
import { HelpMenuItem } from 'gramophone_server/contexts/help/Help';


// Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------

// ***** GramophoneServerMenuItems *****
// *************************************

const TAG_GramophoneServerMenuItems = () => {}
export const GramophoneServerMenuItems = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// From ... store

	const staticMode = app.staticMode;
	const breakPoint650 = app.breakPoint650;

	// Render
	// ==================================================================================================

	return (
		<React.Fragment>

			<PortalMenuItem />
			<HomeMenuItem />
			{!staticMode && <SearchMenuItem />}

			{breakPoint650 && <MenuDivider />}

			{!staticMode && <BlogMenuItem />}

			{!staticMode && <MenuDivider />}

			<DownloadMenuItem />
			{!staticMode && <HelpMenuItem />}
			<ChangelogsMenuItem />

			<MenuDivider />

			<AboutMenuItem />
			<PreferencesMenuItem />
			{!staticMode && <AdminMenuItem />}

			{(!staticMode && breakPoint650) && <MenuDivider />}

			{!staticMode && <LoginMenuItem />}
			{!staticMode && <AccountMenuItem />}
			{!staticMode && <LogoutMenuItem />}

		</React.Fragment>
	)
})

// ***** ContextualMenu *****
// **************************

const TAG_ContextualMenu = () => {}
export const ContextualMenu = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;
	const account = app.account;

	// From ... store

	const context = app.context;
	const name = account.name;

	// Render
	// ==================================================================================================

	// Items
	// -

	const contextualMenuItems = {}

	let menuItems = null;
	if (contextualMenuItems.hasOwnProperty(context)) {
		const ContextualMenuItems = contextualMenuItems[context];
		menuItems = <ContextualDrawerItems />
	} else {
		menuItems = <GramophoneServerMenuItems />
	}

	// -------------------------------------------------

	return (
		<Menu
			title={name}
			{...props}
		>
			{menuItems}
		</Menu>
	)
})
