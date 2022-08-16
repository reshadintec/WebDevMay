import SocialIcons from "./components/SocialIcons"
function ChildComponent(){
    //define a variable
    const compnayName="Goolge";
    const getSumResult = 4+8;
    function getSumOfNumber(a,b){
        return a+b;
    }
    const PrintStudentNames = name=>{
        return name.toUpperCase();
    }
    const Numbers = [1,2,3,4,5];
    const [] = ['Joes', 'Jane', 'Jim'];
    const [a,b,c] = ['Joes', 'Jane', 'Jim'];
    const mySumStyle = {
        'color' : 'blue',
        'fontSize' : '30px',
        'fontWeight' : 'bod'
    }
    return(
        <>
        <h1>React is Fast & Interactive</h1>
        <p>React is a very fast JS library.
        <br></br><br></br> 
        I am really impressed with the efficency of React.</p>
        
        {
            compnayName
        }
        <h1>{getSumResult}</h1>
        <h2 style={mySumStyle}>Get Sum of Two Numbers</h2>
        <h3>{getSumOfNumber(2,3)}
        {PrintStudentNames('John')}
        {console.log("Hi")}
        {
            Numbers.map(number=>{
                return (
                    <h1 style={{'color':'red'}}>{number}</h1>
                )
            })
        }
        {a}<br></br>
        {b}<br>
        </br>
        {c}
        </h3>
       
        </>
    )
}

export default ChildComponent;