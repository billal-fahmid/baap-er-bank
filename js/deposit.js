document.getElementById('btn-deposit').addEventListener('click' , function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositField.value) ;

    const totalDepositElement = document.getElementById('total-deposit');
    const previuseDeposit = parseFloat(totalDepositElement.innerText);
    const updateDeposit = previuseDeposit + newDepositAmount;
    totalDepositElement.innerText = updateDeposit;

    const totalBalanceElement = document.getElementById('total-balance');
    const previuseBalance = parseFloat(totalBalanceElement.innerText);
    const updateBalance = previuseBalance + newDepositAmount;
    totalBalanceElement.innerText = updateBalance;





    depositField.value='';
     
     
})