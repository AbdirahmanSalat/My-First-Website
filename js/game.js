
const log_out_btn = document.querySelector(".logoutBtn")
const btns = document.querySelectorAll('.btn')
const btn1 = btns[0]
const btn2 = btns[1]
const userLoggedIn = window.localStorage.getItem("userLoggedIn")
if (userLoggedIn !== "true"){
   btn1.classList.remove("none")
   btn2.classList.remove("none")
   log_out_btn.classList.add("none")
}else{
   btn1.classList.add("none")
   btn2.classList.add("none")
   log_out_btn.classList.remove("none")   
}
console.log(userLoggedIn);
log_out_btn.addEventListener('click',()=>{
window.localStorage.setItem("userLoggedIn","false")
   btn1.classList.remove("none")
   btn2.classList.remove("none")
   log_out_btn.classList.add("none")
})





  const elements = document.getElementsByTagName("body")[0]
      elements.style.backgroundColor="black"
   elements.style.color="white"


const no_of_games = document.querySelector('.no_of_games')
const games = document.querySelectorAll('.game').length
no_of_games.innerHTML = games