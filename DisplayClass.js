/*
Name: David Guerrero
Date: 3/24/2017
Program: Slideshow
This program creates a slideshow in which the user may edit the image middle slide, and additionally use the left and right arrows to navigate through the slides. There is also a play and stop button, which lets the slides move by themselves, or stop them. Gathering data from the csv file, the input of the user can change the information for the slide that is currently being displayed.

*/
/*This function defines the Display object, which generates the slideArray, imageArray, the wrappers of the display, and creates the slides using a for loop.
Input:None
Output: Generates the block elements of the slideshow.
*/
function Display(parentObj){
    var _this = this
    this.rainforestSlide1 = $('<div/>');
    this.rainforestSlide2 = $('<div/>');
    this.rainforestSlide3 = $('<div/>');
    this.rainforestSlide4 = $('<div/>');
    this.rainforestSlide5 = $('<div/>');
    this.rainforestSlide6 = $('<div/>');
    this.rainforestSlide7 = $('<div/>');
    this.rainforestSlide8 = $('<div/>');
    this.rainforestSlide9 = $('<div/>');
    this.slideArray = [this.rainforestSlide1, this.rainforestSlide2, this.rainforestSlide3, this.rainforestSlide4, this.rainforestSlide5, this.rainforestSlide6, this.rainforestSlide7, this.rainforestSlide8, this.rainforestSlide9];
    this.cssArray = [{"position":"absolute","left":"110px", "top":"30px", "z-index": "0", "opacity": "0.3","height":"100px","width":"100px"},
   	 {"position":"absolute","left":"180px", "top":"70px","z-index": "1", "opacity": "0.5","height":"155px","width":"155px"},
   	 {"position":"absolute","left":"300px", "top":"110px","z-index": "2", "opacity": "0.7","height":"200px","width":"200px"},
   	 {"position":"absolute","left":"400px", "top":"150px","z-index": "3", "opacity": "1", "height":"255px","width":"255px"},
   	 {"position":"absolute","left":"660px", "top":"170px","z-index": "3", "opacity": "1", "height":"255px","width":"255px"},
   	 {"position":"absolute","left":"920px", "top":"150px","z-index": "3", "opacity": "1", "height":"255px","width":"255px"},
   	 {"position":"absolute","left":"1040px","top":"110", "z-index": "2", "opacity": "0.7", "height":"200px","width":"200px"},
   	 {"position":"absolute","left":"1170px","top":"70px","z-index": "1", "opacity": "0.5", "height":"155px","width":"155px"},
   	 {"position":"absolute","left":"1270px","top":"30px", "z-index": "0", "opacity": "0.3", "height":"100px","width":"100px"}],
    this.wholeWrapper = $('<div/>')
        .attr({"id":"wholeWrapper"}),
	this.titleElem = $('<div/>')
		.attr({"id":"titleElem"})
		.text("Rainforests"),
	this.slideInfo = $('<div/>')
		.attr({"id":"slideInfo"}),
	this.slideArea = $('<div/>')
		.attr({"id":"slideArea"}),
	this.imgArray = [$("<img/>").attr({"src":"Rainforest1.jpg"}),$("<img/>").attr({"src":"Rainforest2.jpg"}),$("<img/>").attr({"src":"Rainforest3.jpg"}),$("<img/>").attr({"src":"Rainforest4.jpg"}),$("<img/>").attr({"src":"Rainforest5.jpg"}),$("<img/>").attr({"src":"Rainforest6.jpg"}),$("<img/>").attr({"src":"Rainforest7.jpg"}),$("<img/>").attr({"src":"Rainforest8.jpg"}),$("<img/>").attr({"src":"Rainforest9.jpg"})],
    this.extraInfo = $('<div/>')
        .attr({"id":"extraInfo"})
        .text("These are the available files you can use: Rainforest1.jpg, Rainforest2.jpg, Rainforest3.jpg, Rainforest4.jpg, Rainforest5.jpg, Rainforest6.jpg, Rainforest7.jpg, Rainforest8.jpg, and Rainforest9.jpg"),
    $('body').append(this.wholeWrapper);
    $(this.wholeWrapper).append(this.titleElem).append(this.slideArea).append(this.slideInfo);
	$(this.slideArea).append(this.slideArray).append(this.titleElem);
	for(var i=0;i<this.cssArray.length;i++){
		$(this.imgArray[i]).css(this.cssArray[i]);
		$(this.imgArray[i]).attr({"class":"slide"});
		$(this.slideArea).append(this.imgArray[i]);
		
	}
}

//This function adds a new photo to the slide when the user types a file name into the file name text box (the bottom right textbox of the dropdown menu), when the update change button is pressed. (This function was working but stopped due to a very slight mistake that I could not find)
/*
Input: User click
Output: Appends a new image to the slideArray
*/
function AddSlide(parentObj){
	$('#updateChangesButton').click(function(){
        if(($('#photoTextBox').val()) == "Rainforest1.jpg"){
            (parentObj.display.slideArray[4]).append(parentObj.display.imgArray[0]);
            (parentObj.display.imgArray[0]).attr({"class":"slide"});
        }else if(($('#photoTextBox').val()) == "Rainforest2.jpg"){
            (parentObj.display.slideArray[4]).append(parentObj.display.imgArray[1]);
            (parentObj.display.imgArray[1]).attr({"class":"slide"});
        }else if(($('#photoTextBox').val()) == "Rainforest3.jpg"){
            (parentObj.display.slideArray[4]).append(parentObj.display.imgArray[2]);
            (parentObj.display.imgArray[2]).attr({"class":"slide"});
        }else if(($('#photoTextBox').val()) == "Rainforest4.jpg"){
            (parentObj.display.slideArray[4]).append(parentObj.display.imgArray[3]);
            (parentObj.display.imgArray[3]).attr({"class":"slide"});
        }else if(($('#photoTextBox').val()) == "Rainforest5.jpg"){
            (parentObj.display.slideArray[4]).append(parentObj.display.imgArray[4]);
            (parentObj.display.imgArray[4]).attr({"class":"slide"});
        }else if(($('#photoTextBox').val()) == "Rainforest6.jpg"){
            (parentObj.display.slideArray[4]).append(parentObj.display.imgArray[5]);
            (parentObj.display.imgArray[5]).attr({"class":"slide"});
        }else if(($('#photoTextBox').val()) == "Rainforest7.jpg"){
            (parentObj.display.slideArray[4]).append(parentObj.display.imgArray[6]);
            (parentObj.display.imgArray[6]).attr({"class":"slide"});
        }else if(($('#photoTextBox').val()) == "Rainforest8.jpg"){ 
            (parentObj.display.slideArray[4]).append(parentObj.display.imgArray[7]);
            (parentObj.display.imgArray[7]).attr({"class":"slide"});
        }else if(($('#photoTextBox').val()) == "Rainforest9.jpg"){
            (parentObj.display.slideArray[4]).append(parentObj.display.imgArray[8]);
            (parentObj.display.imgArray[8]).attr({"class":"slide"});
        }  
    });
/*   
	for(var i=0;i<parentObj.display.slideArray.length;i++){
    	for(var j=0;j<parentObj.display.imgArray.length;j++){  
    	if((($('#newImg').val()) == "Rainforest"+[j+1]+".jpg") && (parentObj.display.slideArray[i]['left'] == "660px")){
        	(parentObj.display.slideArray[i]).append(parentObj.display.imgArray[j]);
        	(parentObj.display.imgArray[j]).attr({"class":"slide"});
		}

			for(var i=0;i<parentObj.display.imgArray.length;i++){
     
    	if($(parentObj.display.imgArray[i]).css(['left']) == $(parentObj.display.imgArray[2].css(['left']))){
				console.log($(parentObj.display.imgArray[2]).css(['left']));
        		 $(parentObj.display.imgArray[2]).remove();
        //	$(parentObj.display.imgArray[j]).attr({"class":"slide"});
		}

      
	}
*/
}    



