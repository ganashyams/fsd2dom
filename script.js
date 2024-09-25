var btn1 = document.getElementById("btn1");
var err1 = document.getElementById("err1");
var btn2 = document.getElementById("btn2");

function display(){
    try {
        alart("btn clicked")
    } catch (error) {
        err1.innerText=error.message
    }
}
function check(){
    var text = document.getElementById("text").value;
    var para =document.getElementById("para");
    try {
        if(text=="")throw"box cannot be empty";
        if(isNaN(text))throw"value is not a number";
        if(text<10)throw"value should be grater than 10";
        if(text>20)throw"value should be leser than 20";
    } catch (error) {
        para.innerText=error
    }
    finally{
            document
    }
}