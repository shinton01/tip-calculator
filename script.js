const button = document.querySelector("button")
const output = document.querySelector(".output")

button.addEventListener("click", function(){
    const amount = document.querySelector("input").value
    const percentAmount = document.querySelector("#percent").value
    if(amount < 0){
        return isNegNum(amount)
    }
    if(percentAmount < 0){
        return isNegNum(percentAmount)
    }
    if(!isNaN(amount)){
        return notNum(amount)
    }
    if(!isNaN(percentAmount)){
        return notNum(percentAmount)
    }
    
    let tip = amount*addPercent(amount)
    let temp = `<h1>You should tip $${tip.toFixed(2)} on $${amount}</h1>`
    output.innerHTML = temp

    function addPercent(percent){
        percent = percentAmount/100
        return percent
    }

    function isNegNum(num){
        let message = `<h1>Amount must be greater than zero</h1>`
        num = message
        output.innerHTML = message
    }

    function notNum(num){
        let message = `<h1>Must be a number</h1>`
        num = message
        output.innerHTML = message
    }

});

