
let mail = document.getElementById('contact-mail');

mail.addEventListener('submit', function(e){
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let body = document.getElementById('mail-body').value;
    console.log({name, email, subject, body});
    window.location.href = `mailto:rindishkrishna@gmail.com?subject=${subject}&body=${body}`
});