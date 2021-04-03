$(function(){
     //Autorun time-script
     setDateTime();
});


function setDateTime(){
     //Get current time and date
     let now = new Date();

     //Transform to time-string
     let time = now.getHours() + ':' + addZero(now.getMinutes()) + ':' + addZero(now.getSeconds());

     //Transform to date-string
     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
     let date = days[now.getDay()] + ', ' + now.getDate() + '.' + (now.getMonth()+1) + '.' + now.getFullYear();

     //Set the information in the containers with jQuery
     $('#time').text(time);
     $('#date').text(date);

     //Refresh the time every 0.2 seconds
     setTimeout(setDateTime, 200);
}

//Add a zero if number is lower than 10
function addZero(number){
     return (number < 10) ? "0" + number : number;
}
