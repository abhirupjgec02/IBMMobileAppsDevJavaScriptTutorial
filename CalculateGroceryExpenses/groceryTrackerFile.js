

function calculateGrocery(){
    let grocery1Bill = parseFloat(document.getElementById('grocery1').value);
    let grocery2Bill = parseFloat(document.getElementById('grocery2').value);
    let grocery3Bill = parseFloat(document.getElementById('grocery3').value);

    function calculation(grocery1Bill, grocery2Bill, grocery3Bill){
        return grocery1Bill + grocery2Bill + grocery3Bill; 
    }
    return calculation(grocery1Bill, grocery2Bill, grocery3Bill);
}

let totalBill = calculateGrocery();

document.getElementById('result').innerText = `The Total amount is: ${totalBill}`;
console.log("The Total amount is: ", totalBill);