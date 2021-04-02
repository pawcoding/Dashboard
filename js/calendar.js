$(function(){
     //Autorun calendar script
     fillCalendar();
});


function fillCalendar(){
     //Clear the current calendar (when loaded more than one day)
     $('.calendarcontainer').children().not('.days').remove();

     //Get current date
     const now = new Date();

     //Get weekday of first day in current month
     let weekday = new Date(now.getFullYear(), now.getMonth()).getDay();
     if (weekday == 0) {
          weekday = 7;
     }

     //Add spaces for first weekday
     for (let i = 1; i < weekday; i++) {
          let empty = $("<span>");
          $('.calendarcontainer').append(empty);
     }


     //Get amout ouf days in current month
     const days = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();

     //Add days to calendar
     for (let i = 1; i <= days; i++) {
          let day = $("<span>").text(i);
          if (i == now.getDate()) {
               day.attr('id', "today");
          }
          $('.calendarcontainer').append(day);
     }

     //Refresh the calendar when day ends
     setTimeout(fillCalendar, restTime(now));
}

//Get rest of day in milliseconds
function restTime(today) {
     var rest = 100;
     rest += (23-today.getHours())*60*60*1000;
     rest += (59-today.getHours())*60*1000;
     rest += (59-today.getSeconds())*1000;
     return rest;
}
