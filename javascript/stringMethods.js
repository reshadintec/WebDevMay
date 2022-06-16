var result;
const myText="lorem ipsum dolor sit amet ipsum"
result=myText.length;
result = myText[20];
result = myText [myText.length-1] ///last letter of the string
// concat() method
var firstName = "Ahmad ";
var lastName = "Hassani";
result= firstName.concat(lastName);
//startwith() endwith()
result =  myText.endsWith("amet");
result = myText.startsWith("lorem");
result = myText.startsWith("Lorem");
// includes method
result = myText.includes("ipsum");
result = myText.includes("isp");
result = myText.indexOf("a")
// result = myText.replace("ipsum","javascript");
result = myText.replaceAll("ipsum","js")
//split method
result = myText.split(" ");

//slice method
result =myText.slice(2,myText.length-5)

var newText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
result = newText.match(/[a-f]/)


console.log(result);


