// globle variable
var currentHour=dayjs().hour()


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //for loop for all time blocks
  //link css background by time
  for(var i=9;i<18;i++){
   var textarea=$("#hour-"+i).children("textarea");
   if(currentHour===i){
    textarea.addClass("present");
   } else if(currentHour>i){
    textarea.addClass("past");
   }
   else{
    textarea.addClass("future");
   } 
  }

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. 
  //HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
      
  //$(.saveBtn").on("click",function(){
    //console.log($(this));
    //fugure out what hour block you're in by using $(this)
    //setItem for localStorage to save the input to the corresponding hour by using heword "this"})


  
  //use the id as the key to save the text to the key
  //create a .on event clicker
  //create 2 variable based on on the id and the text content(getting the text)
  //saving it to local storage
  
  
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
    // getItem for localStorage to pull previosly stored content
        //a. separate key in localStorage for each hour
        //b. create a loop for 9-18 to check localStorage
            //check localStorage within the loop
            //if else statement to check if there is content, if we find somthing display text inside text area, else do nothing(.children(1))

  
  
  
  
  
  // TODO: Add code to display the current date in the header of the page.
    //create var for dayjs to get current day (and time maybe)
    //$("#currentDay").text(var)
   
      $("#currentDay").text(dayjs().format("MMM DD,YYYY,  h:mm:ss"));
      
  

});
  

//event listener and a function to start the program/load the info on the calander
