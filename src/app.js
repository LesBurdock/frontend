
function getEmail(){
    let email = document.querySelector("#email_adress");
   let text = document.getElementById("message")
   text.innerText=`Thanks for subscribing! A confirmation email has been sent to ${email.value}
    Please open it and click the button inside to confirm your subscription.`;
}