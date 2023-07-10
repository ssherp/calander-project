// globle variable
var currentHour = dayjs().hour()

$(function () {
  //for loop for all time blocks
  //link css background by time
  for (var i = 9; i < 18; i++) {
    var textarea = $("#hour-" + i).children("textarea");
    if (currentHour === i) {
      textarea.addClass("present");
    } else if (currentHour > i) {
      textarea.addClass("past");
    }
    else {
      textarea.addClass("future");
    }
  }
  //figure out what hour block you're in by using $(this)
  //setItem for localStorage to save the input to the corresponding hour by using the word "this"})

  $(".saveBtn").on("click", function () {
    var notes = $(this).siblings(".description").val();
    var taskKey = $(this).parent().attr("id");
    localStorage.setItem(taskKey, notes);
  })
  //a. separate key in localStorage for each hour
  //b. create a loop for 9-18 to check localStorage
  //check localStorage within the loop
  for (var i = 9; i < 18; i++) {
    var keyOutput = localStorage.getItem(`hour-${i}`);
    var hourOutput = $(`#hour-${i}`).children(".description");
    hourOutput.append(keyOutput);
  }
  //create var for dayjs to get current day (and time maybe)
  //$("#currentDay").text(var)
  var now = setInterval(function(){
    $("#currentDay").text(dayjs().format("MMM DD,YYYY,  h:mm:ss")); 
    },1000)


});


