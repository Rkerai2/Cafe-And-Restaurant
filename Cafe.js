/*For Like*/

var count=0;
function heart(img)
{
    count=count+1;
    if(count%2==0)
    {
        img.src="Image/heart.png";
    }
    else
    {
        img.src="Image/heartful.png";
    }
}

/*From Validations*/
function validateform(){

  var Pattern1=/^[a-zA-Z]+$/
  var Pattern2=/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/ 

  let First_name=document.forms["contactform"]["fname"].value;
  let last_name=document.forms["contactform"]["lname"].value;
  let Email=document.forms["contactform"]["Email"].value;

  if(First_name==""){
    alert("Name is Required")
  }
  else if(last_name ==""){
    alert("Name is Required")
  }
  else if (!Pattern1.test(First_name)){
    alert("Enter Valid Name")
  }
  else if(Email==""){
    alert("Email Address is Required")
  }
  else if (!Pattern1.test(last_name)){
    alert("Enter Valid Name")
  }
  else if (!Pattern2.test(Email)){
    alert("Enter Valid Email Address")
  }
  else{
    alert("We will Contact You Soon!..")
  }

}

function reservation(){

  Pattern1=/^\d{10}$/
  let phone=document.forms["Reservform"]["phone"].value;
  if(!Pattern1.test(phone)){
    alert("Enter 10 Digite number")
  }
}

