//Set Text to show for custom suggested URL(s)
chrome.omnibox.setDefaultSuggestion({"description":"Open Stack Overflow Question %s ?"});

//Fired when Enter or a suggested Link is selected
chrome.omnibox.onInputEntered.addListener(function (bugId) {
  //Use your custom URL
	chrome.tabs.update({"url":"http://stackoverflow.com/questions/"+bugId},function (){
		console.log("Question Page is open");
	});
	//console.log("Input Entered is " + bugId);
});
