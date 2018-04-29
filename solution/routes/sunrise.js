var express = require('express');
var router = express.Router();
var sun = require('astronomia').sunrise
var julian = require('astronomia').julian
var localtime = require('../localtime');

router.get('/', (req,res,next)=>{
	currentDate = localtime.today();
	    
    var juliar_date = new julian.CalendarGregorian(currentDate["year"], currentDate["month"], currentDate["date"]).toYear()

	var date = new Date('2018-04-28T00:00:00Z');
    var lat = 42.374843;
    var lon = -71.117696;
	var sr = new sun(new julian.Calendar(date), lat, -lon);

	var getsunriseUTC = sr.rise().toDate().toISOString();
	var timeonly = getsunriseUTC.substring(11,16);
	var utc = Number(timeonly.substring(0,2));
	var edt = Number(utc) - 4;

	var sunrise = timeonly.replace(utc,edt);
	
	//step 3
	//render the webpage
	//be sure to include the following varibles
	// sunrise: sunrise
	// year: currentDate["year"]
	// month: currentDate["month"]
	// date: currentDate["date"]
	//example solution
	res.render('sunrise.html', {sunrise: sunrise, year: currentDate["year"], month: currentDate["month"], date: currentDate["date"]});
});

module.exports = router;