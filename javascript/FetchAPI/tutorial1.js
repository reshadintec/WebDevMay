// fetch(' http://localhost:5000/api')
// .then(response=>{
//     setTimeout(()=>{
//         console.log("hello")
//     },3000)
//     return response.json();
// })
// .then(data=>{
//         data.forEach(user=>{
//             console.log(user)
//         })
//     })
//     .catch(err=>console.log(err))

// async function getUsers(){
//     let response = await fetch('http://localhost:5000/api')
//     return response.json()
// }
// getUsers()
// .then(data=>{
//     console.log(data)
// })

const TbodyResult = document.getElementById('result');
let getUsers = new Promise((resolve,reject)=>{
    fetch('http://localhost:5000/api')
    .then(res=>res.json())
    .then(data=>{
        resolve(data)
    })
    .catch(eer=>reject(err))
})

getUsers
.then(data=>{
    data.forEach(user=>{
        TbodyResult.innerHTML +=`<tr>
        <td>${user.id}</td>
        <td>${user.username}</td>
        <td>${user.password}</td>
        </tr>`
    })
})


/*step 1: Get all original data
step 2: extract specific properties from user {id username, password}
step 3: users.push({})
step 4: Users in table form 