


// search : form submit reloading the page

//step 1 : set event handler
//     document.getElementById('login-btn').addEventListener('click', function(event){
// //  step 2:   prevent default behavior for reloading browser
//         event.preventDefault(); // vegal for beginners
//         // step 3 : get the phone number and pin  ;
//       const phoneNumber =  document.getElementById('phone-number').value ;
//      const pinNumber = document.getElementById('pin-number').value;
//         console.log(phoneNumber, pinNumber);
//         // step 4 :validate phn and pin
//         // this is temporary
//         if(phoneNumber === '5' && pinNumber === '1234' ){
//             console.log('you are login' );            
//             //step 5 : allow user to use the website
//         }
//         else(
//             alert('your login is failed')
//         )
//     })


document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value ;
    const pinNumber = document.getElementById('pin-number').value;
    
 if( phoneNumber === '5' && pinNumber === '1234'){
  console.log('you are login')
 window.location.href = '/home.html'
}
  else{
    alert('please enter you pin and number')
}
})
