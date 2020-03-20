$(document).ready(function () {
    $("currentDay").text(moment().format("MMMM DO YYYY, h:mm:ss a"));

    // Button used to save the local storage
    //$(document) won't work to display time, so it was added on HTML File    
    $(".saveBtn").on("click", function () {
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        // save in localStorage
        localStorage.setItem(time, value);
    })
    $("#NINE .description").val(localStorage.getItem("Nine"));
    $("#TEN .description").val(localStorage.getItem("Ten"));
    $("#ELEVEN .description").val(localStorage.getItem("Eleven"));
    $("#TWELVE .description").val(localStorage.getItem("Twelve"));
    $("#ONE .description").val(localStorage.getItem("One"));
    $("#TWO .description").val(localStorage.getItem("Two"));
    $("#THREE .description").val(localStorage.getItem("Three"));
    $("#FOUR .description").val(localStorage.getItem("Four"));
    $("#FIVE .description").val(localStorage.getItem("Five"));

    function timeSense() {
        var currentHour = moment.hour();

        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockHour, currentHour)
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    timeSense();
})