const serverEntry =  "https://re-treat.uc.r.appspot.com"; //"http://localhost:8081";
const emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var subscribeBtn = document.getElementById("subscribeBtn");
subscribeBtn.addEventListener('click', subscribe);

var closeBtn = document.getElementById("close-button");

function subscribe(){
	var email = document.getElementById("email").value;
	const data = { email: email };
	if(emailValidate.test(email)){
		fetch(serverEntry + "/subscribe", {
			method: 'POST',
			  headers: {
    			'Content-Type': 'application/json',
  			},
			body: JSON.stringify(data),
		}).then(function(response){
			if(response.ok) {
				alert("Subscribed successfully!");
				closeBtn.click();
			}
			else{
				document.getElementById("email").value = "";
				document.getElementById("email").placeholder = "Invalid email!";
			}
		}).catch(err => console.log(err));
	}
	else{
		document.getElementById("email").value = "";
		document.getElementById("email").placeholder = "Invalid email!";
	}
}