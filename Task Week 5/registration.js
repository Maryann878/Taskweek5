const firstn = document.getElementById('fname')
const lastn = document.getElementById('lname')
const pwd1 = document.getElementById('p1')
const pwd2 = document.getElementById('p2')

const subBtn = document.querySelector('#submitBtn');
subBtn.addEventListener('click', function validate(event){
    if (firstn.value===lastn.value) {
        alert('firstname must not be same with lastname')
        event.preventDefault()
        
    } 
    if (pwd1.value !== pwd2.value) {
        alert(`password did not match`)
        event.preventDefault();
    } else {event.submit();}
    
} )

