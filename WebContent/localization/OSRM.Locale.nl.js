/*
This program is free software; you can redistribute it and/or modify
it under the terms of the GNU AFFERO General Public License as published by
the Free Software Foundation; either version 3 of the License, or
any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
or see http://www.gnu.org/licenses/agpl.txt.
*/

// OSRM localization
// [English language support]


OSRM.Localization["nl"] = {
// own language
"CULTURE": "nl-NL",
"LANGUAGE": "Nederlands",
// gui
"GUI_START": "Begin",
"GUI_END": "Einde",
"GUI_RESET": "&nbsp;&nbsp;Herstellen&nbsp;&nbsp;",
"GUI_ZOOM_ON_ROUTE": "Zoomen op route",
"GUI_ZOOM_ON_USER": "Zoomen op gebruiker",
"GUI_SEARCH": "&nbsp;&nbsp;Weergeven&nbsp;&nbsp;",
"GUI_REVERSE": "Andere richting",
"GUI_START_TOOLTIP": "Voer beginpunt in",
"GUI_END_TOOLTIP": "Voer bestemming in",
"GUI_MAIN_WINDOW": "Hoofdvenster",
"GUI_ZOOM_IN": "Inzoomen",
"GUI_ZOOM_OUT": "Uitzoomen",
// config
"GUI_CONFIGURATION": "Configuratie",
"GUI_LANGUAGE": "Taal",
"GUI_UNITS": "Eenheden",
"GUI_KILOMETERS": "Kilometers",
"GUI_MILES": "Mijlen",
// abbreviations
"GUI_M": "m",
"GUI_KM": "km",
"GUI_MI": "mi",
"GUI_FT": "ft",
"GUI_H": "u",
"GUI_MIN": "min",
"GUI_S": "s",
// mapping
"GUI_MAPPING_TOOLS": "Programma's voor kaarten",
"GUI_HIGHLIGHT_UNNAMED_ROADS": "Accentueer niet-benoemde straten",
"GUI_SHOW_PREVIOUS_ROUTES": "Geef eerdere routes weer",
"GUI_EXTERNAL_TOOLS": "Externe programma's:",
"OPEN_EDITOR": "Bewerker",
"OPEN_JOSM": "JOSM",
"OPEN_OSMBUGS": "Notities",
"OPEN_EDITOR_FAILED": "Zoom in om osm-bewerker te openen.",
"OPEN_JOSM_FAILED": "Zoom in om josm te openen.",
"OPEN_OSMBUGS_FAILED": "Zoom in om een notitie te plaatsen.",
// geocoder
"SEARCH_RESULTS": "Zoekesultaten",
"FOUND_X_RESULTS": "%i resultaten gevonden",
"TIMED_OUT": "Tijd verstreken",
"NO_RESULTS_FOUND": "Geen resultaten gevonden",
"NO_RESULTS_FOUND_SOURCE": "Geen resultaten gevonden voor beginpunt",
"NO_RESULTS_FOUND_TARGET": "Geen resultaten gevonden voor bestemming",
// routing
"ROUTE_DESCRIPTION": "Routebeschrijving",
"GET_LINK_TO_ROUTE": "Maak een link",
"ROUTE_LINK": "Link voor rink",
"GENERATE_LINK_TO_ROUTE": "wachten op link",
"LINK_TO_ROUTE_TIMEOUT": "niet beschikbaar",
"GPX_FILE": "GPX-bestand",
"DISTANCE": "Afstand",
"DURATION": "Duur",
"YOUR_ROUTE_IS_BEING_COMPUTED": "Uw route wordt berekend",
"NO_ROUTE_FOUND": "Geen route mogelijk",
// printing
"OVERVIEW_MAP": "Overzichtskaart",
"NO_ROUTE_SELECTED": "Geen route geselecteerd",
// routing engines
"ENGINE_0": "Auto (snelste)",
"ENGINE_1": "Fiets (snelste)",
// tile server names
// (only required if names are different to OSRM.config)
//"TILE_SERVER_0": "osm.org",
//"TILE_SERVER_1": "osm.de",
//"TILE_SERVER_2": "MapQuest",
//"TILE_SERVER_3": "MapBox Terrain",
//"TILE_SERVER_4": "MapBox Labelled Satellite",
//"TILE_SERVER_5": "MapBox Satellite",
// overlay server names
//(only required if names are different to OSRM.config)
//"OVERLAY_SERVER_0": "Small Components",
// directions
"N": "noord",
"E": "oost",
"S": "zuid",
"W": "west",
"NE": "noordoost",
"SE": "zuidoost",
"SW": "zuidwest",
"NW": "noordwest",
// driving directions
// %s: road name
// %d: direction
// [*]: will only be printed when there actually is a road name
"DIRECTION_0":"Onbekende instructie[ naar <b>%s</b>]",
"DIRECTION_1":"ga door[ op <b>%s</b>]",
"DIRECTION_2":"Ga iets naar rechts[ naar <b>%s</b>]",
"DIRECTION_3":"Ga rechtsaf[ naar <b>%s</b>]",
"DIRECTION_4":"Ga scherp naar rechts[ naar <b>%s</b>]",
"DIRECTION_5":"U-bocht[ naar <b>%s</b>]",
"DIRECTION_6":"Ga scherp naar links[ naar <b>%s</b>]",
"DIRECTION_7":"Ga linksaf[ naar <b>%s</b>]",
"DIRECTION_8":"Ga iets naar links[ naar <b>%s</b>]",
"DIRECTION_10":"Ga naar <b>%d</b>[ op <b>%s</b>]",
"DIRECTION_11-1":"Ga de rotonde op en verlaat die bij de eerste afslag[ naar <b>%s</b>]",
"DIRECTION_11-2":"Ga de rotonde op en verlaat die bij de tweede afslag[ naar <b>%s</b>]",
"DIRECTION_11-3":"Ga de rotonde op en verlaat die bij de derde afslag[ naar <b>%s</b>]",
"DIRECTION_11-4":"Ga de rotonde op en verlaat die bij de vierde afslag[ naar <b>%s</b>]",
"DIRECTION_11-5":"Ga de rotonde op en verlaat die bij de vijfde afslag[ naar <b>%s</b>]",
"DIRECTION_11-6":"Ga de rotonde op en verlaat die bij de zesde afslag[ naar <b>%s</b>]",
"DIRECTION_11-7":"Ga de rotonde op en verlaat die bij de zevende afslag[ naar <b>%s</b>]",
"DIRECTION_11-8":"Ga de rotonde op en verlaat die bij de achtste afslag[ naar <b>%s</b>]",
"DIRECTION_11-9":"Ga de rotonde op en verlaat die bij de negende afslag[ naar <b>%s</b>]",
"DIRECTION_11-x":"Ga de rotonde op en verlaat die bij een van de vele afslagen[ naar <b>%s</b>]",
"DIRECTION_15":"U heeft uw bestemming bereikt",
// street types
"HIGHWAY_DEFAULT": "weg",
"HIGHWAY_PATH": "pad",
"HIGHWAY_FOOTWAY": "voetpad",
"HIGHWAY_CYCLEWAY": "fietspad",
"HIGHWAY_BRIDLEWAY": "ruiterpad",
"HIGHWAY_STEPS": "trap",
"HIGHWAY_MOTORWAY": "snelweg",
"HIGHWAY_MOTORWAY_LINK": "snelweg",
"HIGHWAY_TRUNK": "weg",
"HIGHWAY_TRUNK_LINK": "weg",
"HIGHWAY_PRIMARY": "weg",
"HIGHWAY_PRIMARY_LINK": "weg",
"HIGHWAY_SECONDARY": "weg",
"HIGHWAY_SECONDARY_LINK": "weg",
"HIGHWAY_TERTIARY": "weg",
"HIGHWAY_TERTIARY_LINK": "weg",
"HIGHWAY_LIVING_STREET": "weg in woonwijk",
"HIGHWAY_PEDESTRIAN": "voetgangersgebied",
"HIGHWAY_RESIDENTAL": "weg in woonwijk",
"HIGHWAY_unclassified": "weg",
"HIGHWAY_service": "dienstweg",
"HIGHWAY_track": "baan",
"HIGHWAY_raceway": "racecircuit",
"HIGHWAY_road": "weg",
// notifications
"NOTIFICATION_MAINTENANCE_HEADER":	"Gepland onderhoud",
"NOTIFICATION_MAINTENANCE_BODY":	"The OSRM Website is down for a scheduled maintenance. " + 
									"Please be patient while required updates are performed. " +
									"The site will be back online shortly." +
									"<br/><br/>" + 
									"In the meantime you may want to go out an map a friendly neighborhood near you..." + 
									"<br/><br/><br/>[OSRM]",
"NOTIFICATION_LOCALIZATION_HEADER":	"Did you know? You can change the display language.",
"NOTIFICATION_LOCALIZATION_BODY":	"You can use the pulldown menu in the upper left corner to select your favorite language. " +
									"<br/><br/>" +
									"Don't despair if you cannot find your language of choice. " +
									"If you want, you can help to provide additional translations! " +
									"Visit <a href='https://github.com/DennisSchiefer/Project-OSRM-Web'>here</a> for more information.",
"NOTIFICATION_CLICKING_HEADER":		"Did you know? You can click on the map to set route markers.",
"NOTIFICATION_CLICKING_BODY":		"You can click on the map with the left mouse button to set a source marker (green) or a target marker (red), " +
									"if the source marker already exists. " +
									"The address of the selected location will be displayed in the boxes to the left. " + 
									"<br/><br/>" +
									"You can delete a marker by clicking on it again with the left mouse button.",
"NOTIFICATION_DRAGGING_HEADER":		"Did you know? You can drag each route marker on the map.",
"NOTIFICATION_DRAGGING_BODY":		"You can drag a marker by clicking on it with the left mouse button and holding the button pressed. " +
									"Then you can move the marker around the map and the route will be updated instantaneously. " +
									"<br/><br/>" +
									"You can even create intermediate markers by dragging them off of the main route! ",
"NOTIFICATION_GEOCODERWAIT_HEADER":	"Waiting on Geocoder",
"NOTIFICATION_GEOCODERWAIT_BODY":	"Waiting on results from geocoder.",
"NOTIFICATION_GEOCODERFAIL_HEADER":	"Geocoder Failure",
"NOTIFICATION_GEOCODERFAIL_BODY":	"Failed to retrieve coordinates from geocoder.",
// do not translate below this line
"GUI_LEGAL_NOTICE": "Routing by <a href='http://project-osrm.org/'>Project OSRM</a> - Geocoder by <a href='http://wiki.openstreetmap.org/wiki/Nominatim'>Nominatim</a> - OSRM hosting by <a href='http://algo2.iti.kit.edu/'>KIT</a>",
"GUI_DATA_TIMESTAMP": "data: ",
"GUI_VERSION": "gui: ",
"QR": "QR"
};

// set GUI language on load
if( OSRM.DEFAULTS.LANUGAGE_ONDEMAND_RELOADING == true )
	OSRM.Localization.setLanguage("en", true);
