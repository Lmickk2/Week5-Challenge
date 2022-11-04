$("#8AM .description").val(localStorage.getItem("8AM"));
$("#9AM .description").val(localStorage.getItem("9AM"));
$("#10AM .description").val(localStorage.getItem("10AM"));
$("#11AM .description").val(localStorage.getItem("11AM"));
$("#12PM .description").val(localStorage.getItem("12PM"));
$("#1PM .description").val(localStorage.getItem("1PM"));
$("#2PM .description").val(localStorage.getItem("2PM"));
$("#3PM .description").val(localStorage.getItem("3PM"));
$("#4PM .description").val(localStorage.getItem("4PM"));
$("#5PM .description").val(localStorage.getItem("5PM"));

$(document).ready(function () {
    var time=moment();
$("#current-time").text(time.format ("ddd MMM YYYY h:mm"));

    var currentHour = moment().format("h");
    var hourBlock = $('.time-block')

    if (hourBlock < currentHour) {
    $('.description').addClass("past");
    }

    else if (hourBlock === currentHour) {
    $('.description').addClass("present");
}

    else {
    $('.description').addClass("future");
    }
})

 var save = $(".saveBtn");

    save.on("click", function(){


        var clock = $(this).parent().attr("id");
        
        var response = $(this).siblings(".description").css('background', 'lightblue').val();
    

        localStorage.setItem (clock, response);
        console.log (clock, response);
    
    });