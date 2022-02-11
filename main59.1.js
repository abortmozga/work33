
async function getUser(){
let user=await fetch('https://randomuser.me/api/')
let json=await user.json()

let newUser = {
    gender: json.results[0].gender,
    name: json.results[0].name.first,
    pic: json.results[0].picture.thumbnail
}
let users = document.querySelector('.users')
users.insertAdjacentHTML('beforeend',`
    <div class="user">
        <img src="${newUser.pic}" alt="">
        <h5>${newUser.name}</h5>
    </div>
`)
console.log(newUser)
}