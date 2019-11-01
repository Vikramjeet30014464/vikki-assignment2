//alert(' Js running....');

function validateForm() {
  //alert('validating..');

  /*Getting user submitted values and validating Empty values*/
  var fname = document.forms["form1"]["fname"].value;  
  var lname = document.forms["form1"]["lname"].value;
  var Email = document.forms["form1"]["EmailID"].value;
  var Message = document.forms["form1"]["Message"].value;


  if (fname == "") {
    alert("First Name must not be Empty!");
}
    if (lname == "") {
    alert("Last Name  must not be Empty!");
}
    if (Email == "") {
    alert("Email Id  must not be Empty!");
}
    if (Message == "") {
    alert("Message must not be Empty!");
}


/*Displaying user submitted values back to contact page*/
if(fname && lname && Email && Message != ""){
	

	document.getElementById('Fn').innerHTML   = fname;
	document.getElementById('Ln').innerHTML   = lname;
	document.getElementById('EmID').innerHTML = Email;
	document.getElementById('msg').innerHTML = Message;
	document.getElementById('output').style.display = "block";  //make  output display to block instead of none.
}


    return false;
	
}