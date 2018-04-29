var localtime = {

	today : function(){

		year = new Date().getFullYear();

		//returns month from 0-11 so I need to add 1
		month = new Date().getMonth() + 1;
		
		date = new Date().getDate();

		currentDate = { "year": year, "month": month, "date": date };
		
		return currentDate;
	}

}


module.exports = localtime;