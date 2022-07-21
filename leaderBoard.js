document.querySelector('.score').innerText = (localStorage.getItem('score'))
document.querySelector('.username').innerText = (localStorage.getItem('username'))

document.querySelector('.save-btn').addEventListener('click',saveToLocalStorage)

function saveToLocalStorage(){
    let allUsers = JSON.parse(localStorage.getItem('allUsers')) || []
    allUsers.push({
        username : localStorage.getItem('username') , 
        score : localStorage.getItem('score') , 
    })
    localStorage.setItem('allUsers',JSON.stringify(allUsers))
}