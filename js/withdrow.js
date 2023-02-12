document.getElementById('btn-withdrow').addEventListener('click' , function(){
    const withdrow = document.getElementById('withdrow-field');
    const withdrowAmount = parseFloat(withdrow.value)
    withdrow.value = '';
    if(isNaN(withdrowAmount)){
        alert('Please Provide an Amount')
        return;
    }
    
    const withdrowTotalElement = document.getElementById('withdrow-total');
    const totalWithdrow = parseFloat(withdrowTotalElement.innerText);


    const totalBalanceElement = document.getElementById('total-balance');
    const previuseBalance = parseFloat(totalBalanceElement.innerText);
    
   
    if(withdrowAmount > previuseBalance  ){
        alert('fokini tor baap ato takar malik na...')
        return;
        
    }
   
    const updateTotalWithdrow = withdrowAmount + totalWithdrow;
    withdrowTotalElement.innerText = updateTotalWithdrow;

    const updateBalance = previuseBalance - withdrowAmount;
    totalBalanceElement.innerText = updateBalance;

   
})