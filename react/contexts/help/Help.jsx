import React from 'react';
import { types, getRoot } from "mobx-state-tree";
import { observer } from "mobx-react-lite";
import clsx from 'clsx';

import { Helper } from 'nexus/ui/helper/Helper';
import { HeaderTitle } from 'nexus/layout/header/Header';
import { MenuItem } from 'nexus/layout/menu/Menu';
import { Icon } from 'nexus/ui/icon/Icon';

import './Help.css';


// Models
// -------------------------------------------------------------------------------------------------------------

// ***** HelpStore *****
// *********************

const TAG_HelpStore = () => {}
export const HelpStore = types
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

// ***** HelpHeaderLeft *****
// **************************

const TAG_HelpHeaderLeft = () => {}
export const HelpHeaderLeft = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// ...

	// Render
	// ==================================================================================================

	return (
		<HeaderTitle
			title="F.A.Q"
			titleStyle={{
				marginLeft: '10px',
			}}
		/>
	)
})

// ***** HelpHeaderRight *****
// ***************************

const TAG_HelpHeaderRight = () => {}
export const HelpHeaderRight = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// ...

	// Render
	// ==================================================================================================

	return null;
})

// ***** HelpMenuItem *****
// ************************

const TAG_HelpMenuItem = () => {}
export const HelpMenuItem = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;
	const menu = app.menu;

	// ...

	const helpContext = 'help';

	// Evènements
	// ==================================================================================================

	const handleMenuItemClick = () => {
		store.navigateTo(helpContext);
		app.menu.close();
	}

	// Render
	// ==================================================================================================

	return (
		<MenuItem
			icon={<Icon name="help" width="120px" />}
			label="F.A.Q"
			activeContexts={[helpContext]}
			callbackClick={handleMenuItemClick}
		/>
	)
})

// ***** HelpPage *****
// ********************

const TAG_HelpPage = () => {}
export const HelpPage = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// Renderers
	// ==================================================================================================

	const renderHelper = () => {

		// Render :: Helper
		// ---

		return (
			<Helper
				iconName="help"
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
