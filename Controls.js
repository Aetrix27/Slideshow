/*This function defines the controls that control the slideshow within the document body, including the play, pause, left, right, options, and update changes button.
Input: User click 
Output: Displays Button controls
*/
var interval;
function Controls(parentObj){
	var _parent=parentObj;
	this.rightArrow = $('#rightArrow')
		.click(function(){ShiftRight(_parent)}),
	this.leftArrow = $('#leftArrow')
		.click(function(){ShiftLeft(_parent)}),
	this.controlPanel = $('<div/>')
		.attr({"id":"controlPanel"}),
	this.slideDown = $('#options')
		.click(function () {new slideDown(_parent)}),
	this.photographerTextBox = $('<div/>')
		.attr({"id":"photographerTextBox"}),
	this.updateChangesButton =  $('<div/>')
		.attr({"id":"updateChangesButton"}),
	this.titleText2 = $('<div/>')
		.attr({"id":"titleText2"})
		.text("Title:"),
	this.titleTextBox = $('<div/>')
		.attr({"id":"titleTextBox"}),	
	this.descriptionTextBox = $('<div/>')
		.attr({"id":"descriptionTextBox"}),
	this.photoTextBox = $('<div/>')
		.attr({"id":"photoTextBox"}),
	this.dateTextBox = $('<div/>')
		.attr({"id":"dateTextBox"}),
	this.present = $('#present')
		.click(function(){for(var i=0;i<=1;i++){presentSlideShow(_parent)}}),
	this.pause = $('#pause')
		.click(function () {
			clearInterval(interval);
		})
	this.descriptionEditor = $('<div/>')
		.attr({"id":"descriptionEditor"}),
	$('body').append(this.descriptionEditor);
	$(_parent.slideArea).append(this.controlPanel);
	$(_parent.slideArea).append(this.slideDown);
	$(this.controlPanel).append(this.leftArrow).append(this.rightArrow).append(this.addSlide).append(this.present).append(this.pause);

}
//This function moves the slides to the right when the right arrow button is pressed.
/*
Input: User clicks the right arrow button.
Output: The slides move to the right.
*/
function presentSlideShow(parentObj){
	clearInterval(interval);
	interval = setInterval(function(){ShiftRight(parentObj)}, 2000);
}
function ShiftRight(parentObj){
	var lastCss = $(parentObj.display.imgArray[0]).css(["left", "top","z-index", "opacity","height","width"]);
	console.log($(parentObj.display.imgArray[0]).css(["left", "top","z-index", "opacity","height","width"]));
		for(var i=0;i<8;i++){
			var leftHandCss = $(parentObj.display.imgArray[i+1]).css(["left", "top","z-index", "opacity","height","width"]);
	//console.log(leftHandCss);
			$(parentObj.display.imgArray[i]).animate(leftHandCss, 1000);
		}
	$(parentObj.display.imgArray[8]).animate(lastCss, 1000);
}
//This function moves the slides to the left when the left arrow button is pressed.
/*
Input: User clicks the left arrow button.
Output: The slides move to the left.
*/
function ShiftLeft(parentObj){
	var lastCss = $(parentObj.display.imgArray[8]).css(["left", "top","z-index", "opacity","height","width"]);
	console.log($(parentObj.display.imgArray[8]).css(["left", "top","z-index", "opacity","height","width"]));
		for(var i=8;i>0;i--){
			var leftHandCss = $(parentObj.display.imgArray[i-1]).css(["left", "top","z-index", "opacity","height","width"]);
	//console.log(leftHandCss);
			$(parentObj.display.imgArray[i]).animate(leftHandCss, 1000);
		}
	$(parentObj.display.imgArray[0]).animate(lastCss, 1000);
}
function slideDown(parentObj){
	if ($( parentObj.descriptionEditor ).is( ":hidden" )){
		$(parentObj.descriptionEditor).slideDown( "slow" );
		$(parentObj.photographerTextBox).show();
		$(parentObj.updateChangesButton).show();
		$(parentObj.titleTextBox).show();
		$(parentObj.titleText2).show();
		$(parentObj.dateTextBox).show();
		$(parentObj.descriptionTextBox).show();
		$(parentObj.photoTextBox).show();
		$(parentObj.descriptionEditor).append(parentObj.photographerTextBox);
		$(parentObj.descriptionEditor).append(parentObj.updateChangesButton);
		$(parentObj.descriptionEditor).append(parentObj.titleTextBox);
		//unsure why title text is not appendig to the slideDownBar division.
		$(parentObj.descriptionEditor).append(parentObj.titleText2);
		$(parentObj.descriptionEditor).append(parentObj.dateTextBox);
		$(parentObj.descriptionEditor).append(parentObj.descriptionTextBox);
		$(parentObj.descriptionEditor).append(parentObj.photoTextBox);
	} else {
		$(parentObj.descriptionEditor).hide();
		$(parentObj.photographerTextBox).hide();
		$(parentObj.titleTextBox).hide();
		$(parentObj.descriptionTextBox).hide();
		$(parentObj.photoTextBox).hide();
		$(parentObj.updateChangesButton).hide();
		$(parentObj.dateTextBox).hide();
		$(parentObj.titleText2).hide();
	}
}
