//Autofill arrays
var states = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois", "Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];
var places = ["Abraham Lincoln Birthplace National Historical Park",
		"Acadia National Park",
		"Adams National Historical Park",
		"Adams National Memorial",
		"African American Civil War Memorial National Memorial",
		"African Burial Ground National Monument",
		"Agate Fossil Beds National Monument",
		"Alagnak Wild River National Wild And Scenic River",
		"Alcatraz Island",
		"Aleutian World War II National Historic Area",
		"Alibates Flint Quarries National Monument",
		"Allegheny Portage Railroad National Historic Site",
		"Amistad National Recreation Area",
		"Anacostia Park",
		"Andersonville National Historic Site",
		"Aniakchak National Monument and Preserve",
		"Andrew Johnson National Historic Site",
		"Antietam National Battlefield",
		"Appomattox Court House National Historical Park",
		"Apostle Islands National Lakeshore",
		"Appalachian National Scenic Trail",
		"Arches National Park",
		"Arlington House The Robert E. Lee Memorial National Memorial",
		"Arkansas Post National Memorial",
		"Assateague Island National Seashore",
		"Aztec Ruins National Monument",
		"Badlands National Park",
		"Bandelier National Monument",
		"Baltimore-Washington National Parkway",
		"Bering Land Bridge National Preserve",
		"Bent's Old Fort National Historic Site",
		"Bear Paw Battlefield",
		"Big Bend National Park",
		"Bighorn Canyon National Recreation Area",
		"Big Cypress National Preserve",
		"Big Hole National Battlefield",
		"Biscayne National Park",
		"Big South Fork National River and Recreation Area National River",
		"Big Thicket National Preserve",
		"Black Canyon Of The Gunnison National Park",
		"Blue Ridge Parkway",
		"Bluestone National Scenic River National Wild And Scenic River",
		"Boston African American National Historic Site",
		"Boston Harbor Islands National Recreation Area",
		"Boston National Historical Park",
		"Booker T. Washington National Monument",
		"Bryce Canyon National Park",
		"Brices Cross Roads National Battlefield Site",
		"Brown v. Board Of Education National Historic Site",
		"Buffalo National River",
		"Buck Island Reef National Monument",
		"Cabrillo National Monument",
		"Canyon De Chelly National Monument",
		"Castle Clinton National Monument",
		"Cape Cod National Seashore",
		"Casa Grande Ruins National Monument",
		"Cape Hatteras National Seashore",
		"Capitol Hill Parks",
		"Cape Krusenstern National Monument",
		"Cape Lookout National Seashore",
		"Cape Henry National Memorial",
		"Canaveral National Seashore",
		"Canyonlands National Park",
		"Capitol Reef National Park",
		"Cane River Creole National Historical Park",
		"Carl Sandburg Home National Historic Site",
		"Castillo De San Marcos National Monument",
		"Catoctin Mountain Park",
		"Carlsbad Caverns National Park",
		"Capulin Volcano National Monument",
		"Carter G. Woodson Home National Historic Site",
		"Chesapeake Bay Gateways",
		"Cedar Creek and Belle Grove National Historical Park",
		"Cedar Breaks National Monument",
		"Chamizal National Memorial",
		"Chattahoochee River National Recreation Area",
		"Chickamauga and Chattanooga National Military Park",
		"Chaco Culture National Historical Park",
		"Chickasaw National Recreation Area",
		"Chiricahua National Monument",
		"Channel Islands National Park",
		"Chesapeake and Ohio Canal National Historical Park",
		"Charles Pinckney National Historic Site",
		"Christiansted National Historic Site",
		"Central High School National Historic Site",
		"City Of Rocks National Reserve",
		"Clara Barton National Historic Site",
		"Claude Moore Colonial Farm",
		"Constitution Gardens",
		"Colorado National Monument",
		"Colonial National Historical Park",
		"Colonial Parkway",
		"Congaree National Park",
		"Coronado National Memorial",
		"Cowpens National Battlefield",
		"Crown of the Continent Ecosystem",
		"Crater Lake National Park",
		"Craters Of The Moon National Monument and Preserve",
		"Cumberland Gap National Historical Park",
		"Cumberland Island National Seashore",
		"Curecanti National Recreation Area",
		"Cuyahoga Valley National Park",
		"David Berger National Memorial",
		"Delaware National Scenic River National Wild And Scenic River",
		"Denali National Park and Preserve",
		"Devils Postpile National Monument",
		"DeSoto National Memorial",
		"Devils Tower National Monument",
		"Death Valley National Park",
		"Delaware Water Gap National Recreation Area",
		"Dinosaur National Monument",
		"Dry Tortugas National Park",
		"Dwight D. Eisenhower National Memorial",
		"East Potomac Park",
		"Ebey's Landing NH Reserve National Reserve",
		"Edgar Allan Poe National Historic Site",
		"Thomas Edison National Historical Park",
		"Effigy Mounds National Monument",
		"Eisenhower National Historic Site",
		"Ellis Island National Monument",
		"El Malpais National Monument",
		"El Morro National Monument",
		"Eleanor Roosevelt National Historic Site",
		"Eugene O'Neill National Historic Site",
		"Everglades National Park",
		"Farmington National Wild And Scenic River",
		"Federal Hall National Memorial",
		"Fire Island National Seashore",
		"First Ladies National Historic Site",
		"Florissant Fossil Beds National Monument",
		"Flight 93 National Memorial",
		"Fort Bowie National Historic Site",
		"Fossil Butte National Monument",
		"Fort Caroline National Memorial",
		"Fort Circle Parks",
		"Fort Davis National Historic Site",
		"Fort Donelson National Battlefield",
		"Fort Dupont Park",
		"Fort Foote Park",
		"Fort Frederica National Monument",
		"Fort Laramie National Historic Site",
		"Fort Larned National Historic Site",
		"Fort Matanzas National Monument",
		"Fort McHenry NM and Historic Shrine National Monument",
		"Fort Moultrie National Monument",
		"Fort Necessity National Battlefield",
		"Fort Point National Historic Site",
		"Fort Pulaski National Monument",
		"Fort Raleigh National Historic Site",
		"Fort Scott National Historic Site",
		"Fort Smith National Historic Site",
		"Fort Stanwix National Monument",
		"Fort Sumter National Monument",
		"Ford's Theatre National Historic Site",
		"Fort Union National Monument",
		"Fort Union Trading Post National Historic Site",
		"Fort Vancouver National Historic Site",
		"Fort Washington Park",
		"Franklin Delano Roosevelt National Memorial",
		"Frederick Douglass National Historic Site",
		"Friendship Hill National Historic Site",
		"Frederick Law Olmsted National Historic Site",
		"Francis Scott Key National Memorial",
		"Fredericksburg and Spotsylvania County Battlefields Memorial National Military Park National Military Park",
		"Gates Of The Arctic National Park and Preserve",
		"Gauley River National Recreation Area",
		"Gateway National Recreation Area",
		"General Grant National Memorial",
		"George Mason Memorial",
		"George Rogers Clark National Historical Park",
		"Gettysburg National Military Park",
		"George Washington Birthplace National Monument",
		"Gila Cliff Dwellings National Monument",
		"Glacier National Park",
		"Glacier Bay National Park and Preserve",
		"Glen Canyon National Recreation Area",
		"Glen Echo Park",
		"Glorieta National Battlefield",
		"Golden Gate National Recreation Area",
		"Governors Island National Monument",
		"Golden Spike National Historic Site",
		"Great Basin National Park",
		"Grand Canyon National Park",
		"Greenbelt Park",
		"Great Egg Harbor National Scenic and Recreational River National Wild And Scenic River",
		"Great Falls Park",
		"Grant-Kohrs Ranch National Historic Site",
		"Grand Portage National Monument",
		"Great Sand Dunes National Park and Preserve",
		"Great Smoky Mountains National Park",
		"Grand Teton National Park",
		"Guilford Courthouse National Military Park",
		"Gulf Islands National Seashore",
		"Guadalupe Mountains National Park",
		"George Washington Carver National Monument",
		"George Washington Memorial Parkway",
		"Harpers Ferry National Historical Park",
		"Hagerman Fossil Beds National Monument",
		"Hamilton Grange National Memorial",
		"Harmony Hall",
		"Haleakala National Park",
		"Hampton National Historic Site",
		"Hawaii Volcanoes National Park",
		"Herbert Hoover National Historic Site",
		"Horseshoe Bend National Military Park",
		"Hopewell Culture National Historical Park",
		"Home Of Franklin D. Roosevelt National Historic Site",
		"Hopewell Furnace National Historic Site",
		"Homestead NM of America National Monument",
		"Hot Springs National Park",
		"Hovenweep National Monument",
		"Harry S. Truman National Historic Site",
		"Hubbell Trading Post National Historic Site",
		"Ice Age National Scenic Trail",
		"Independence National Historical Park",
		"Indiana Dunes National Lakeshore",
		"Isle Royale National Park",
		"James A. Garfield National Historic Site",
		"New Orleans Jazz National Historical Park",
		"Jewel Cave National Monument",
		"Jefferson National Expansion Memorial National Memorial",
		"Thomas Jefferson Memorial",
		"Jean Lafitte National Historical Park and Preserve",
		"Jimmy Carter National Historic Site",
		"John Day Fossil Beds National Monument",
		"John D. Rockefeller Jr. Memorial Parkway",
		"John Ericsson National Memorial",
		"John Fitzgerald Kennedy National Historic Site",
		"John F. Kennedy Center for the Performing Arts",
		"Johnstown Flood National Memorial",
		"John Muir National Historic Site",
		"Joshua Tree National Park",
		"Kaloko-Honokohau National Historical Park",
		"Kalaupapa National Historical Park",
		"Katmai National Park and Preserve",
		"Kenai Fjords National Park",
		"Kennesaw Mountain National Battlefield Park",
		"Kenilworth Park and Aquatic Gardens",
		"Keweenaw National Historical Park",
		"Kings Canyon National Park",
		"Kings Mountain National Military Park",
		"Klondike Gold Rush National Historical Park",
		"Klondike Gold Rush - Seattle Unit National Historical Park",
		"Knife River Indian Villages National Historic Site",
		"Kobuk Valley National Park",
		"Korean War Veterans National Memorial",
		"Lava Beds National Monument",
		"Lake Chelan National Recreation Area",
		"Lake Clark National Park and Preserve",
		"Lake Mead National Recreation Area",
		"Lamprey Wild and Scenic River",
		"Lake Meredith National Recreation Area",
		"Lake Roosevelt National Recreation Area",
		"Lassen Volcanic National Park",
		"Lewis and Clark National Historical Park",
		"Little Bighorn Battlefield National Monument",
		"Lincoln Boyhood National Memorial",
		"Lincoln Home National Historic Site",
		"Lincoln Memorial National Memorial",
		"Little River Canyon National Preserve",
		"Longfellow House - Washington's Headquarters National Historic Site",
		"Lower Saint Croix National Scenic River",
		"Lowell National Historical Park",
		"Lyndon Baines Johnson Memorial Grove on the Potomac National Memorial",
		"Lyndon B. Johnson National Historical Park",
		"Mary McLeod Bethune Council House National Historic Site",
		"Marsh-Billings-Rockefeller National Historical Park",
		"Mammoth Cave National Park",
		"Marin Headlands Sites",
		"National Mall",
		"Martin Luther King Jr National Historic Site",
		"Manassas National Battlefield Park",
		"Manzanar National Historic Site",
		"Manhattan Sites",
		"Maurice National Wild And Scenic River",
		"Martin Van Buren National Historic Site",
		"Maggie L. Walker National Historic Site",
		"McLoughlin House National Historic Site",
		"Meridian Hill Park",
		"Mesa Verde National Park",
		"Mimbres Culture National Monument",
		"Minidoka Internment National Historic Site",
		"Minute Man National Historical Park",
		"Minuteman Missile National Historic Site",
		"Mississippi National River and Recreation Areas National River",
		"Martin Luther King Jr National Historic Site",
		"Missouri National Recreational River National Wild And Scenic River",
		"Montezuma Castle National Monument",
		"Moores Creek National Battlefield",
		"Mojave National Preserve",
		"Monocacy National Battlefield",
		"Mount Rainier National Park",
		"Morristown National Historical Park",
		"Mount Rushmore National Memorial",
		"Mt. Soledad National Memorial",
		"Muir Woods National Monument",
		"Natural Bridges National Monument",
		"National Capital Parks",
		"National Capital Parks-East",
		"National Mall and Memorial Parks",
		"Natchez National Historical Park",
		"Natchez Trace Parkway",
		"Natchez Trace National Scenic Trail",
		"Navajo National Monument",
		"U.S. Navy Memorial",
		"North Cascades National Park Service Complex",
		"New Bedford Whaling National Historical Park",
		"Nez Perce National Historical Park",
		"New River Gorge National River",
		"Nicodemus National Historic Site",
		"Niobrara and Missouri National Scenic and Recreational Rivers",
		"Niobrara National Scenic River National Wild And Scenic River",
		"Ninety Six National Historic Site",
		"National Law Enforcement Officers National Memorial",
		"Noatak National Preserve",
		"North Cascades National Park",
		"North Country National Scenic Trail",
		"National Parks of New York Harbor Management Unit",
		"National Park of American Samoa National Park",
		"Obed Wild and Scenic River National Wild And Scenic River",
		"Ocmulgee National Monument",
		"The Old Stone House",
		"Olympic National Park",
		"Old Post Office Tower",
		"Oregon Caves National Monument",
		"Organ Pipe Cactus National Monument",
		"Oxon Cove Park and Oxon Hill Run",
		"Oxon Run National Parkway",
		"Ozark National Scenic Riverways National River",
		"Palo Alto Battlefield National Historical Park",
		"Pennsylvania Avenue National Historic Site",
		"Paterson Great Falls National Historical Park",
		"Padre Island National Seashore",
		"Parashant National Monument",
		"Pecos National Historical Park",
		"Petrified Forest National Park",
		"Pea Ridge National Military Park",
		"Petersburg National Battlefield",
		"Petroglyph National Monument",
		"Perry's Victory and International Peace Memorial National Memorial",
		"Hohokam Pima National Monument",
		"Peirce Mill Park",
		"Pinnacles National Monument",
		"Pipestone National Monument",
		"Pictured Rocks National Lakeshore",
		"Piscataway Park",
		"Pipe Spring National Monument",
		"Port Chicago Naval Magazine National Memorial",
		"Poverty Point National Monument",
		"Point Reyes National Seashore",
		"President's Park (White House)",
		"Presidio of San Francisco",
		"Prince William Forest Park",
		"Puukohola Heiau National Historic Site",
		"Pu'uhonua o Honaunau National Historical Park",
		"Rainbow Bridge National Monument",
		"Redwood National Park",
		"Richmond National Battlefield Park",
		"Rio Grande Wild and Scenic River National Wild And Scenic River",
		"River Raisin National Battlefield Park",
		"Rock Creek Park",
		"Ross Lake National Recreation Area",
		"Rocky Mountain National Park",
		"Rosie The Riveter WWII Home Front National Historical Park",
		"Roosevelt-Vanderbilt Headquarters",
		"Roger Williams National Memorial",
		"Ronald Reagan Boyhood Home National Historic Site",
		"Russell Cave National Monument",
		"San Antonio Missions National Historical Park",
		"Saint Croix National Scenic River National Wild And Scenic River",
		"Saint Croix Island International Historic Site",
		"San Francisco Maritime National Historical Park",
		"Saint-Gaudens National Historic Site",
		"Saguaro National Park",
		"Sagamore Hill National Historic Site",
		"Saugus Iron Works National Historic Site",
		"San Juan Island National Historical Park",
		"San Juan National Historic Site",
		"Salem Maritime National Historic Site",
		"Santa Monica Mountains National Recreation Area",
		"Sand Creek Massacre National Historic Site",
		"Saint Paul's Church National Historic Site",
		"Salinas Pueblo Missions National Monument",
		"Saratoga National Historical Park",
		"Salt River Bay NHP and Ecological Preserve National Historical Park",
		"Scotts Bluff National Monument",
		"Sequoia and Kings Canyon National Parks",
		"Sequoia National Park",
		"Shenandoah National Park",
		"Shiloh National Military Park",
		"Sitka National Historical Park",
		"Sleeping Bear Dunes National Lakeshore",
		"Springfield Armory National Historic Site",
		"Steamtown National Historic Site",
		"Statue Of Liberty National Monument",
		"Stones River National Battlefield",
		"Sudbury Assabet and Concord National Wild And Scenic River",
		"Sunset Crater Volcano National Monument",
		"Suitland Parkway",
		"Tallgrass Prairie National Preserve",
		"Theodore Roosevelt Island National Memorial",
		"Thaddeus Kosciuszko National Memorial",
		"Theodore Roosevelt Birthplace National Historic Site",
		"Theodore Roosevelt Inaugural National Historic Site",
		"Theodore Roosevelt National Park",
		"Thomas Stone National Historic Site",
		"Timpanogos Cave National Monument",
		"Timucuan Ecological and Historic Preserve",
		"Tonto National Monument",
		"Tuskegee Airmen National Historic Site",
		"Tuskegee Institute National Historic Site",
		"Tumacacori National Historical Park",
		"Tupelo National Battlefield",
		"Tuzigoot National Monument",
		"Ulysses S. Grant National Historic Site",
		"Upper Delaware National Scenic and Recreation River National Wild And Scenic River",
		"Valley Forge National Historical Park",
		"World War II Valor in the Pacific National Monument",
		"Vanderbilt Mansion National Historic Site",
		"Vicksburg National Military Park",
		"Virgin Islands Coral Reef National Monument",
		"Virgin Islands National Park",
		"Vietnam Veterans Memorial National Memorial",
		"Vietnam Womens National Memorial",
		"Voyageurs National Park",
		"Washita Battlefield National Historic Site",
		"Walnut Canyon National Monument",
		"Warren G Harding National Memorial",
		"Waterton Lakes National Park (Canada)",
		"Washington Monument National Memorial",
		"War In The Pacific National Historical Park",
		"Warm Springs Apache",
		"Western Arctic National Parklands",
		"Weir Farm National Historic Site",
		"West Potomac Park",
		"White House (President's Park)",
		"Whiskeytown National Recreation Area",
		"Whitman Mission National Historic Site",
		"White Sands National Monument",
		"Wildcat Brook Wild and Scenic River",
		"Wind Cave National Park",
		"William Jefferson Clinton Birthplace National Historic Site",
		"Wilson's Creek National Battlefield",
		"William Howard Taft National Historic Site",
		"Women's Rights National Historical Park",
		"Wolf Trap National Park for the Performing Arts",
		"Wright Brothers National Memorial",
		"Wrangell - St Elias National Park and Preserve",
		"Wupatki National Monument",
		"World War II Memorial National Memorial",
		"Yellowstone National Park",
		"Yorktown Battlefield",
		"Yosemite National Park",
		"Yukon-Charley Rivers National Preserve",
		"Yucca House National Monument",
		"Zion National Park"];

//Implements overarching search functionality
function search() {
	//Clear previous search results
	clearSearch();
	
	//Removes the map
	var element = document.getElementById("map");
	element.parentNode.removeChild(element);
	
	//Extracts strings from input boxes
	var state = document.getElementById("stateFilter").value;
	var place = document.getElementById("placeFilter").value;
	var query = document.getElementById("querySearch").value;
	var parameters = query.split(" ");
	var q = "";
	var x;

	//Formats input strings to be used for API get requests
	for (x = 0; x < parameters.length; x++) {
		if (x == parameters.length - 1) {
			q += parameters[x];
		} else {
			q += parameters[x] + "%20";  
		}
	}
	
	//Get state code of inputted state filter
	var s = "";
	if (state.length > 0) {
		s = abbrState(state, 'abbr');
	}
	
	//Get park code of inputted place filter
	var p = "";
	if (place.length > 0) {
		p = abbrPlace(place, 'abbr');
	}
	
	//Get search results
	getVisitorCenters(p, s, query);
	getCampgrounds(p, s, query);
	getLessonPlans(p, s, query);
	getPeople(p, s, query);
	getPlaces(p, s, query);
	getAlerts(p, s, query);
	getEvents(p, s, query);
	getArticles(p, s, query);
	getNewsReleases(p, s, query);
	
	//Update collapsible element functionality for new collapsible elements
	update();
	
	//Displays search results
	showPage();
}

//Gets information about relevant visitor centers
function getVisitorCenters(p, s, query) {
	var txt = httpGet("https://developer.nps.gov/api/v1/visitorcenters?limit=200&parkCode=" + p + "&stateCode=" + s + "&q=" + query + "&api_key=qiwIVkT9FagdsHyhO3umyrCWj247FXAatbK65E7g");
	var obj = JSON.parse(txt);
	var i;
	var info = "";

	//Adds collapsible element under "Visitor Centers" category
	for (i = 0; (i < obj.total && i < 50); i++) {
		info += "<button class=\"collapsible\"> &nbsp;" + obj.data[i].name + "</button><div class=\"content\"><p id=\"center" + i.toString() + "\">None</p></div>";
	}
	
	var d1 = document.getElementById("visitorcenters");
	d1.insertAdjacentHTML('afterend', info);

	//Gets relevant information about each visitor center
	for (i = 0; (i < obj.total && i < 50); i++) {
		info = "";

		//Get visitor center description and description URL
		if (obj.data[i].url == "") {
			info += "<ul style=\"list-style-type:square;\"><li><b>Description</b>: " + checkNull(obj.data[i].description) + "</li><br>";	 
		} else {
			info += "<ul style=\"list-style-type:square;\"><li><a href=" + obj.data[i].url + "><b>Description</b></a>: " + checkNull(obj.data[i].description) + "</li><br>";
		}

		//Get visitor center directions and directions URL
		if (obj.data[i].directionsUrl == "") {
			info += "<li><b>Directions</b>: " + checkNull(obj.data[i].directionsInfo) + "</li></ul>";
		} else {
			info += "<li><a href=" + obj.data[i].directionsUrl + "><b>Directions</b></a>: " + checkNull(obj.data[i].directionsInfo) + "</li></ul>";
		}

		//Adds information to relevant collapsible
		document.getElementById("center" + i.toString()).innerHTML = info;
	}
}

function getCampgrounds(p, s, query) {
	var txt = httpGet("https://developer.nps.gov/api/v1/campgrounds?limit=200&parkCode=" + p + "&stateCode=" + s + "&q=" + query + "&api_key=qiwIVkT9FagdsHyhO3umyrCWj247FXAatbK65E7g");
	var obj = JSON.parse(txt);
	var info = "";
	var i;

	for (i = 0; (i < obj.total && i < 50); i++) {
		info += "<button class=\"collapsible\">&nbsp;" + obj.data[i].name + "</button><div class=\"content\"><p id=\"grounds" + i.toString() + "\">None</p></div>";
	}	

	var d1 = document.getElementById("campgrounds");
	d1.insertAdjacentHTML('afterend', info);

	for (i = 0; (i < obj.total && i < 50); i++) {
		info = "";
		if (obj.data[i].reservationsurl == "") {
			info += "<ul style=\"list-style-type:square;\"><li><b>Description</b>: " + checkNull(obj.data[i].description) + "</li><br>";
		} else {
			info += "<ul style=\"list-style-type:square;\"><li><a href=" + obj.data[i].reservationsurl + "><b>Description</b></a>: " + checkNull(obj.data[i].description) + "</li><br>";
		}
		 
		info += "<li><b>Amenities: </b><ul style=\"list-style-type:square;\">";
		 
		info += "<li><ins>Toilets: </ins><ul style=\"list-style-type:square;\">";
		var j;
		for (j = 0; j < obj.data[i].amenities.toilets.length; j++) {
			info += "<li>" + checkNull(obj.data[i].amenities.toilets[j]) + "</li>";
		}
		info += "</li></ul>";
			 
		info += "<li><ins>Showers: </ins><ul style=\"list-style-type:square;\">";
		for (j = 0; j < obj.data[i].amenities.showers.length; j++) {
			info += "<li>" + checkNull(obj.data[i].amenities.showers[j]) + "</li>";
		}
		info += "</li></ul>";
			 
		info += "<li><ins>Potable Water: </ins><ul style=\"list-style-type:square;\">";
		for (j = 0; j < obj.data[i].amenities.potablewater.length; j++) {
			info += "<li>" + checkNull(obj.data[i].amenities.potablewater[j]) + "</li>";
		}
		info += "</li></ul>";
	 
		info += "<li><ins>Internet Connectivity:</ins> " + checkNull(obj.data[i].amenities.internetconnectivity) + "</li>";
		info += "<li><ins>Cell Phone Reception:</ins> " + checkNull(obj.data[i].amenities.cellphonereception) + "</li>";
		info += "<li><ins>Laundry:</ins> " + checkNull(obj.data[i].amenities.laundry) + "</li>";
		info += "<li><ins>Trash/Recycling Collection:</ins> " + checkNull(obj.data[i].amenities.trashrecyclingcollection) + "</li>";
		info += "<li><ins>Dump Station:</ins> " + checkNull(obj.data[i].amenities.dumpstation) + "</li>";
		info += "<li><ins>Camp Store:</ins> " + checkNull(obj.data[i].amenities.campstore) + "</li>";
		info += "<li><ins>Ice Available for Sale:</ins> " + checkNull(obj.data[i].amenities.iceavailableforsale) + "</li>";
		info += "<li><ins>Firewood for Sale:</ins> " + checkNull(obj.data[i].amenities.firewoodforsale) + "</li>";
		info += "<li><ins>Amphitheater:</ins> " + checkNull(obj.data[i].amenities.ampitheater) + "</li>";
		info += "<li><ins>Food Storage Lockers:</ins> " + checkNull(obj.data[i].amenities.foodstoragelockers) + "</li>";
		info += "<li><ins>Staff for Volunteer Host on Site:</ins> " + checkNull(obj.data[i].amenities.staffforcolunteerhostonsite) + "</li>";	 
		info += "</ul></li><br>";
			 
		info += "<li><b>Campsites: </b><ul style=\"list-style-type:square;\">";
		info += "<li><ins>Total Sites:</ins> " + checkNull(obj.data[i].campsites.totalsites) + "</li>";
		info += "<li><ins>Tent Only:</ins> " + checkNull(obj.data[i].campsites.tentonly) + "</li>";
		info += "<li><ins>Other:</ins> " + checkNull(obj.data[i].campsites.group) + "</li>";
		info += "<li><ins>Group:</ins> " + checkNull(obj.data[i].campsites.group) + "</li>";
		info += "<li><ins>Horse:</ins> " + checkNull(obj.data[i].campsites.horse) + "</li>";
		info += "<li><ins>Electrical Hookups:</ins> " + checkNull(obj.data[i].campsites.electricalhookups) + "</li>";
		info += "<li><ins>RV Only:</ins> " + checkNull(obj.data[i].campsites.rvonly) + "</li>";
		info += "<li><ins>Walk Boat To:</ins> " + checkNull(obj.data[i].campsites.walkboatto) + "</li>";
		info += "</ul></li><br>";
			 
		info += "<li><b>Weather: </b>" + checkNull(obj.data[i].weatheroverview) + "</li><br>";	 
	 
		if (obj.data[i].regulationsurl == "") {
			info += "<li><b>Regulations</b>: " + checkNull(obj.data[i].regulationsoverview) + "</li><br>";
		} else {
			info += "<li><a href=" + checkNull(obj.data[i].regulationsurl) + "><b>Regulations</b></a>: " + checkNull(obj.data[i].regulationsoverview) + "</li><br>";
		}
	 
	 
		info += "<li><b>Accessibility: </b><ul style=\"list-style-type:square;\">";
		info += "<li><ins>Classifications:</ins> <ul style=\"list-style-type:square;\">";

		for (j = 0; j < obj.data[i].accessibility.classifications.length; j++) {
			info += "<li>" + checkNull(obj.data[i].accessibility.classifications[j]) + "</li>";
		}
			 
		info += "</li></ul><li><ins>Access Roads:</ins> <ul style=\"list-style-type:square;\">";

		for (j = 0; j < obj.data[i].accessibility.accessroads.length; j++) {
			info += "<li>" + checkNull(obj.data[i].accessibility.accessroads[j]) + "</li>";
		}
	 
		info += "</li></ul><li><ins>Internet Info:</ins> " + checkNull(obj.data[i].accessibility.internetinfo) + "</li>";
		info += "<li><ins>Cell Phone Info:</ins> " + checkNull(obj.data[i].accessibility.cellphoneinfo) + "</li>";
		info += "<li><ins>Firestove Policy:</ins> " + checkNull(obj.data[i].accessibility.firestovepolicy) + "</li>";
		info += "<li><ins>RVs Allowed:</ins> " + checkNull(obj.data[i].accessibility.rvallowed) + "</li>";	 info += "<li><ins>RV Info:</ins> " + checkNull(obj.data[i].accessibility.rvinfo) + "</li>";
		info += "<li><ins>RV Max Lenth:</ins> " + checkNull(obj.data[i].accessibility.rvmaxlength) + "</li>";
		info += "<li><ins>Trailers Allowed:</ins> " + checkNull(obj.data[i].accessibility.trailerallowed) + "</li>";
		info += "<li><ins>Trailer Max Length:</ins> " + checkNull(obj.data[i].accessibility.trailermaxlength) + "</li>";
		info += "<li><ins>Wheel Chair Access:</ins> " + checkNull(obj.data[i].accessibility.wheelchairaccess) + "</li>";
		info += "<li><ins>ADA Info:</ins> " + checkNull(obj.data[i].accessibility.adainfo) + "</li>";
		info += "<li><ins>Additional Info:</ins> " + checkNull(obj.data[i].accessibility.additionalinfo) + "</li>";
		info += "</ul></li><br>";
	 
		info += "<li><b>Reservations Description: </b>" + checkNull(obj.data[i].reservationsdescription) + "</li><br>"
		info += "<li><b>Reservations Sites First Come: </b>" + checkNull(obj.data[i].reservationssitesfirstcome) + "</li><br>";
		info += "<li><b>Reservations Sites Reservable: </b>" + checkNull(obj.data[i].reservationssitesreservable) + "</li><br>";
		
		
		if (obj.data[i].directionsUrl == "") {
			info += "<li><b>Directions</b>: " + checkNull(obj.data[i].directionsoverview) + "</li></ul>";
		} else {
			info += "<li><a href=" + obj.data[i].directionsUrl + "><b>Directions</b></a>: " + checkNull(obj.data[i].directionsoverview) + "</li></ul>";
		}
		
		document.getElementById("grounds" + i.toString()).innerHTML = info;
	}
}

function getAlerts(p, s, query) {
	var txt = httpGet("https://developer.nps.gov/api/v1/alerts?limit=200&parkCode=" + p + "&stateCode=" + s + "&q=" + query + "&api_key=qiwIVkT9FagdsHyhO3umyrCWj247FXAatbK65E7g");
	var obj = JSON.parse(txt);
	var info = "";
	var i;
	  
	for (i = 0; (i < obj.total && i < 50); i++) {
		info += "<button class=\"collapsible\"> &nbsp;" + checkNull(obj.data[i].title) + "</button><div class=\"content\" style><p id=\"al" + i.toString() + "\">None</p></div>";
	}
	
	var d1 = document.getElementById("alerts");
	d1.insertAdjacentHTML('afterend', info);
	  
	for (i = 0; (i < obj.total && i < 50); i++) {
		info = "";
		info += checkNull(obj.data[i].description);
		document.getElementById("al" + i.toString()).innerHTML = info;	
	}
}

function getEvents(p, s, query) {
	var txt = httpGet("https://developer.nps.gov/api/v1/events?limit=200&parkCode=" + p + "&stateCode=" + s + "&q=" + query + "&api_key=qiwIVkT9FagdsHyhO3umyrCWj247FXAatbK65E7g");
	var obj = JSON.parse(txt);
	var info = "";
	var i;
	  
	for (i = 0; (i < obj.pagesize && i < obj.total && i < 50); i++) {
		info += "<button class=\"collapsible\"> &nbsp;" + checkNull(obj.data[i].title) + " (" + checkNull(obj.data[i].category) + ")</button><div class=\"content\" style><p id=\"ev" + i.toString() + "\">None</p></div>";
	}
	
	var d1 = document.getElementById("events");
	d1.insertAdjacentHTML('afterend', info); 
	  
	for (i = 0; (i < obj.pagesize && i < obj.total && i < 50); i++) {
		info = "";
		info += checkNull(obj.data[i].description);
		info += "<li><b>Location: </b>" + checkNull(obj.data[i].location) + "</li><br>";
		info += "<li><b>Fee Info: </b>" + checkNull(obj.data[i].feeinfo) + "</li><br>";	 
	 
		info += "<li><b>Types:</b> <ul style=\"list-style-type:square;\">";
		for (j = 0; j < obj.data[i].types.length; j++) {
			info += "<li>" + checkNull(obj.data[i].types[j]) + "</li>";
		}
		info += "</li></ul>";

		info += "<li><b>Times:</b> <ul style=\"list-style-type:square;\">";
		for (j = 0; j < obj.data[i].times.length; j++) {
			info += "<li>Time Start: " + checkNull(obj.data[i].times[j].timestart) + "</li>";
			info += "<li>Time End: " + checkNull(obj.data[i].times[j].timeend) + "</li>";
		}
		info += "</li></ul>";	 
	 
		info += "<li><b>Dates:</b> <ul style=\"list-style-type:square;\">";
		for (j = 0; j < obj.data[i].dates.length; j++) {
			info += "<li>" + checkNull(obj.data[i].dates[j]) + "</li>";
		}
		info += "</li></ul>";
	 
		info += "<li><b>Tags:</b> <ul style=\"list-style-type:square;\">";
		for (j = 0; j < obj.data[i].tags.length; j++) {
			info += "<li>" + checkNull(obj.data[i].tags[j]) + "</li>";
		}
		info += "</li></ul><br>";

		document.getElementById("ev" + i.toString()).innerHTML = info;
	}	
}

function getLessonPlans(p, s, query) {
	var txt = httpGet("https://developer.nps.gov/api/v1/lessonplans?limit=200&parkCode=" + p + "&stateCode=" + s + "&q=" + query + "&api_key=qiwIVkT9FagdsHyhO3umyrCWj247FXAatbK65E7g");
	var obj = JSON.parse(txt);
	var info = "";
	var i;

	for (i = 0; (i < obj.total && i < 50); i++) {
		if (obj.data[i].url == "") {
			info += "<button class=\"collapsible\"> &nbsp;" + checkNull(obj.data[i].title) + " (" + checkNull(obj.data[i].subject) + ")</button><div class=\"content\"><p id=\"lp" + i.toString() + "\">None</p></div>";
		} else {
			info += "<button class=\"collapsible\"> &nbsp;<a href=" + obj.data[i].url +">"+ checkNull(obj.data[i].title) + " (" + checkNull(obj.data[i].subject) + ")</a></button><div class=\"content\"><p id=\"lp" + i.toString() + "\">None</p></div>";
		}
	}	
	
	var d1 = document.getElementById("lessonplans");
	d1.insertAdjacentHTML('afterend', info);

	for (i = 0; (i < obj.total && i < 50); i++) {
		info = "";		
		info += "<ul style=\"list-style-type:square;\"><li><ins>Grade Level:</ins> " + checkNull(obj.data[i].gradelevel) + "</li>";
		info += "<li><ins>Duration:</ins> " + checkNull(obj.data[i].duration) + "</li>";
		info += "<li><ins>Question/Objective:</ins> " + checkNull(obj.data[i].questionobjective) + "</li>";
		info += "<li><ins>Common Core:</ins> " + checkNull(obj.data[i].commoncore.statestandards) + "</li></ul>";
		document.getElementById("lp" + i.toString()).innerHTML = info;
	}
}

function getPeople(p, s, query) {
	var txt = httpGet("https://developer.nps.gov/api/v1/people?limit=200&parkCode=" + p + "&stateCode=" + s + "&q=" + query + "&api_key=qiwIVkT9FagdsHyhO3umyrCWj247FXAatbK65E7g");
	var obj = JSON.parse(txt);
	var info = "";
	var i;

	for (i = 0; (i < obj.total && i < 50); i++) {
		info += "<button class=\"collapsible\">" + checkNull(obj.data[i].title) + "</button><div class=\"content\" style><p id=\"people" + i.toString() + "\">None</p></div>";
	}
	
	var d1 = document.getElementById("relevantpeople");
	d1.insertAdjacentHTML('afterend', info);
	  
	for (i = 0; (i < obj.total && i < 50); i++) {
		info = "";
		info += "<a href=" + obj.data[i].url + "><b>" + checkNull(obj.data[i].title) + ":</b></a><br>";
		info += "<img src=" + obj.data[i].listingimage.url + " alt=" + checkNull(obj.data[i].listingimage.altText) + " style=\"max-width: 500px; min-width: 490px;\"><br>";
		info += checkNull(obj.data[i].listingdescription) + "<br>";
		document.getElementById("people" + i.toString()).innerHTML = info;	
	}
}

function getPlaces(p, s, query) {
	var txt = httpGet("https://developer.nps.gov/api/v1/places?limit=200&parkCode=" + p + "&stateCode=" + s + "&q=" + query + "&api_key=qiwIVkT9FagdsHyhO3umyrCWj247FXAatbK65E7g");
	var obj = JSON.parse(txt);
	var info = "";
	var i;

	for (i = 0; (i < obj.total && i < 50); i++) {
		if (obj.data[i].url == "") {
			info += "<button class=\"collapsible\"> &nbsp;" + checkNull(obj.data[i].title) + "</button><div class=\"content\"><p id=\"place" + i.toString() + "\">None</p></div>";
		} else {
			info += "<button class=\"collapsible\"> &nbsp;<a href=" + obj.data[i].url +">"+ checkNull(obj.data[i].title) + "</a></button><div class=\"content\"><p id=\"place" + i.toString() + "\">None</p></div>";
		}	
	}
	
	var d1 = document.getElementById("relevantplaces");
	d1.insertAdjacentHTML('afterend', info);
	  
	for (i = 0; (i < obj.total && i < 50); i++) {
		info = "";
		info += "<b>Description: </b>" + checkNull(obj.data[i].listingdescription) + "<br><br>";

		if (obj.data[i].listingimage.url != "") {
			info += "<img src=" + obj.data[i].listingimage.url + " alt=" + checkNull(obj.data[i].listingimage.altText) + " style=\"max-width: 500px; min-width: 490px;\"><br>";
		}
			 
		document.getElementById("place" + i.toString()).innerHTML = info;	
	}
}

function getArticles(p, s, query) {
	var txt = httpGet("https://developer.nps.gov/api/v1/articles?limit=200&parkCode=" + p + "&stateCode=" + s + "&q=" + query + "&api_key=qiwIVkT9FagdsHyhO3umyrCWj247FXAatbK65E7g");
	var obj = JSON.parse(txt);
	var info = "";
	var i;
	  
	for (i = 0; (i < obj.total && i < 50); i++) {
		if (obj.data[i].url == "") {
			info += "<button class=\"collapsible\"> &nbsp;" + checkNull(obj.data[i].title) + "</button><div class=\"content\"><p id=\"art" + i.toString() + "\">None</p></div>";
		} else {
			info += "<button class=\"collapsible\"> &nbsp;<a href=" + obj.data[i].url +">"+ checkNull(obj.data[i].title) + "</a></button><div class=\"content\"><p id=\"art" + i.toString() + "\">None</p></div>";
		}	
	}
	
	var d1 = document.getElementById("articles");
	d1.insertAdjacentHTML('afterend', info);  

	for (i = 0; (i < obj.total && i < 50); i++) {
		info = "";
		info += "<b>Description: </b>" + checkNull(obj.data[i].listingdescription) + "<br><br>";

		if (obj.data[i].listingimage.url != "") {
			info += "<img src=" + obj.data[i].listingimage.url + " alt=" + checkNull(obj.data[i].listingimage.altText) + " style=\"max-width: 500px; min-width: 490px;\"><br>";
		}
		document.getElementById("art" + i.toString()).innerHTML = info;
	}
}

function getNewsReleases(p, s, query) {
	var txt = httpGet("https://developer.nps.gov/api/v1/newsreleases?limit=200&parkCode=" + p + "&stateCode=" + s + "&q=" + query + "&api_key=qiwIVkT9FagdsHyhO3umyrCWj247FXAatbK65E7g");
	var obj = JSON.parse(txt);
	var info = "";
	var i;

	for (i = 0; (i < obj.total && i < 50); i++) {
		if (obj.data[i].url == "") {
			info += "<button class=\"collapsible\"> &nbsp;" + checkNull(obj.data[i].title) + "</button><div class=\"content\"><p id=\"news" + i.toString() + "\">None</p></div>";
		} else {
			info += "<button class=\"collapsible\"> &nbsp;<a href=" + obj.data[i].url +">"+ checkNull(obj.data[i].title) + "</a></button><div class=\"content\"><p id=\"news" + i.toString() + "\">None</p></div>";
		}		}
	
	var d1 = document.getElementById("newsreleases");
	d1.insertAdjacentHTML('afterend', info); 
	  
	for (i = 0; (i < obj.total && i < 50); i++) {
		info = "";
		info += "<b>Description: </b>" + obj.data[i].abstract + "<br>";
		if (obj.data[i].image.url != "") {
			info += "<img src=" + obj.data[i].image.url + " alt=" + checkNull(obj.data[i].image.altText) + " style=\"max-width: 500px; min-width: 490px;\"><br>";
		}
		document.getElementById("news" + i.toString()).innerHTML = info;
	}
}

//Checks if string argument is null and sets default value ("N/A")
function checkNull(str) {
	if (str == "") {
		return "N/A";
	} else {
		return(str);
	}
}

//Updates the page and shows the search results
function showPage() {
  document.getElementById("myDiv").style.display = "block";
}

//Adds spinner to the page
function addSpinner(el, static_pos)
{
  var spinner = el.children('.spinner');
  if (spinner.length && !spinner.hasClass('spinner-remove')) return null;
  !spinner.length && (spinner = $('<div class="spinner' + (static_pos ? '' : ' spinner-absolute') + '"/>').appendTo(el));
  animateSpinner(spinner, 'add');
}

//Removes loading spinner after loading complete
function removeSpinner(el, complete)
{
  var spinner = el.children('.spinner');
  spinner.length && animateSpinner(spinner, 'remove', complete);
}

//Provides loading spinner animation
function animateSpinner(el, animation, complete)
{
  if (el.data('animating')) {
    el.removeClass(el.data('animating')).data('animating', null);
    el.data('animationTimeout') && clearTimeout(el.data('animationTimeout'));
  }
  el.addClass('spinner-' + animation).data('animating', 'spinner-' + animation);
  el.data('animationTimeout', setTimeout(function() { animation == 'remove' && el.remove(); complete && complete(); }, parseFloat(el.css('animation-duration')) * 1000));
}

//Loads Ajax to for loading spinner functionality
function loadAjax() {
  $.ajax({
    url: 'https://reqres.in/api/?delay=2',
    beforeSend: function () {
      $('#ajax-button').attr('disabled', true);
      $('#ajax-container').html('');
      addSpinner($('#ajax-container'));
    },
    complete: function (response) {
      $('#ajax-button').attr('disabled', false);
		//Executes search function
      removeSpinner($('#ajax-container'), search());
    }
  });
}

//Clears previous search results
function clearSearch() {
	var i, elements = document.getElementsByClassName('collapsible');
	for (i = elements.length; i--;) {         
		elements[i].parentNode.removeChild(elements[i]);             
	}
}

//Updates event listeners for all collapsible elements
function update(){
	var coll = document.getElementsByClassName("collapsible");
	var i;

	for (i = 0; i < coll.length; i++) {
		coll[i].addEventListener("click", function() {
			this.classList.toggle("active");
			var content = this.nextElementSibling;
			
			if (content.style.maxHeight){
				content.style.maxHeight = null;
			} else {
				content.style.maxHeight = content.scrollHeight + "px";
			} 
		});
	}
}

//Autocomplete functionality. Takes 2 inputs (autocomplete field and array of possible autocomplete values)
function autocomplete(inp, arr) {
	var currentFocus;
	
	//Execute functions when user types into the text field
	inp.addEventListener("input", function(e) {
		var a, b, i, val = this.value;
		
		//Closes already open autocomplete lists
		closeAllLists();
		
		if (!val) {
			return false;
		}
		
		currentFocus = -1;
		
		//Creates div element for dropdown
		a = document.createElement("DIV");
		a.setAttribute("id", this.id + "autocomplete-list");
		a.setAttribute("class", "autocomplete-items");
		
		//Adds dropdown element to autocomplete text field
		this.parentNode.appendChild(a);
		
		for (i = 0; i < arr.length; i++) {
			//Checks if item has same starting letter as text field input
			if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
				//Creates entry for each match
				b = document.createElement("DIV");
				
				//Styles the entry
				b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
				b.innerHTML += arr[i].substr(val.length);
				
				b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
				
				//Execute function for user clicks on item
				b.addEventListener("click", function(e) {
					//Insert autocomplete item
					inp.value = this.getElementsByTagName("input")[0].value;
					//Close autocomplete lists
					closeAllLists();
				});
				
				a.appendChild(b);
			}
		}
	});
	
	//Provides functionality for keyboard key presses
	inp.addEventListener("keydown", function(e) {
		var x = document.getElementById(this.id + "autocomplete-list");
		if (x) x = x.getElementsByTagName("div");
		
		//Allows use of arrow keys to navigate dropdown
		if (e.keyCode == 40) {
			//Down arrow key increments through dropdown list
			currentFocus++;
			addActive(x);
		} else if (e.keyCode == 38) {
			//Up arrow key decrements through dropdown list
			currentFocus--;
			addActive(x);
		} else if (e.keyCode == 13) {
			//Prevents enter key from submitting form
			e.preventDefault();
			if (currentFocus > -1) {
				//Clicks on the current item
				if (x) x[currentFocus].click();
			}
		}
	});

	//Adds active state to element (what user sees as blue highlight)
	function addActive(x) {
		if (!x) return false;
		removeActive(x);
		if (currentFocus >= x.length) currentFocus = 0;
		if (currentFocus < 0) currentFocus = (x.length - 1);
		x[currentFocus].classList.add("autocomplete-active");
	}

	//Remove active state from all elements
	function removeActive(x) {
		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove("autocomplete-active");
		}
	}
	function closeAllLists(elmnt) {
		//Close all autocomplete lists except the argument
		var x = document.getElementsByClassName("autocomplete-items");
		for (var i = 0; i < x.length; i++) {
			if (elmnt != x[i] && elmnt != inp) {
				x[i].parentNode.removeChild(x[i]);
			}
		}
	}
	
	//Functionality for user clicks in the document
	document.addEventListener("click", function (e) {
		closeAllLists(e.target);
	});
}

//Functionality to convert between full state name and state code
function abbrState(input, to) {
	//Stores state names and corresponding state codes
	var states = [
		['Arizona', 'AZ'],
		['Alabama', 'AL'],
		['Alaska', 'AK'],
		['Arizona', 'AZ'],
		['Arkansas', 'AR'],
		['California', 'CA'],
		['Colorado', 'CO'],
		['Connecticut', 'CT'],
		['Delaware', 'DE'],
		['Florida', 'FL'],
		['Georgia', 'GA'],
		['Hawaii', 'HI'],
		['Idaho', 'ID'],
		['Illinois', 'IL'],
		['Indiana', 'IN'],
		['Iowa', 'IA'],
		['Kansas', 'KS'],
		['Kentucky', 'KY'],
		['Louisiana', 'LA'],
		['Maine', 'ME'],
		['Maryland', 'MD'],
		['Massachusetts', 'MA'],
		['Michigan', 'MI'],
		['Minnesota', 'MN'],
		['Mississippi', 'MS'],
		['Missouri', 'MO'],
		['Montana', 'MT'],
		['Nebraska', 'NE'],
		['Nevada', 'NV'],
		['New Hampshire', 'NH'],
		['New Jersey', 'NJ'],
		['New Mexico', 'NM'],
		['New York', 'NY'],
		['North Carolina', 'NC'],
		['North Dakota', 'ND'],
		['Ohio', 'OH'],
		['Oklahoma', 'OK'],
		['Oregon', 'OR'],
		['Pennsylvania', 'PA'],
		['Rhode Island', 'RI'],
		['South Carolina', 'SC'],
		['South Dakota', 'SD'],
		['Tennessee', 'TN'],
		['Texas', 'TX'],
		['Utah', 'UT'],
		['Vermont', 'VT'],
		['Virginia', 'VA'],
		['Washington', 'WA'],
		['West Virginia', 'WV'],
		['Wisconsin', 'WI'],
		['Wyoming', 'WY'],
	];

	if (to == 'abbr') {
		//Gets state code of specified state name
		input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
		for(i = 0; i < states.length; i++) {
			if(states[i][0] == input) {
				return(states[i][1]);
			}
		}    
	} else if (to == 'name') {
		//Gets state name of specified state code
		input = input.toUpperCase();
		for(i = 0; i < states.length; i++) {
			if(states[i][1] == input){
				return(states[i][0]);
			}
		}    
	}
}

//Functionality to convert between full park name and park code
function abbrPlace(input, to) {
	//Stores park places and corresponding park codes
	var places = [
      ['Abraham Lincoln Birthplace National Historical Park', 'ABLI'],
		['Acadia National Park', 'ACAD'],
		['Adams National Historical Park', 'ADAM'],
		['Adams National Memorial', 'ADNM'],
		['African American Civil War Memorial National Memorial', 'AFAM'],
		['African Burial Ground National Monument', 'AFBG'],
		['Agate Fossil Beds National Monument', 'AGFO'],
		['Alagnak Wild River National Wild And Scenic River', 'ALAG'],
		['Alcatraz Island', 'ALCA'],
		['Aleutian World War II National Historic Area', 'ALEU'],
		['Alibates Flint Quarries National Monument', 'ALFL'],
		['Allegheny Portage Railroad National Historic Site', 'ALPO'],
		['Amistad National Recreation Area', 'AMIS'],
		['Anacostia Park', 'ANAC'],
		['Andersonville National Historic Site', 'ANDE'],
		['Aniakchak National Monument and Preserve', 'ANIA'],
		['Andrew Johnson National Historic Site', 'ANJO'],
		['Antietam National Battlefield', 'ANTI'],
		['Appomattox Court House National Historical Park', 'APCO'],
		['Apostle Islands National Lakeshore', 'APIS'],
		['Appalachian National Scenic Trail', 'APPA'],
		['Arches National Park', 'ARCH'],
		['Arlington House The Robert E. Lee Memorial National Memorial', 'ARHO'],
		['Arkansas Post National Memorial', 'ARPO'],
		['Assateague Island National Seashore', 'ASIS'],
		['Aztec Ruins National Monument', 'AZRU'],
		['Badlands National Park', 'BADL'],
		['Bandelier National Monument', 'BAND'],
		['Baltimore-Washington National Parkway', 'BAWA'],
		['Bering Land Bridge National Preserve', 'BELA'],
		['Bent\'s Old Fort National Historic Site', 'BEOL'],
		['Bear Paw Battlefield', 'BEPA'],
		['Big Bend National Park', 'BIBE'],
		['Bighorn Canyon National Recreation Area', 'BICA'],
		['Big Cypress National Preserve', 'BICY'],
		['Big Hole National Battlefield', 'BIHO'],
		['Biscayne National Park', 'BISC'],
		['Big South Fork National River and Recreation Area National River', 'BISO'],
		['Big Thicket National Preserve', 'BITH'],
		['Black Canyon Of The Gunnison National Park', 'BLCA'],
		['Blue Ridge Parkway', 'BLRI'],
		['Bluestone National Scenic River National Wild And Scenic River', 'BLUE'],
		['Boston African American National Historic Site', 'BOAF'],
		['Boston Harbor Islands National Recreation Area', 'BOHA'],
		['Boston National Historical Park', 'BOST'],
		['Booker T. Washington National Monument', 'BOWA'],
		['Bryce Canyon National Park', 'BRCA'],
		['Brices Cross Roads National Battlefield Site', 'BRCR'],
		['Brown v. Board Of Education National Historic Site', 'BRVB'],
		['Buffalo National River', 'BUFF'],
		['Buck Island Reef National Monument', 'BUIS'],
		['Cabrillo National Monument', 'CABR'],
		['Canyon De Chelly National Monument', 'CACH'],
		['Castle Clinton National Monument', 'CACL'],
		['Cape Cod National Seashore', 'CACO'],
		['Casa Grande Ruins National Monument', 'CAGR'],
		['Cape Hatteras National Seashore', 'CAHA'],
		['Capitol Hill Parks', 'CAHE'],
		['Cape Krusenstern National Monument', 'CAKR'],
		['Cape Lookout National Seashore', 'CALO'],
		['Cape Henry National Memorial', 'CAME'],
		['Canaveral National Seashore', 'CANA'],
		['Canyonlands National Park', 'CANY'],
		['Capitol Reef National Park', 'CARE'],
		['Cane River Creole National Historical Park', 'CARI'],
		['Carl Sandburg Home National Historic Site', 'CARL'],
		['Castillo De San Marcos National Monument', 'CASA'],
		['Catoctin Mountain Park', 'CATO'],
		['Carlsbad Caverns National Park', 'CAVE'],
		['Capulin Volcano National Monument', 'CAVO'],
		['Carter G. Woodson Home National Historic Site', 'CAWO'],
		['Chesapeake Bay Gateways', 'CBPO'],
		['Cedar Creek and Belle Grove National Historical Park', 'CEBE'],
		['Cedar Breaks National Monument', 'CEBR'],
		['Chamizal National Memorial', 'CHAM'],
		['Chattahoochee River National Recreation Area', 'CHAT'],
		['Chickamauga and Chattanooga National Military Park', 'CHCH'],
		['Chaco Culture National Historical Park', 'CHCU'],
		['Chickasaw National Recreation Area', 'CHIC'],
		['Chiricahua National Monument', 'CHIR'],
		['Channel Islands National Park', 'CHIS'],
		['Chesapeake and Ohio Canal National Historical Park', 'CHOH'],
		['Charles Pinckney National Historic Site', 'CHPI'],
		['Christiansted National Historic Site', 'CHRI'],
		['Central High School National Historic Site', 'CHSC'],
		['City Of Rocks National Reserve', 'CIRO'],
		['Clara Barton National Historic Site', 'CLBA'],
		['Claude Moore Colonial Farm', 'CLMO'],
		['Constitution Gardens', 'COGA'],
		['Colorado National Monument', 'COLM'],
		['Colonial National Historical Park', 'COLO'],
		['Colonial Parkway', 'COLP'],
		['Congaree National Park', 'CONG'],
		['Coronado National Memorial', 'CORO'],
		['Cowpens National Battlefield', 'COWP'],
		['Crown of the Continent Ecosystem', 'CRCO'],
		['Crater Lake National Park', 'CRLA'],
		['Craters Of The Moon National Monument and Preserve', 'CRMO'],
		['Cumberland Gap National Historical Park', 'CUGA'],
		['Cumberland Island National Seashore', 'CUIS'],
		['Curecanti National Recreation Area', 'CURE'],
		['Cuyahoga Valley National Park', 'CUVA'],
		['David Berger National Memorial', 'DABE'],
		['Delaware National Scenic River National Wild And Scenic River', 'DELA'],
		['Denali National Park and Preserve', 'DENA'],
		['Devils Postpile National Monument', 'DEPO'],
		['DeSoto National Memorial', 'DESO'],
		['Devils Tower National Monument', 'DETO'],
		['Death Valley National Park', 'DEVA'],
		['Delaware Water Gap National Recreation Area', 'DEWA'],
		['Dinosaur National Monument', 'DINO'],
		['Dry Tortugas National Park', 'DRTO'],
		['Dwight D. Eisenhower National Memorial', 'DWEI'],
		['East Potomac Park', 'EAPO'],
		['Ebey\'s Landing NH Reserve National Reserve', 'EBLA'],
		['Edgar Allan Poe National Historic Site', 'EDAL'],
		['Thomas Edison National Historical Park', 'EDIS'],
		['Effigy Mounds National Monument', 'EFMO'],
		['Eisenhower National Historic Site', 'EISE'],
		['Ellis Island National Monument', 'ELIS'],
		['El Malpais National Monument', 'ELMA'],
		['El Morro National Monument', 'ELMO'],
		['Eleanor Roosevelt National Historic Site', 'ELRO'],
		['Eugene O\'Neill National Historic Site', 'EUON'],
		['Everglades National Park', 'EVER'],
		['Farmington National Wild And Scenic River', 'FARM'],
		['Federal Hall National Memorial', 'FEHA'],
		['Fire Island National Seashore', 'FIIS'],
		['First Ladies National Historic Site', 'FILA'],
		['Florissant Fossil Beds National Monument', 'FLFO'],
		['Flight 93 National Memorial', 'FLNI'],
		['Fort Bowie National Historic Site', 'FOBO'],
		['Fossil Butte National Monument', 'FOBU'],
		['Fort Caroline National Memorial', 'FOCA'],
		['Fort Circle Parks', 'FOCI'],
		['Fort Davis National Historic Site', 'FODA'],
		['Fort Donelson National Battlefield', 'FODO'],
		['Fort Dupont Park', 'FODU'],
		['Fort Foote Park', 'FOFO'],
		['Fort Frederica National Monument', 'FOFR'],
		['Fort Laramie National Historic Site', 'FOLA'],
		['Fort Larned National Historic Site', 'FOLS'],
		['Fort Matanzas National Monument', 'FOMA'],
		['Fort McHenry NM and Historic Shrine National Monument', 'FOMC'],
		['Fort Moultrie National Monument', 'FOMO'],
		['Fort Necessity National Battlefield', 'FONE'],
		['Fort Point National Historic Site', 'FOPO'],
		['Fort Pulaski National Monument', 'FOPU'],
		['Fort Raleigh National Historic Site', 'FORA'],
		['Fort Scott National Historic Site', 'FOSC'],
		['Fort Smith National Historic Site', 'FOSM'],
		['Fort Stanwix National Monument', 'FOST'],
		['Fort Sumter National Monument', 'FOSU'],
		['Ford\'s Theatre National Historic Site', 'FOTH'],
		['Fort Union National Monument', 'FOUN'],
		['Fort Union Trading Post National Historic Site', 'FOUS'],
		['Fort Vancouver National Historic Site', 'FOVA'],
		['Fort Washington Park', 'FOWA'],
		['Franklin Delano Roosevelt National Memorial', 'FRDE'],
		['Frederick Douglass National Historic Site', 'FRDO'],
		['Friendship Hill National Historic Site', 'FRHI'],
		['Frederick Law Olmsted National Historic Site', 'FRLA'],
		['Francis Scott Key National Memorial', 'FRSC'],
		['Fredericksburg and Spotsylvania County Battlefields Memorial National Military Park National Military Park', 'FRSP'],
		['Gates Of The Arctic National Park and Preserve', 'GAAR'],
		['Gauley River National Recreation Area', 'GARI'],
		['Gateway National Recreation Area', 'GATE'],
		['General Grant National Memorial', 'GEGR'],
		['George Mason Memorial', 'GEMM'],
		['George Rogers Clark National Historical Park', 'GERO'],
		['Gettysburg National Military Park', 'GETT'],
		['George Washington Birthplace National Monument', 'GEWA'],
		['Gila Cliff Dwellings National Monument', 'GICL'],
		['Glacier National Park', 'GLAC'],
		['Glacier Bay National Park and Preserve', 'GLBA'],
		['Glen Canyon National Recreation Area', 'GLCA'],
		['Glen Echo Park', 'GLEC'],
		['Glorieta National Battlefield', 'GLOR'],
		['Golden Gate National Recreation Area', 'GOGA'],
		['Governors Island National Monument', 'GOIS'],
		['Golden Spike National Historic Site', 'GOSP'],
		['Great Basin National Park', 'GRBA'],
		['Grand Canyon National Park', 'GRCA'],
		['Greenbelt Park', 'GREE'],
		['Great Egg Harbor National Scenic and Recreational River National Wild And Scenic River', 'GREG'],
		['Great Falls Park', 'GRFA'],
		['Grant-Kohrs Ranch National Historic Site', 'GRKO'],
		['Grand Portage National Monument', 'GRPO'],
		['Great Sand Dunes National Park and Preserve', 'GRSA'],
		['Great Smoky Mountains National Park', 'GRSM'],
		['Grand Teton National Park', 'GRTE'],
		['Guilford Courthouse National Military Park', 'GUCO'],
		['Gulf Islands National Seashore', 'GUIS'],
		['Guadalupe Mountains National Park', 'GUMO'],
		['George Washington Carver National Monument', 'GWCA'],
		['George Washington Memorial Parkway', 'GWMP'],
		['Harpers Ferry National Historical Park', 'HAFE'],
		['Hagerman Fossil Beds National Monument', 'HAFO'],
		['Hamilton Grange National Memorial', 'HAGR'],
		['Harmony Hall', 'HAHA'],
		['Haleakala National Park', 'HALE'],
		['Hampton National Historic Site', 'HAMP'],
		['Hawaii Volcanoes National Park', 'HAVO'],
		['Herbert Hoover National Historic Site', 'HEHO'],
		['Horseshoe Bend National Military Park', 'HOBE'],
		['Hopewell Culture National Historical Park', 'HOCU'],
		['Home Of Franklin D. Roosevelt National Historic Site', 'HOFR'],
		['Hopewell Furnace National Historic Site', 'HOFU'],
		['Homestead NM of America National Monument', 'HOME'],
		['Hot Springs National Park', 'HOSP'],
		['Hovenweep National Monument', 'HOVE'],
		['Harry S. Truman National Historic Site', 'HSTR'],
		['Hubbell Trading Post National Historic Site', 'HUTR'],
		['Ice Age National Scenic Trail', 'IATR'],
		['Independence National Historical Park', 'INDE'],
		['Indiana Dunes National Lakeshore', 'INDU'],
		['Isle Royale National Park', 'ISRO'],
		['James A. Garfield National Historic Site', 'JAGA'],
		['New Orleans Jazz National Historical Park', 'JAZZ'],
		['Jewel Cave National Monument', 'JECA'],
		['Jefferson National Expansion Memorial National Memorial', 'JEFF'],
		['Thomas Jefferson Memorial', 'JEFM'],
		['Jean Lafitte National Historical Park and Preserve', 'JELA'],
		['Jimmy Carter National Historic Site', 'JICA'],
		['John Day Fossil Beds National Monument', 'JODA'],
		['John D. Rockefeller Jr. Memorial Parkway', 'JODR'],
		['John Ericsson National Memorial', 'JOER'],
		['John Fitzgerald Kennedy National Historic Site', 'JOFI'],
		['John F. Kennedy Center for the Performing Arts', 'JOFK'],
		['Johnstown Flood National Memorial', 'JOFL'],
		['John Muir National Historic Site', 'JOMU'],
		['Joshua Tree National Park', 'JOTR'],
		['Kaloko-Honokohau National Historical Park', 'KAHO'],
		['Kalaupapa National Historical Park', 'KALA'],
		['Katmai National Park and Preserve', 'KATM'],
		['Kenai Fjords National Park', 'KEFJ'],
		['Kennesaw Mountain National Battlefield Park', 'KEMO'],
		['Kenilworth Park and Aquatic Gardens', 'KEPA'],
		['Keweenaw National Historical Park', 'KEWE'],
		['Kings Canyon National Park', 'KICA'],
		['Kings Mountain National Military Park', 'KIMO'],
		['Klondike Gold Rush National Historical Park', 'KLGO'],
		['Klondike Gold Rush - Seattle Unit National Historical Park', 'KLSE'],
		['Knife River Indian Villages National Historic Site', 'KNRI'],
		['Kobuk Valley National Park', 'KOVA'],
		['Korean War Veterans National Memorial', 'KOWA'],
		['Lava Beds National Monument', 'LABE'],
		['Lake Chelan National Recreation Area', 'LACH'],
		['Lake Clark National Park and Preserve', 'LACL'],
		['Lake Mead National Recreation Area', 'LAKE'],
		['Lamprey Wild and Scenic River', 'LAMP'],
		['Lake Meredith National Recreation Area', 'LAMR'],
		['Lake Roosevelt National Recreation Area', 'LARO'],
		['Lassen Volcanic National Park', 'LAVO'],
		['Lewis and Clark National Historical Park', 'LEWI'],
		['Little Bighorn Battlefield National Monument', 'LIBI'],
		['Lincoln Boyhood National Memorial', 'LIBO'],
		['Lincoln Home National Historic Site', 'LIHO'],
		['Lincoln Memorial National Memorial', 'LINC'],
		['Little River Canyon National Preserve', 'LIRI'],
		['Longfellow House - Washington\'s Headquarters National Historic Site', 'LONG'],
		['Lower Saint Croix National Scenic River', 'LOSA'],
		['Lowell National Historical Park', 'LOWE'],
		['Lyndon Baines Johnson Memorial Grove on the Potomac National Memorial', 'LYBA'],
		['Lyndon B. Johnson National Historical Park', 'LYJO'],
		['Mary McLeod Bethune Council House National Historic Site', 'MABE'],
		['Marsh-Billings-Rockefeller National Historical Park', 'MABI'],
		['Mammoth Cave National Park', 'MACA'],
		['Marin Headlands Sites', 'MAHE'],
		['National Mall', 'MALL'],
		['Martin Luther King Jr National Historic Site', 'MALU'],
		['Manassas National Battlefield Park', 'MANA'],
		['Manzanar National Historic Site', 'MANZ'],
		['Manhattan Sites', 'MASI'],
		['Maurice National Wild And Scenic River', 'MAUR'],
		['Martin Van Buren National Historic Site', 'MAVA'],
		['Maggie L. Walker National Historic Site', 'MAWA'],
		['McLoughlin House National Historic Site', 'MCHO'],
		['Meridian Hill Park', 'MEHI'],
		['Mesa Verde National Park', 'MEVE'],
		['Mimbres Culture National Monument', 'MICU'],
		['Minidoka Internment National Historic Site', 'MIIN'],
		['Minute Man National Historical Park', 'MIMA'],
		['Minuteman Missile National Historic Site', 'MIMI'],
		['Mississippi National River and Recreation Areas National River', 'MISS'],
		['Martin Luther King Jr National Historic Site', 'MLKM'],
		['Missouri National Recreational River National Wild And Scenic River', 'MNRR'],
		['Montezuma Castle National Monument', 'MOCA'],
		['Moores Creek National Battlefield', 'MOCR'],
		['Mojave National Preserve', 'MOJA'],
		['Monocacy National Battlefield', 'MONO'],
		['Mount Rainier National Park', 'MORA'],
		['Morristown National Historical Park', 'MORR'],
		['Mount Rushmore National Memorial', 'MORU'],
		['Mt. Soledad National Memorial', 'MTSO'],
		['Muir Woods National Monument', 'MUWO'],
		['Natural Bridges National Monument', 'NABR'],
		['National Capital Parks', 'NACA'],
		['National Capital Parks-East', 'NACE'],
		['National Mall and Memorial Parks', 'NAMA'],
		['Natchez National Historical Park', 'NATC'],
		['Natchez Trace Parkway', 'NATR'],
		['Natchez Trace National Scenic Trail', 'NATT'],
		['Navajo National Monument', 'NAVA'],
		['U.S. Navy Memorial', 'NAVY'],
		['North Cascades National Park Service Complex', 'NCCO'],
		['New Bedford Whaling National Historical Park', 'NEBE'],
		['Nez Perce National Historical Park', 'NEPE'],
		['New River Gorge National River', 'NERI'],
		['Nicodemus National Historic Site', 'NICO'],
		['Niobrara and Missouri National Scenic and Recreational Rivers', 'NIMI'],
		['Niobrara National Scenic River National Wild And Scenic River', 'NIOB'],
		['Ninety Six National Historic Site', 'NISI'],
		['National Law Enforcement Officers National Memorial', 'NLEM'],
		['Noatak National Preserve', 'NOAT'],
		['North Cascades National Park', 'NOCA'],
		['North Country National Scenic Trail', 'NOCO'],
		['National Parks of New York Harbor Management Unit', 'NPNH'],
		['National Park of American Samoa National Park', 'NPSA'],
		['Obed Wild and Scenic River National Wild And Scenic River', 'OBRI'],
		['Ocmulgee National Monument', 'OCMU'],
		['The Old Stone House', 'OLST'],
		['Olympic National Park', 'OLYM'],
		['Old Post Office Tower', 'OPOT'],
		['Oregon Caves National Monument', 'ORCA'],
		['Organ Pipe Cactus National Monument', 'ORPI'],
		['Oxon Cove Park and Oxon Hill Run', 'OXHI'],
		['Oxon Run National Parkway', 'OXRU'],
		['Ozark National Scenic Riverways National River', 'OZAR'],
		['Palo Alto Battlefield National Historical Park', 'PAAL'],
		['Pennsylvania Avenue National Historic Site', 'PAAV'],
		['Paterson Great Falls National Historical Park', 'PAGR'],
		['Padre Island National Seashore', 'PAIS'],
		['Parashant National Monument', 'PARA'],
		['Pecos National Historical Park', 'PECO'],
		['Petrified Forest National Park', 'PEFO'],
		['Pea Ridge National Military Park', 'PERI'],
		['Petersburg National Battlefield', 'PETE'],
		['Petroglyph National Monument', 'PETR'],
		['Perry\'s Victory and International Peace Memorial National Memorial', 'PEVI'],
		['Hohokam Pima National Monument', 'PIMA'],
		['Peirce Mill Park', 'PIMI'],
		['Pinnacles National Monument', 'PINN'],
		['Pipestone National Monument', 'PIPE'],
		['Pictured Rocks National Lakeshore', 'PIRO'],
		['Piscataway Park', 'PISC'],
		['Pipe Spring National Monument', 'PISP'],
		['Port Chicago Naval Magazine National Memorial', 'POCH'],
		['Poverty Point National Monument', 'POPO'],
		['Point Reyes National Seashore', 'PORE'],
		['President\'s Park (White House)', 'PRPA'],
		['Presidio of San Francisco', 'PRSF'],
		['Prince William Forest Park', 'PRWI'],
		['Puukohola Heiau National Historic Site', 'PUHE'],
		['Pu\'uhonua o Honaunau National Historical Park', 'PUHO'],
		['Rainbow Bridge National Monument', 'RABR'],
		['Redwood National Park', 'REDW'],
		['Richmond National Battlefield Park', 'RICH'],
		['Rio Grande Wild and Scenic River National Wild And Scenic River', 'RIGR'],
		['River Raisin National Battlefield Park', 'RIRA'],
		['Rock Creek Park', 'ROCR'],
		['Ross Lake National Recreation Area', 'ROLA'],
		['Rocky Mountain National Park', 'ROMO'],
		['Rosie The Riveter WWII Home Front National Historical Park', 'RORI'],
		['Roosevelt-Vanderbilt Headquarters', 'ROVA'],
		['Roger Williams National Memorial', 'ROWI'],
		['Ronald Reagan Boyhood Home National Historic Site', 'RRBH'],
		['Russell Cave National Monument', 'RUCA'],
		['San Antonio Missions National Historical Park', 'SAAN'],
		['Saint Croix National Scenic River National Wild And Scenic River', 'SACN'],
		['Saint Croix Island International Historic Site', 'SACR'],
		['San Francisco Maritime National Historical Park', 'SAFR'],
		['Saint-Gaudens National Historic Site', 'SAGA'],
		['Saguaro National Park', 'SAGU'],
		['Sagamore Hill National Historic Site', 'SAHI'],
		['Saugus Iron Works National Historic Site', 'SAIR'],
		['San Juan Island National Historical Park', 'SAJH'],
		['San Juan National Historic Site', 'SAJU'],
		['Salem Maritime National Historic Site', 'SAMA'],
		['Santa Monica Mountains National Recreation Area', 'SAMO'],
		['Sand Creek Massacre National Historic Site', 'SAND'],
		['Saint Paul\'s Church National Historic Site', 'SAPA'],
		['Salinas Pueblo Missions National Monument', 'SAPU'],
		['Saratoga National Historical Park', 'SARA'],
		['Salt River Bay NHP and Ecological Preserve National Historical Park', 'SARI'],
		['Scotts Bluff National Monument', 'SCBL'],
		['Sequoia and Kings Canyon National Parks', 'SEKI'],
		['Sequoia National Park', 'SEQU'],
		['Shenandoah National Park', 'SHEN'],
		['Shiloh National Military Park', 'SHIL'],
		['Sitka National Historical Park', 'SITK'],
		['Sleeping Bear Dunes National Lakeshore', 'SLBE'],
		['Springfield Armory National Historic Site', 'SPAR'],
		['Steamtown National Historic Site', 'STEA'],
		['Statue Of Liberty National Monument', 'STLI'],
		['Stones River National Battlefield', 'STRI'],
		['Sudbury Assabet and Concord National Wild And Scenic River', 'SUAS'],
		['Sunset Crater Volcano National Monument', 'SUCR'],
		['Suitland Parkway', 'SUIT'],
		['Tallgrass Prairie National Preserve', 'TAPR'],
		['Theodore Roosevelt Island National Memorial', 'THIS'],
		['Thaddeus Kosciuszko National Memorial', 'THKO'],
		['Theodore Roosevelt Birthplace National Historic Site', 'THRB'],
		['Theodore Roosevelt Inaugural National Historic Site', 'THRI'],
		['Theodore Roosevelt National Park', 'THRO'],
		['Thomas Stone National Historic Site', 'THST'],
		['Timpanogos Cave National Monument', 'TICA'],
		['Timucuan Ecological and Historic Preserve', 'TIMU'],
		['Tonto National Monument', 'TONT'],
		['Tuskegee Airmen National Historic Site', 'TUAI'],
		['Tuskegee Institute National Historic Site', 'TUIN'],
		['Tumacacori National Historical Park', 'TUMA'],
		['Tupelo National Battlefield', 'TUPE'],
		['Tuzigoot National Monument', 'TUZI'],
		['Ulysses S. Grant National Historic Site', 'ULSG'],
		['Upper Delaware National Scenic and Recreation River National Wild And Scenic River', 'UPDE'],
		['Valley Forge National Historical Park', 'VAFO'],
		['World War II Valor in the Pacific National Monument', 'VALR'],
		['Vanderbilt Mansion National Historic Site', 'VAMA'],
		['Vicksburg National Military Park', 'VICK'],
		['Virgin Islands Coral Reef National Monument', 'VICR'],
		['Virgin Islands National Park', 'VIIS'],
		['Vietnam Veterans Memorial National Memorial', 'VIVE'],
		['Vietnam Womens National Memorial', 'VIWO'],
		['Voyageurs National Park', 'VOYA'],
		['Washita Battlefield National Historic Site', 'WABA'],
		['Walnut Canyon National Monument', 'WACA'],
		['Warren G Harding National Memorial', 'WAHA'],
		['Waterton Lakes National Park (Canada)', 'WALA'],
		['Washington Monument National Memorial', 'WAMO'],
		['War In The Pacific National Historical Park', 'WAPA'],
		['Warm Springs Apache', 'WASP'],
		['Western Arctic National Parklands', 'WEAR'],
		['Weir Farm National Historic Site', 'WEFA'],
		['West Potomac Park', 'WEPO'],
		['White House (President\'s Park)', 'WHHO'],
		['Whiskeytown National Recreation Area', 'WHIS'],
		['Whitman Mission National Historic Site', 'WHMI'],
		['White Sands National Monument', 'WHSA'],
		['Wildcat Brook Wild and Scenic River', 'WIBR'],
		['Wind Cave National Park', 'WICA'],
		['William Jefferson Clinton Birthplace National Historic Site', 'WICL'],
		['Wilson\'s Creek National Battlefield', 'WICR'],
		['William Howard Taft National Historic Site', 'WIHO'],
		['Women\'s Rights National Historical Park', 'WORI'],
		['Wolf Trap National Park for the Performing Arts', 'WOTR'],
		['Wright Brothers National Memorial', 'WRBR'],
		['Wrangell - St Elias National Park and Preserve', 'WRST'],
		['Wupatki National Monument', 'WUPA'],
		['World War II Memorial National Memorial', 'WWII'],
		['Yellowstone National Park', 'YELL'],
		['Yorktown Battlefield', 'YONB'],
		['Yosemite National Park', 'YOSE'],
		['Yukon-Charley Rivers National Preserve', 'YUCH'],
		['Yucca House National Monument', 'YUHO'],
		['Zion National Park', 'ZION'],
	];

	if (to == 'abbr') {
		//Gets park code of specified place filter
		input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
		for(i = 0; i < places.length; i++) {
			if(places[i][0] == input) {
				return(places[i][1]);
			}
		}    
	} else if (to == 'name') {
		//Gets name of specified park code
		input = input.toUpperCase();
		for(i = 0; i < places.length; i++) {
			if(places[i][1] == input){
				return(places[i][0]);
			}
		}    
	}
}

//Allows use of NPS API
function httpGet(theUrl){
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", theUrl, false );
	xmlHttp.send( null );
	return xmlHttp.responseText;
}
