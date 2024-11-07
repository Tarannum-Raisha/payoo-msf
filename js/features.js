// show the cash out

document.getElementById('show-cash-out').addEventListener('click',function(){
    //show cash out btn clicked
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
})

document.getElementById('show-add-money').addEventListener('click',function(){
    //show cash out btn clicked
  document.getElementById('add-money-form').classList.remove('hidden');
  document.getElementById('cash-out-form').classList.add('hidden')
})