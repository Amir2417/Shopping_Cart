function updateNumber(product,price,isIncreasing){
    const input = document.getElementById(product +'-number');
    let updateValue = input.value;
    if(isIncreasing == true){
        updateValue =parseInt(updateValue)  +1;

    }
    else if(updateValue > 0){
        updateValue = parseInt(updateValue) -1;

    }
    input.value = updateValue;
    const caseTotal = document.getElementById(product+'Total');
    caseTotal.innerText = updateValue * price;
    total();
    
}

//update subtotal,tax,total
function getInput(product){
    const productInput = document.getElementById(product +'-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;

}
function total(){
    const phoneTotal = getInput('phone') * 1219;
    const caseTotal = getInput('case') * 58;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal /10;
    const total = subTotal + tax;
    document.getElementById('subTotal').innerText =subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('Total').innerText = total;

}

document.getElementById('phone-plus').addEventListener('click',function(){
    updateNumber('phone',1219,true);
});

document.getElementById('phone-minus').addEventListener('click',function(){
    updateNumber('phone',1219,false);

});

document.getElementById('case-plus').addEventListener("click",function(){
    updateNumber('case',58,true);
    
});
    
document.getElementById('case-minus').addEventListener('click',function(){
    updateNumber('case',58,false);
});




