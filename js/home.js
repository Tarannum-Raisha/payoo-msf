//  add money to the account
 // s 1: add event handler
 // s 2; get money to be added to the account balance


// step 1: add event handler

    document.getElementById('btn-add-money').addEventListener('click',function(event){
        // prevent page reload after form submit 
        event.preventDefault();
       // s 2; get money to be added to the account balance
       const  addMoneyInput = document.getElementById('input-add-money').value;
       console.log(addMoneyInput);
    //    step 3: get the pin number provided 
    const pinNumberInput =document.getElementById('input-pin-number').value;
    console.log(pinNumberInput)


})