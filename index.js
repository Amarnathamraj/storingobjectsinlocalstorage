function handleFormSubmit(event){
    event.preventDefault();
    const name=event.target.username.value;
    const mail=event.target.email.value;
    const telephone=event.target.phone.value;
    const myobj={
        username:name,
        email:mail,
        phone:telephone
    };
    const obj=JSON.stringify(myobj);
    localStorage.setItem("mail",obj);
}
module.exports=handleFormSubmit;
