

setInterval(clock,1000);

     
  
function clock () {

	

	var hh = document.getElementsByClassName ("hh")[0]
	var mm = document.getElementsByClassName ("mm")[0]
	var ss = document.getElementsByClassName ("ss")[0]

	var date = new Date ();
	var hh = date.getHours();
	var mm = date.getMinutes();
	var ss = date.getSeconds();

	// This is running function checkTime() & saving value.
	hh = checkTime(hh)
	mm = checkTime(mm)
    ss = checkTime(ss)

	document.getElementsByClassName('clock')[0].innerHTML = 
	hh + " : " + mm + " : " + ss;

	color = "#" + hh + mm + ss;
	document.body.style.background = color;
	document.getElementById("hex").innerHTML.color;


}

function checkTime(time) {
    if (time < 10) 
    		{time = "0" + time
		};
    return time;

    
	}



