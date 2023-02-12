document.getElementById('btn-submit').addEventListener('click' , function(){
    const emailFeild = document.getElementById('user-email');
    const email = emailFeild.value ;

    const passwordFeild = document.getElementById('user-password');
    const password = passwordFeild.value ;
    if(email ==='billal@gmail.com' && password === 'amardesh'){
        window.location = 'bank.html'
    }else{
        alert('Email or Password invalid')
    }
})