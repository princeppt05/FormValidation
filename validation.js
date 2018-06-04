

var save = [];
if(localStorage.a_save) {
	save = JSON.parse(localStorage.a_save);
}




document.getElementById('btn').addEventListener('click',function() 
									{


										var user = {

				
														'username':document.getElementById('uname').value,
														'password':document.getElementById('pwd').value,
														'email':document.getElementById('email').value,
														'location':document.getElementById('lctn').value,
														'company':document.getElementById('cmpy').value,
														'genderm':document.getElementById('male').value,
														'genderf':document.getElementById('female').value,

													};
													//var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
														if((user.username)  && (user.password) && (user.email) !="" )
														{
															save.push(user);
													localStorage.a_save = JSON.stringify(save);
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
															document.getElementById("emailV").innerHTML = "Email cannot be empty";
														}
														// if ((user.email.value).indexOf('@') >= 0 && em.indexOf('.com') > em.indexOf('@')))
														// {
														// 	document.getElementById("emailV1").innerHTML = "Invalid Email";
														// }
														// if(user.email.value.match(mailformat))
														// {
														// 	document.getElementById("emailV1").innerHTML = "Invalid Email";
														// }

									});
// document.getElementById('btn').addEventListener('click',function() {

// if(document.getElementById('uname').value=="")
// {
// 	alert("cannot");
// }

// });
