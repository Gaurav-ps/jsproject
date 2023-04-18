function onsignup(event)
{
    event.preventDefault();
    let obj = {
        userName : event.target.name.value,

        email : event.target.email.value
    }
    let objString = JSON.stringify(obj);
    localStorage.setItem('User Details', objString);
}