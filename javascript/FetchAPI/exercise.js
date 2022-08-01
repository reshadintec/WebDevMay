// async function fetchData(){
//     let response = await fetch('https://jsonplaceholder.typicode.com/users');
//     return response.json();
// }
// fetchData()
// .then(data=>{
//     console.log(data);
// })

// async function modData(){
//     let users = await fetchData();
//     let tabledData = document.getElementById('data');
//     users.forEach(user=>{
//         tabledData.innerHTML +=`
//         <td>${user.id}</td>
//         <td>${user.name}</td>
//         <td>${user.username}</td>
//         <td>${user.email}
//         `
//     })
// }

async function GetData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await response.json()
    return data;
}

let users = [];
GetData()
    .then(data => {
        console.log(data)
        data.map(user => {
            const obj = {
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email
            }
            console.log(obj);
            users.push(obj);
        })
        return users;
    })
    .then(data => {
        console.log(data);
    })