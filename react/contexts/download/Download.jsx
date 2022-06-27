import React from 'react';
import { types, getRoot } from "mobx-state-tree";
import { observer } from "mobx-react-lite";
import clsx from 'clsx';

import { PLATEFORMS_BY_KEYS } from 'ladybug/contexts/changelogs/Changelogs';

import { Helper } from 'nexus/ui/helper/Helper';
import { Button } from 'nexus/ui/button/Button';

import { HeaderTitle } from 'nexus/layout/header/Header';
import { MenuItem } from 'nexus/layout/menu/Menu';
import { Column } from 'nexus/layout/column/Column';
import { Row } from 'nexus/layout/row/Row';

import { Indicator } from 'nexus/forms/indicator/Indicator';

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

	// Events
	// ==================================================================================================

	const handleMenuItemClick = () => {
		store.navigateTo(downloadContext);
		app.menu.close();
	}

	// Render
	// ==================================================================================================

	return (
		<MenuItem
			iconName="file_download"
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
	const changelogs = app.changelogs;

	// From ... store

	const staticUrl = app.staticUrl;
	const initialized = app.initialized;
	const isLoading = app.isLoading;
	const loaded = changelogs.loaded;

	// ...

	React.useEffect(() => {
		if (!loaded) {
			changelogs.load();
		}
	}, [loaded]);

	// Evenrs
	// ==================================================================================================

	const handleOtherVersions = () => {
		app.navigateTo('changelogs');
	}

	// Renderers
	// ==================================================================================================

	const renderHelper = () => {

		// Render :: Helper
		// ---

		let helperTitle = "";
		let helperSubtitle = "";
		let helperContent = "";

		let lastRelease = null;

		if (loaded) {
			lastRelease = changelogs.getLastRelease(true);
			if (lastRelease) {
				helperTitle = (
					<Column>
						<div className="h-col-small">
							<Indicator
								severity="hot"
								style={{
									flex: 'none',
									// marginRight: '2px',
									// marginBottom: (breakPoint414) ? '10px' : '',
								}}
							>
								v{lastRelease.version}
							</Indicator>
							<div className="flex-0">
								{lastRelease.version_name}
							</div>
						</div>
					</Column>
				)
				helperSubtitle = "Téléchargez la version de Gramophone adaptée à votre système en cliquant sur un des boutons ci-dessous."
				helperContent = (
					<React.Fragment>
						<Row
							style={{
								marginTop: '30px',
								marginLeft: '20px',
								marginRight: '20px'
							}}
						>
							{lastRelease.version_assets.map((asset, assetIdx) => {
								const plateformKey = asset.plateform_key;
								const plateform = PLATEFORMS_BY_KEYS[plateformKey];
								const assetLink = `${staticUrl}/file/${asset.filename}`;
								return (
									<Button
										key={`btn-download-asset-${assetIdx}`}
										variant="contained"
										color="info"
										disabled={isLoading}
										href={assetLink}
										startAdornment="folder_zip"
									>
										{plateform.label}
									</Button>
								)
							})}
						</Row>
						<Button
							color="primary"
							disabled={isLoading}
							// startAdornment="history"
							style={{
								marginTop: '40px',
								marginBottom: '40px',
								marginLeft: '20px',
								marginRight: '20px',
							}}
							onClick={() => handleOtherVersions()}
						>
							Voir les autres versions
						</Button>
					</React.Fragment>
				)
			}
		}

		return (
			<Helper
				iconName="file_download"
				title={helperTitle}
				subtitle={helperSubtitle}
				show={true}
				inFlux={(loaded && lastRelease != null)}
			>
				{helperContent}
			</Helper>
		)
	}

	return (
		<div className="nx-page">
			{renderHelper()}
		</div>
	)
})
