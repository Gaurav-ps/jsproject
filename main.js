function onsignup(event)
{
    event.preventDefault();
    let obj = {
        userName : event.target.name.value,

        email : event.target.email.value
    }

    localStorage.setItem(obj.email, JSON.stringify(obj));
    
}
