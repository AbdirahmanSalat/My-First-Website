const form =document.forms[0]
const username_err=document.querySelector('.username_err')
const password_err=document.querySelector('.password_err')
const main_form=document.querySelector('.login')
const signed = document.querySelector('.after_sighn')
    const person_err = document.querySelector('.person_err')
function submitForm(){
    username_err.innerHTML=''
    password_err.innerHTML=''
let pertern =  /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const confermaiton = document.querySelector('.confremation')
    const username=document.querySelector('.username')
    const password=document.querySelector('.password')
    const person = document.querySelector('.person')
    if(person.value.length===0){
        person_err.innerHTML='Usename Cant Be Blank'
        person_err.style.color='red'
    }else if (username.value.length===0){
        username_err.innerHTML='Email Cant Be Blank'
        username_err.style.color='red'

    }else if(!username.value.match(pertern)){
        username_err.innerHTML = 'Enter a valid email'
        username_err.style.color='red' 

    }else if(password.value.length===0){
        password_err.innerHTML='Password Cant Be Blank'
        password_err.style.color='red'

    }else if(password.value.length < 8){
        password_err.innerHTML='Password Should Be More Than 8 Charecters'
        password_err.style.color = 'red'
        password_err.style.fontSize = '14px'

    }else{
        password.style.border='none'
        username.style.border='none'
        password.value=0
         window.localStorage.setItem("userLoggedIn", "true")
         window.location = "home.html"
    }
}

form.addEventListener('submit',(event) =>{
    event.preventDefault()
    submitForm()
})  
const home = document.querySelector('.home-btn')

home.addEventListener('click',()=>{
    window.location='home.html'
})



