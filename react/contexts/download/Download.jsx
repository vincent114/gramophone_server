import React from 'react';
import { types, getRoot } from "mobx-state-tree";
import { observer } from "mobx-react-lite";
import clsx from 'clsx';

import { Helper } from 'nexus/ui/helper/Helper';
import { HeaderTitle } from 'nexus/layout/header/Header';
import { MenuItem } from 'nexus/layout/menu/Menu';
import { Icon } from 'nexus/ui/icon/Icon';

import './Download.css';


// Models
// -------------------------------------------------------------------------------------------------------------

// ***** DownloadStore *****
// *************************

const TAG_DownloadStore = () => {}
export const DownloadStore = types
	.model({
		loaded: false,
	})
	.actions(self => ({

		setField: (field, value) => {
			self[field] = value;
		},

		// -

		update: (raw) => {

		},

	}))


// Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------

// ***** DownloadHeaderLeft *****
// ******************************

const TAG_DownloadHeaderLeft = () => {}
export const DownloadHeaderLeft = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// ...

	// Render
	// ==================================================================================================

	return (
		<HeaderTitle
			title="Téléchargement"
			titleStyle={{
				marginLeft: '10px',
			}}
		/>
	)
})

// ***** DownloadHeaderRight *****
// *******************************

const TAG_DownloadHeaderRight = () => {}
export const DownloadHeaderRight = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// ...

	// Render
	// ==================================================================================================

	return null;
})

// ***** DownloadMenuItem *****
// ****************************

const TAG_DownloadMenuItem = () => {}
export const DownloadMenuItem = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;
	const menu = app.menu;

	// ...

	const downloadContext = 'download';

	// Evènements
	// ==================================================================================================

	const handleMenuItemClick = () => {
		store.navigateTo(downloadContext);
		app.menu.close();
	}

	// Render
	// ==================================================================================================

	return (
		<MenuItem
			icon={<Icon name="file_download" width="120px" />}
			label="Téléchargement"
			activeContexts={[downloadContext]}
			callbackClick={handleMenuItemClick}
		/>
	)
})

// ***** DownloadPage *****
// ************************

const TAG_DownloadPage = () => {}
export const DownloadPage = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// Renderers
	// ==================================================================================================

	const renderHelper = () => {

		// Render :: Helper
		// ---

		return (
			<Helper
				iconName="file_download"
				show={true}
			/>
		)
	}

	return (
		<div className="nx-page">
			{renderHelper()}
		</div>
	)
})
