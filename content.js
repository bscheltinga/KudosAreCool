console.log("Chrome extension running");

var i = 1;
var number_refresh = 10;

chrome.runtime.sendMessage({type:'showPageAction'});
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
	console.log(message.txt);
	if (message.txt === "click") {
		console.log("The message is click");
		                                              
	myLoop();                                                   //  start the loop
	}
}

function myLoop () {                                      //  create a loop function
   setTimeout(function () {                                 //  call a 3s setTimeout when the loop is called
      window.scrollTo(0,document.body.scrollHeight);        //  your code here
      console.log(i)                                                  //  increment the counter
      if (i <= number_refresh) {                                         //  if the counter < 10, call the loop function
      	myLoop();
         i++;                                          //  ..  again which will trigger another 
      }                                                     //  ..  setTimeout()
  }, 5000)
   
   if (i == number_refresh){
   	var thumbs = document.querySelectorAll('button.js-add-kudo').length;
   	document.querySelectorAll('button.js-add-kudo').forEach(node => node.click())
   	console.log("Well done, " + thumbs + " kudos were given")
   	alert("Well done, " + thumbs + " kudos were given");
   }
}