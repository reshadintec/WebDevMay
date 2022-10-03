//test and learn bcryptjs module
const bcrypt = require('bcryptjs')
const user_passwords = 'abc123'

//hashing plain text passwords 
bcrypt.hash(user_passwords,10,)
.then(result =>{
    console.log(`before hashing passowrd is ${user_passwords} & after hashing it is ${result}`)
})

const passByUser = 'abc123';
//$2a$10$FbxP.Mr4zKTAfJdTSaIa7.OOF0CR.M8aLkyFTFKp4W3tR5dKk6/sG   This is hashed password

bcrypt.compare(passByUser,'$2a$10$FbxP.Mr4zKTAfJdTSaIa7.OOF0CR.M8aLkyFTFKp4W3tR5dKk6/sG')
.then(res=>{
    console.log(res)
})
