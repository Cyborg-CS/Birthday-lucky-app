const birthDate = document.querySelector("#birthday");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check-btn");
const resultBox = document.querySelector(".output-tag");
const luckyImg = document.getElementById("lucky-img");
const notLuckyImg = document.getElementById("notlucky-img");


function compareValues(sum, luckyNumber){
   if(sum % luckyNumber === 0){
    luckyImg.style.display = "block";
    notLuckyImg.style.display = "none";
    resultBox.style.color = "green";   
    resultBox.innerText = "Yup! You got a lucky brithday. "
   }else{
    notLuckyImg.style.display = "block";
    luckyImg.style.display = "none";
    resultBox.style.color = "red";    
    resultBox.innerText = "Your Bithday isn't that lucky i guess"
   } 
}



function calculateSum(date){
   const dob = date.replaceAll("-","");
   let sum = 0;
   for(let index = 0; index < dob.length; index++){
       sum = sum + Number(dob.charAt(index))
   };
   return sum;
   
}
//Intial declarations//
alert("Note: Our site doesn't store any of your data");
luckyImg.style.display = "none";
notLuckyImg.style.display = "none";

//clickhandeler function starts...
checkBtn.addEventListener('click', function birthdayLuckCheck(){
    var date =  birthDate.value;
    var userLuckyNumber = Number(luckyNumber.value); 
    if(date && userLuckyNumber){
      if(userLuckyNumber > 0){
      var sum = calculateSum(date);
      compareValues(sum,userLuckyNumber);
    }else{
      resultBox.innerText = "Lucky number should be a positive number !";
    } 
    }else{
      resultBox.innerText = "Fill-Up both fields !"  
    }
});