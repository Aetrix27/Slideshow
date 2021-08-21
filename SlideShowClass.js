/*This function all of the functions from the combined files, to generate a SlideShow function.
Input: All functions
Output: Outputs the entire slideshow function into the browser.
*/
function SlideShow(){
	this.display = new Display(this);
	this.controls = new Controls(this);
	this.addSlide = new AddSlide(this);
	this.newSlide = new Slide(this);
}
