function Handler(e){
    e.preventDefault();
    let name=document.cForm.name.value;
    let email=document.cForm.email.value;
    let mobile=document.cForm.mobile.value;
    let Gend=document.cForm.gen.value;
    
    var nameErr=emailErr=mobileErr=genderErr=courseErr= true;
    if(name===""){
        printError("nameErr","name field cannot be empty");
    }else{
        let reg=/^[a-zA-Z\s]+$/;
        if(reg.test(name)===false){
            printError("nameErr","please enter valid name");
        }else{
            printError("nameErr","");
            nameErr=false;
        }
    }
    
    if(email===""){
        printError("emailErr","email field cannot be empty")
    }else{
        let reg=/^\S+@\S+\.\S+$/;
        if(reg.test(email)===false){
            printError("emailErr","Invalid email id");
        }else{
            printError("emailErr","");
            emailErr=false;
        }
    }
    
    if(mobile===""){
        printError("mobileErr","mobile field cannot be empty");
    }else{
        let reg=/^[6-9]\d{9}$/;
        if(reg.test(mobile)===false){
            printError("mobileErr","Invalid mobile num");
        }else{
            printError("mobileErr","");
            mobileErr=false;
        }
    }
    
}function printError(eleId,msg){
    document.getElementById(eleId).innerText=msg;
}