function onsignup(event)
{
    event.preventDefault();
    localStorage.setItem('UserName',event.target.name.value);
    localStorage.setItem('UserMail',event.target.email.value);
}