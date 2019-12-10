

function displayTime() {
	let currentTime = new Date();
	let hours = currentTime.getHours();
	let minutes = currentTime.getMinutes();
	let seconds = currentTime.getSeconds();
	let meridiem = "AM"

	//Converts from 24 hr to 12 hr format
	//and keeps track of the meridiem.
	//So, if the variable "hours" is greater than 12 (the afternoon),
	//then subtract 12 and change the "meridiem" to "PM"
	if (hours > 12) {
		hours = hours - 12;
		meridiem = "PM"
	}
	//0 AM and 0 PM should read as 12
	//So, if variable "hours" equals zero (just past midnight),
	//then change the "hours" to 12
	if (hours === 0) {
		hours = 12;
	}

	//if the seconds digit is less than ten
	//add the "0" digit to the front
	//so 9 becomes "09"
	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	if (minutes < 10) {
		minutes = "0" + minutes;
	}

	if (hours < 10) {
		hours = "0" + hours;
	}


//This finds the clockDiv ID in the HTML
const clockDiv = document.getElementById('clock');

//This sets the text inside the clockDiv
//to the hours, minutes, and seconds of the current time
clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;

}

displayTime();

//This make the clock tick repeatedly
//running the function every second (1000 = 1 sec)
setInterval(displayTime, 1000);