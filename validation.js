

var save = [];
				if(localStorage.a_save)
				{
				save = JSON.parse(localStorage.a_save);
				// table();
				table();
				}


document.getElementById('btn').addEventListener('click',function() 
									{


										var user = {

				
														'username':document.getElementById('uname').value,
														'password':document.getElementById('pwd').value,
														'email':document.getElementById('email').value,
														'location':document.getElementById('lctn').value,
														'company':document.getElementById('cmpy').value,
														'gender':(document.querySelector('input[name="gender"]:checked')) ? document.querySelector('input[name="gender"]:checked').value : ''
														

													};
													//var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
														if((user.username)  && (user.password) && (user.email) !=""  )
														{
															save.push(user);
													localStorage.a_save = JSON.stringify(save);
													//table();
														
														}
														if(user.username=="")
														{

															document.getElementById("userV").innerHTML = "Username cannot be empty";
																											
														}
														if(user.password=="")
														{
															document.getElementById("passV").innerHTML = "Password cannot be empty";
														}
														if(user.email=="")
														{
															document.getElementById("emailV").innerHTML = "Email Invalid";
														}
														// else((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)))
														// {
														// 	document.getElementById("emailV").innerHTML = "Email Invalid";
														// }
														/*if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email.value))
 															 {
																    return (true)
																  }
																   { document.getElementById("emailV").innerHTML = "Invalid Email";
																    return (false)
																}*/

														 // if (male.checked == false && female.checked == false) {
       								// 						 document.getElementById('select').insertAdjacentHTML('afterend', '<p style="color:red;" id="generror">You must select your gender!</p>');
       								// 						}



														// if ((user.email.value).indexOf('@') >= 0 && em.indexOf('.com') > em.indexOf('@')))
														// {
														// 	document.getElementById("emailV1").innerHTML = "Invalid Email";
														// }
														// if(user.email.value.match(mailformat))
														// {
														// 	document.getElementById("emailV1").innerHTML = "Invalid Email";
														// }
													
														myFunction();
														table();
														
															
															
									});



function myFunction() {
    document.getElementById("myForm").reset();
}

/*function table{
	document.getElementById("result").reset();
}*/

function table() {
    //console.log(localStorage.a_save);
    if(localStorage.a_save)
    {
    var resp = JSON.parse(localStorage.a_save);
    var len = resp.length;
    html = '';
    html += '<table  ><tr ><td>Username</td><td>Password</td><td >Email</td><td>Location</td><td>Company</td><td>Gender</td></tr>';
    for (var i = 0; i < len; i++) {
        html += '<tr >';
        html += '<td>' + resp[i].username + '</td>';
        html += '<td>' + resp[i].password + '</td>';
        html += '<td >' + resp[i].email+ '</td>';
        html += '<td>' + resp[i].location + '</td>';
        html += '<td>' + resp[i].company+ '</td>';
        html += '<td>' + resp[i].gender + '</td>';
                html += '</tr>';
    }
    document.getElementById('result').innerHTML = html;
}
}




// document.getElementById('btn').addEventListener('click',function() {

// if(document.getElementById('uname').value=="")
// {
// 	alert("cannot");
// }

// });
