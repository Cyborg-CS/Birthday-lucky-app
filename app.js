const userBirthday = document.querySelector("#birthday");
const userLuckynum = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-btn");
const resultArea = document.querySelector("#result-box");
const errorMessage = document.querySelector("#error-message");

checkButton.addEventListener("click", verifyBirthdayAndLuckyNumber()); 

function verifyBirthdayAndLuckyNumber(){
    hideMessage();
    if(userLuckynum.value = null ){
        
    }else{
        showMessage("fill your date of birth !")
    };
};


function hideMessage() {
    errorMessage.style.display = "none";
}

function showMessage(message) {
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
}
// function hideMessage(){
//   errorMessage.style.display = "none";
// };

// function showMessage(message){
//     errorMessage.style.display = "block";
//     errorMessage.innerText = message;
// }


 


