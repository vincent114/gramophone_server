import React from 'react';
import { observer } from "mobx-react-lite";
import clsx from 'clsx';

import { NavCard } from 'nexus/components/cards/NavCard';

import { Row } from 'nexus/layout/row/Row';

import { Helper } from 'nexus/ui/helper/Helper';

import './Home.css';


// Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------

// ***** RenderHomeGrid *****
// **************************

const TAG_RenderHomeGrid = () => {}
export const RenderHomeGrid = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// From ... store

	const staticMode = app.staticMode;

	// ...

	// Renderers
	// ==================================================================================================

	// HomeGrid -> Téléchargement
	// ---

	const navCardDownload = (
		<NavCard
			key="nav-card-download"
			icon="file_download"
			label="Télécharger ici"
			onClick={() => store.navigateTo('download')}
		/>
	)

	// HomeGrid -> F.A.Q
	// ---

	let navCardHelp = null;
	if (!staticMode) {
		const navCardHelp = (
			<NavCard
				key="nav-card-help"
				icon="help"
				label="F.A.Q"
				onClick={() => store.navigateTo('help')}
			/>
		)
	}

	// HomeGrid -> Changelogs
	// ---

	const navCardChangelogs = (
		<NavCard
			key="nav-card-changelogs"
			icon="history"
			label="Historique des versions"
			onClick={() => app.navigateTo('changelogs')}
		/>
	)

	// ==================================================================================================

	return (
		<div
			style={{
				marginTop: '30px',
				// padding: '0px 20px',
			}}
		>
			<Row responsive={false}>
				{navCardDownload}
				{navCardHelp}
				{navCardChangelogs}
			</Row>
		</div>
	)
})

// ***** HomePage *****
// ********************

const TAG_HomePage = () => {}
export const HomePage = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// From ... store

	const staticUrl = app.staticUrl;

	// ...

	// Renderers
	// ==================================================================================================

	const renderHelper = () => {

		// Render :: Helper
		// ---

		return (
			<Helper
				icon={<img className="nx-helper-icon" src={`${staticUrl}/favicons/android-icon-192x192.png`} />}
				title="Bienvenue sur Gramophone !"
				subtitle="Votre discothèque MP3 / FLAC / AAC dans une application-jukebox à l'ancienne."
				show={true}
				style={{
					maxWidth: '400px',
				}}
			>
				<RenderHomeGrid />
			</Helper>
		)
	}

	return (
		<div className="nx-page">
			{renderHelper()}
		</div>
	)
})
