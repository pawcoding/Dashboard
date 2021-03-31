$(function(){
     //Autorun time-script
     setDateTime();
});


function setDateTime(){
     //Get current time and date
     let now = new Date().toISOString().split('T');

     //Transform to time-string
     let time = now[1].substring(0, 8);
     if (time.startsWith('0')) {
          time = time.substr(1);
     }

     //Transform to date-string
     let datecomponents = now[0].split('-');
     let date = datecomponents[2] + '.' + datecomponents[1] + '.' + datecomponents[0];

     //Set the information in the containers with jQuery
     $('#time').text(time);
     $('#date').text(date);

     //Refresh the time every 0.2 seconds
     setTimeout(setDateTime, 200);
}
