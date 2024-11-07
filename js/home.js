//  add money to the account
 // s 1: add event handler
 // s 2; get money to be added to the account balance


// step 1: add event handler

    document.getElementById('btn-add-money').addEventListener('click',function(event){
        // prevent page reload after form submit 
        event.preventDefault();
       // s 2; get money to be added to the account balance
       const  addMoneyInput = document.getElementById('input-add-money').value;
     
    //    step 3: get the pin number provided 
    const pinNumberInput =document.getElementById('input-pin-number').value;
    
    // step 3: verify the pin number
    // wrong wey to validate pin number 
    if(pinNumberInput === '1234'){

        // step 4: get the current balance
        const accountMoney = document.getElementById('Available-balance').innerText;
       
        // step 5: add money input with account balance
      const addMoneyNumber = parseFloat(addMoneyInput);
      const accountBalance = parseFloat(accountMoney);
        const balance = addMoneyNumber + accountBalance;
       
        // step 6 : update the account balance in the dom
        document.getElementById('Available-balance').innerText = balance;

    }
else{
    alert('failed to add money! please try again')
}

})