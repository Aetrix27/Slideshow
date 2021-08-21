/*
This function reads a new file as a formatted String, and splits it into rows.
Input: User inputs a new file.
Output: File is imported and the data can be viewed in an organized manner.
*/
function newFileReader(){
	this.csvToImgHash = function(formattedString){
    	var imgArray=[];
    	var nameArray = [];
    	var currentValues = [];
    	var currentImg = [];
    	var stringRemainder = this.content;
    	var positionInString = 0;
    	var dataRowsArray = formattedString.split(/[\n\r]/g);
		//console.log(dataRowsArray);
	}
	this.content = (function(fileName){
	//update info of descriptions from slide down menu
	//for(var i=0; i<=dataRowsArray ;i++){ (was not sure how to get for loop to work)
    	var request = new XMLHttpRequest();
    	request.open("GET", fileName, false);
    	request.send(null);
		 //if(/n){ dataRowsArray.splice(0,1)} <br>
    	var returnValue = request.responseTextl;
    	return returnValue;
	})(this.fileName)
   	// var localName = document.getElementById("file");
    	//this.fileName = localPath;
	//}
}
/*This function creates a filereader object, and then overwrites the onload method so that the name, type and size may be viewed.
Input: User inputs a new file.
Output: The onload method is overwritten so that the name, type, and size of the csv file may be accessed.
*/
function readSingleFile(evt){
    //alert("in func");
	//Retrieve the first (and only) File from the FileList object
	var f = evt.target.files[0];
        if(f){
        //1. Create FileReader object.
            var reader = new FileReader();
         //2. Overwrite the onload method which is triggered by readAsText()
            reader.onload = function(translatedFile){
            var msg = "Got the file.</br>"
            +"name"+f.name+"</br>"
            +"type"+f.type+"</br>"
            +"size"+f.size+"bytes</br>"
			//if (transportation){&nbsp}
            +"contents:"+translatedFile.target.result;
   			console.log(translatedFile.target.result);
            $('#fileInfo').html(msg)
        }
     //3. call onload method after translating file into Ascii text.
   	 reader.readAsText(f);
		}else{
			alert("Failed to load file");
		}
}
//loads the selected file
window.onload = function(){
	$('#selectedFile').click(function(){
		document.getElementById("selectedFile").addEventListener("change",readSingleFile,false);
	});   
}