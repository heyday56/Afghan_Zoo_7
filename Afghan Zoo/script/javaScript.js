"use strict"
// Login Page JavaScript
function usernameValidate(){
const username=document.querySelector("#loginUsername").value;
let usernameMsg=document.querySelector("#loginUsernameMsg");
if(username.indexOf("=")>-1||username.indexOf("&")>-1){
	usernameMsg.textContent="Please do not use '=','&'";
	usernameMsg.style.color="red";
	usernameMsg.style.display="flex";
	return false;
}else{
	usernameMsg.textContent="Type Your Username";
	usernameMsg.style.color="white";
	return true;
}
}
function passwordValidate(){
const pass=document.querySelector("#loginPassword").value;
let passwordMsg=document.querySelector("#loginPasswordMsg");
if(pass.indexOf("=")>-1||pass.indexOf("&")>-1){
	passwordMsg.textContent="Please do not use '=','&'";
	passwordMsg.style.color="red";
	passwordMsg.style.display="flex";
	return false;
}else{
	passwordMsg.textContent="Type Your Password";
	passwordMsg.style.color="white";
	return true;
}
}

/*ChangeAccount Page Script*/

function chAccountValidate(){
	const user=document.getElementById("chAccountUsername").value;
	const pass=document.getElementById("chAccountPassword").value;
	let err=document.querySelector("#chAccountErrorMsg");
	if(user.indexOf("=")>-1||user.indexOf("&")>-1||user.indexOf("|")>-1||pass.indexOf("=")>-1||pass.indexOf("|")>-1||pass.indexOf("&")>-1){
		err.textContent="Please do not use '=','&','|'";
		return false;
	}
	else{
		return true;
	}

}
function newAccountValidate(){
	const userName=document.getElementById("newAccountUsername").value;
	const pass=document.getElementById("newAccountPassword").value;
	let error=document.querySelector("#newAccountErrorMsg");
	if (userName.indexOf("=")>-1||userName.indexOf("&")>-1||userName.indexOf("|")>-1||userName.length<3||pass.indexOf("=")>-1||pass.indexOf("&")>-1||pass.indexOf("|")>-1||pass.length<8) {
		error.textContent="Please Type username>2 and password>7, do not use '=','&','|'";
		return false;
	}
	else{
		return true;
	}
}

/* Add Ticket Page Script*/
function addTicketValidate(){
	const name=document.getElementById("addTicketName").value;
	const amount=document.getElementById("addTicketAmount").value;
	const dt=document.getElementById("addTicketDate").value;
	let err=document.querySelector("#addTicketError");
	if (Number(amount)<1||amount==""||name==""||dt=="") {
		alert("name "+name+",amount "+amount+",date "+dt);
		err.textContent="All is required, And real data";
		return false;
	}
	else
	{
		err.textContent="";
		return true;
	}
}