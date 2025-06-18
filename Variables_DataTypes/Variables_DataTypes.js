function varExample() {
    if(true){
        var x = 10;
    }
    console.log(x + " value obtained from var example. var is available outside inner blocks as well"); // Value = 10, var is available outside inner blocks as well
}

function letExample(){
    try{
        if(true){
            let x = 50;
        }
        console.log(x + " value obtained from let example");
    } catch (er){
        console.log("Exception obtained from let example. let is NOT available outside inner blocks"); // Value = 10, let is NOT available outside inner blocks
    }
}

function constExample(){
    const pi = 3.14;
    try{
        if(true){
            pi = 1;
        }
    } catch (er) {
        console.log("Value of pi is = " + pi + ", unchanged. Because it's declared as a constant.")
    }
}

varExample();
letExample();
constExample();