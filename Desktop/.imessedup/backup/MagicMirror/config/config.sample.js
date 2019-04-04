/* 
 * 
 * Magic Mirror Configuration File.
 * 
 * Configured by Iain Moncrief <iainmoncrief@gmail.com>
 * 
 * NOTES:
 * 	The compliments module, as well as the news module may not be PG.
 * 	The news is currently being fetched from the New York Times RSS feed.
 * 		You can change this to any new sorce you whish, as long as the 
 * 		data is encoded using XML.
 * 	The weather API key on line (changeme) is my own. I created a free-version
 * 		key to use for testing. It will work, but depending on how many 
 * 		copes of this bootable image are in use, it may fail. If this 
 * 		happens, please go to openweathermap.org, create an account, and
 * 		follow their instructions on how to create an API key. Once your
 * 		free API key has been generated, update this file's key to your new one.
 * 		then restart.
 * 	
 * DEBUGING:
 * 	If the program does not start up in a test, it means that something
 * 		was changed in this file, or there was an error when configuring
 * 		this file. It usually is a missing comma in the modules array.
 * 	If something VERY bad happend, and some essential files were deleted
 * 		for some reason, and you whish to have a fresh new instalation,
 * 		just run in the command line 'sudo sh .imessedup/fresh.sh'. This
 * 		will install a fresh new installation of the magic mirror program.
 * 		!! REFRESHING REQUIRES INTERNET CONNECTION !!
 * 
 * 
 * If you have any questions you can contact me.
 * 
 */

var config = {
	address: "localhost",
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],

	language: "en",
	timeFormat: 24,
	units: "metric",

// ONLY EDIT THE MODULES ARRAY!

	modules: [
	{
		module: 'clock',
		position: 'top_left',
	},
	{
		"module": "currentweather",
		"position": "top_right",
		
		"config": {
			"location": "Honolulu",
			"locationID": "",
			"units":"imperial",
			"appid": "3feeca59bc965347c49299986569ed49"
		}
	},
	{
		module :"calendar",
		position:"top_left",
		config:{}
	},
//	{
//		module:"compliments",
//		position:"lower_third",
//		config:{}
//	},
	{
		module: "newsfeed",
		position: "bottom_bar",
		config: {
			feeds: [
				{
					title: "New York Times",
					url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
				}
			],
			showSourceTitle: true,
			showPublishDate: true
		}
	},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
