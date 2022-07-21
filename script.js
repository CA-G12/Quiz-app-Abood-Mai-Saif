// Dom 
const startBtn = document.getElementById('start-btn')

// variables
let username = ''


// Event
startBtn.addEventListener('click',saveUsername)
console.log(startBtn)



// actions
function saveUsername(){
   username = document.getElementById('username').value;
   localStorage.setItem('username',username)
   window.location = './Questions.html'
   console.log(localStorage.getItem('username'))
}

