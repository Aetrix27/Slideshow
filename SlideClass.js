//This function generates a new Slide object, which displays the information of the current slide, including the ttle, date, description, and photographer.
/*Input:None
Output: Displays slide information.
*/
function Slide(parentObj){
    this.descriptionTextBox2 = $('<div/>')
		.attr({"id":"descriptionTextBox2"}),
	this.titleText = $('<div/>')
		.attr({"id":"titleText"})
		.text("Title:"),
	this.dateText = $('<div/>')
		.attr({"id":"dateText"})
		.text("Date Taken:"),
	this.descriptionText = $('<div/>')
		.attr({"id":"descriptionText"}),
	this.photographerText = $('<div/>')
		.attr({"id":"photographerText"})
		.text("Photographer:"),
	$(parentObj.slideInfo).append(this.descriptionTextBox2).append(this.titleText).append(this.dateText).append(this.photographerText).append(this.descriptionText);
}