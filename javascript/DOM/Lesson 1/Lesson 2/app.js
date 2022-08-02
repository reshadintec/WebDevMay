var result;
// result = document.getElementById("navbarSupportedContent");
// result = document.querySelector('.col');
// // result = document.querySelectorAll('.col');
// result = document.querySelectorAll('.row');

// console.log(result);

result = window.localStorage.getItem('intec')
// result = window.localStorage.length;
result = window.localStorage.removeItem('intec');
result = window.localStorage.setItem('JS','boring');
var result2 = window.localStorage.setItem('HTML','Fan');
var result3 = window.localStorage.clear();
console.log(result,result2,result3);