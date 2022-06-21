let result;
let lead= document.querySelector('.lead');
let date= new Date();
result= date.getFullYear();
lead.innerHTML= date.getMonth();



result=date.toLocaleDateString();
lead.innerHTML = date.toLocaleString('nl-BE',{timeZone: 'Europe/Brussels', day:'2-digit', month: 'long'});
console.log(result);
