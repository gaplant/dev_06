console.log("Waiting for user input");

function firstname() { //function to be called in index
    
    var fname = document.getElementById('fname').value; //name is pulled from html form submission
    console.log("user input: " + fname);
    console.log("stored in var 'fname'");
    
	var name_length = fname.length; //finds length of name input
	console.log(name_length + " letters in " + fname);
    
    var d = new Date(); //takes todays date, presents it in US format
    d = (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear();
    console.log("presenting current date");

    //final output, changes target pgrph in index, adds in values from earlier in firstname()
    console.log("changing HTML paragraph in index");
    document.getElementById('target_p').innerHTML =
    "The text changed!<br/>There are " + name_length + " letters in " + fname + ".<br/>"
    +"Today's date is: " + d;
    console.log("final output complete");
	
}	

