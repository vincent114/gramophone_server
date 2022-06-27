
// Datas
// ======================================================================================================

	// {
	// 	"status": "prod",
	// 	"date": null,
	// 	"app_key": "gramophone",
	// 	"version": "",
	// 	"version_name": "",
	// 	"changes": [
	// 		{"title": ""},
	// 	],
	// },

export const GRAMOPHONE_CHANGELOGS = [

	{
		"status": "daft",
		"date": null,
		"app_key": "gramophone",
		"version": "4.0.0",
		"version_name": "New wave",
		"changes": [
			{
				"title": "Réécriture complète à l'aide de ReactJS et de mobx-state-tree",
			},
			{
				"title": "Abandon de MaterialUI pour des raisons de performance d'affichage",
				"content": "Et de facilité de maintenance.",
			},
		],
	},

	{
		"status": "prod",
		"date": "2019-09-07",
		"app_key": "gramophone",
		"version": "3.0.0",
		"version_name": "Mambo",
		"changes": [
			{"title": "Réécriture complète à l'aide de React.JS et de MaterialUI"},
			{"title": "Plusieurs vues dédiées aux articles, albums, morceaux, genres, années et playlists"},
			{"title": "Possibilité de créer des playlists personnalisés"},
			{"title": "Historique de lecture"},
			{"title": "Liste de lecture"},
			{"title": "Jeté de dés pour lecture aléatoire de quelques dizaines de morceaux"},
			{"title": "Fonction de recherche améliorée"},
		],
		"version_assets": [
			{
				"plateform_key": "macos",
				"filename": "gramophone_300_macOS.zip",
			},
			{
				"plateform_key": "win64",
				"filename": "gramophone_300_win64.zip",
			}
		],
	},

	{
		"status": "prod",
		"date": "2018-03-20",
		"app_key": "gramophone",
		"version": "2.4.0",
		"version_name": "Lounge",
		"changes": [
			{"title": "Menu d'application personnalisé sur macOS"},
			{"title": "Menu contextuel sur l'icône du dock sur macOS"},
			{"title": "Notification sur changement de musique quand le focus est sur une autre application"},
			{"title": "Fix compteur de fichiers dans les dossiers surveillés"},
			{"title": "Fix recherche après une première recherche"},
			{"title": "Pas d'affichage de numéro de musique à 0"},
			{"title": "Artiste cliquable dans le contenu d'un album"},
			{"title": "Lecture continue depuis la grille"},
			{"title": "Lecture aléatoire"},
			{"title": "Option permettant de désactiver le scan automatique au démarrage de l'application"},
			{"title": "Option de déclenchement manuel du scan rapide depuis l'écran de préférences"},
			{"title": "Lecture du premier morceau de la playlist sur clic du bouton de lecture juste après ouverture"},
			{"title": "Navigation vers la musique en cours de lecture sur clic du titre affiché sur le lecteur (dans l'entête de l'application)"},
		],
		"version_assets": [
			{
				"plateform_key": "macos",
				"filename": "gramophone_240_macOS.zip",
			},
			{
				"plateform_key": "win64",
				"filename": "gramophone_240_win64.zip",
			},
			{
				"plateform_key": "win32",
				"filename": "gramophone_240_win32.zip",
			}
		],
	},

	{
		"status": "prod",
		"date": "2018-02-04",
		"app_key": "gramophone",
		"version": "2.3.1",
		"version_name": "Kompa",
		"changes": [
			{"title": "Icône de lecture rapide plus petite et à gauche sur la grille"},
			{"title": "Fix lecture première musique d'album depuis la grille"},
			{"title": "Fix tri des colonnes dans les favoris"},
			{"title": "Fix débordement des libellés de chançon et d'artiste sur le player"},
		],
	},

	{
		"status": "prod",
		"date": "2017-08-28",
		"app_key": "gramophone",
		"version": "2.3.0",
		"version_name": "Jungle",
		"changes": [
			{"title": "Distinction groupement par artiste et alphabétique"},
			{"title": "Petit effet de volume sur l'entête pour macOS"},
			{"title": "Affichage du nom de la version dans la fenêtre 'A propos'"},
			{"title": "Plus de glisser-déplacer pour les vignettes (mais toujours actif pour le zoom de jaquette)"},
			{"title": "Il n'est plus possible de glisser-déplacer un dossier lorsqu'un scan est en cours"},
		],
	},

	{
		"status": "prod",
		"date": "2017-08-08",
		"app_key": "gramophone",
		"version": "2.2.0",
		"version_name": "Indie pop",
		"changes": [
			{"title": "Glisser-déplacer pour ajouter un dossier surveillé contenant des musiques à indexer"},
			{"title": "Zoom sur clic de la jaquette d'album"},
			{"title": "Haut-parleur musique courante en pause"},
			{"title": "Affichage de l'artiste de la musique courante"},
			{"title": "Espace en bas de la liste des morceaux d'un album"},
			{"title": "Diverses évolutions indexer"},
			{"title": "F6 précédent, F7 play / pause, F8 suivant"},
			{"title": "Fenêtre 'A propos' pour Windows (macOS en dispose d'une nativement)"},
			{"title": "Indicateurs dernier scan complet et dernier scan rapide"},
			{"title": "Fix coeur coupé sous Windows"},
			{"title": "Fix débordement nom album"},
		],
	},

	{
		"status": "prod",
		"date": "2017-07-10",
		"app_key": "gramophone",
		"version": "2.1.0",
		"version_name": "Heavy metal",
		"changes": [
			{"title": "Ajout d'un bouton permettant de mettre en évidence un morceau dans l'explorateur de fichier de l'OS"},
			{"title": "Possibilité de grouper par artistes"},
			{"title": "Possibilité de trier par années, artistes ou albums"},
			{"title": "Prise en charge de plus de formats de date"},
			{"title": "Fix ouverture de l'explorateur de fichier sous Windows"},
		],
	},

	{
		"status": "prod",
		"date": "2017-06-24",
		"app_key": "gramophone",
		"version": "2.0.1",
		"version_name": "Groove metal",
		"changes": [
			{"title": "Fix fast play / resume dans les vues par liste"},
			{"title": "Fix artiste de l'album au scan des musiques"},
			{"title": "Fix plantage scan des musiques vers un dossier accentué"},
			{"title": "Fix slider lorsque repositionné manuellement au début d'une chançon"},
		],
	},

	{
		"status": "prod",
		"date": "2017-05-25",
		"app_key": "gramophone",
		"version": "2.0.0",
		"version_name": "Future house",
		"changes": [
			{"title": "Migration de NWjs vers Electron"},
			{"title": "Prise en charge des formats AAC et FLAC"},
			{"title": "Indexer intégré dans l'interface de paramétrage"},
			{"title": "Options d'affichage : Filtrage par dossier surveillé + Possibilité de ne plus grouper par années"},
			{"title": "Finalisation des contrôles de lecture et de pause rapide (lecture, pause, indicateur de lecture)"},
			{"title": "Coeurs de favoris déplacés à gauche"},
			{"title": "Fix compatibilité macOS 10.12.4 : collection par défaut dans le dossier utilisateur"},
		],
	},

	{
		"status": "prod",
		"date": "2017-01-30",
		"app_key": "gramophone",
		"version": "1.2.0",
		"version_name": "Electro",
		"changes": [
			{"title": "Boutons de lecture rapide sur les albums et sur les morceaux"},
			{"title": "Amélioration des performances d'affichage à l'aide du système de cache HTML et des vignettes JPEG"},
			{"title": "Fix vignettes JPEG sous macOS"},
		],
		"version_assets": [
			{
				"plateform_key": "macos",
				"filename": "gramophone_120_macOS.zip",
			},
			{
				"plateform_key": "win64",
				"filename": "gramophone_120_win64.zip",
			}
		],
	},

	{
		"status": "prod",
		"date": "2016-11-07",
		"app_key": "gramophone",
		"version": "1.1.1",
		"version_name": "Dance",
		"changes": [
			{"title": "Compatibilité Windows / macOS sur le comportement lors de la femerture de la fenêtre"},
		],
	},

	{
		"status": "prod",
		"date": "2016-10-30",
		"app_key": "gramophone",
		"version": "1.1.0",
		"version_name": "Chillwave",
		"changes": [
			{"title": "Contrôles de fenêtres natifs pour macOS"},
			{"title": "L'application quitte plus lorsqu'on ferme sa fenêtre sous macOS"},
			{"title": "Meilleure séparation des morceaux d'un album + meilleur visuel pour les coeurs de favoris"},
			{"title": "Seuls les morceaux d'un album défilent en cas d'overflow (la jaquette et l'entête restent à leur place"},
			{"title": "Possibilité d'ouvrir le dossier contenant les musiques d'un album"},
			{"title": "Possibilité de cliquer sur un artiste pour écrire son nom dans la recherche"},
			{"title": "Meilleur affichage du sélecteur par années avec séparation des décennies"},
		],
	},

	{
		"status": "prod",
		"date": "2016-06-26",
		"app_key": "gramophone",
		"version": "1.0.1",
		"version_name": "Beat",
		"changes": [
			{"title": "Bordures noires sur la version Windows"},
			{"title": "Compatibilité avec les contrôles multimédia sur les claviers (pause, lecture, suivant, précédent, ...)"},
		],
	},

	{
		"status": "prod",
		"date": "2016-03-29",
		"app_key": "gramophone",
		"version": "1.0.0",
		"version_name": "Acid jazz",
		"changes": [
			{"title": "Implémentation des fonctionalités initiales (scan, collection, favoris, lecture et export)"},
		],
	},

]
