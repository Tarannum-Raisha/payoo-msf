

// step 1: add event handler

document.getElementById('btn-cash-out').addEventListener('click',function(event){
    // prevent page reload after form submit 
    event.preventDefault();
   // s 2; get money to be added to the account balance
   const  addMoneyInput = document.getElementById('input-cash-out').value;
 
//    step 3: get the pin number provided 
const pinNumberInput =document.getElementById('input-cashout-pin').value;

// step 3: verify the pin number
// wrong wey to validate pin number 
if(pinNumberInput === '1234'){

    // step 4: get the current balance
    const accountMoney = document.getElementById('Available-balance').innerText;
   
    // step 5: add money input with account balance
  const addMoneyNumber = parseFloat(addMoneyInput);
  const accountBalance = parseFloat(accountMoney);
    const balance = accountBalance - addMoneyNumber ;
   
    // step 6 : update the account balance in the dom
    document.getElementById('Available-balance').innerText = balance;

}
else{
alert('failed to add money! please try again')
}

})