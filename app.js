const birthDate = document.querySelector("#birthday");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check-btn");
const resultBox = document.querySelector("#result-box");

function compareValues(sum, luckyNumber){
   if(sum % luckyNumber){
       resultBox.innerText = "Yup !"
   }else{
       resultBox.innerText = "Nope !"
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


checkBtn.addEventListener('click', function birthdayLuckCheck(){
    const date =  birthDate.value;
    var sum = calculateSum(date);
    var userLuckyNumber = luckyNumber.value; 
    compareValues(sum,userLuckyNumber);
    if(sum && userLuckyNumber){
        
    }else{
      resultBox.innerText = "Fill-Up both fields !"  
    }
});