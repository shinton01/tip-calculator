const button = document.querySelector("button")
const output = document.querySelector(".output")

button.addEventListener("click", function(){
    const amount = document.querySelector("input").value
    let tip = amount*addPercent(amount)
    let temp = `<h1>You should tip $${tip.toFixed(2)} on $${amount}</h1>`
    output.innerHTML = temp

    function addPercent(percent){
        let percentAmount = document.getElementById("percent").value
        percent = percentAmount/100
        return percent
    }
});

