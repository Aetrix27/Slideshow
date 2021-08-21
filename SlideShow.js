<link rel="stylesheet" type="text/css" href="Styles.css">
<head>
<body>
	<input type="button" value = "Add" id = "addSlide"></input>
	<img src="playButton.png" id = "present"></img>
	<img src = "pauseButton.svg" id = "pause"></img>
	<img src = "options.png" id = "options"></img>
	<input = "button" value = "Update Changes to Slide" id = "update"></input>
	<input type="textbox" value = "" id = "titleTextBox"></input>
	<input type="textbox" value = "" id = "photographerTextBox"></input>
	<input type="textbox" value = "" id = "descriptionTextBox"></input>
	<img src="rightArrow.png"id = "rightArrow"></img>
	<img src="leftArrow.png"id = "leftArrow"></img>		
	<script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script src = "SlideClass.js"></script>
	<script src = "Controls.js"></script> 
	<script src = "SlideShowClass.js"></script> 
	<script src = "DisplayClass.js"></script>
</body>
<script>
    window.onload = function(){
		SlideShow();
	}	
 </script>

</head>

</html>

