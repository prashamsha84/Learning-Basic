
// let num1=2
// let num2=6
// document.getElementById("num1-el").textContent= num1
// document.getElementById("num2-el").textContent= num2
// let num1 = parseInt(document.getElementById("num1-el").value)
// let num2 = parseInt(document.getElementById("num2-el").value)
let resultEL = document.getElementById("result-el")

function add(){
    let num1 = document.getElementById("num1-el").value
   let num2 = document.getElementById("num2-el").value
    let total = (+num1)+(+num2)
    resultEL.textContent = "Sum: "+total
}

function sub(){
    let num1 = document.getElementById("num1-el").value
   let num2 = document.getElementById("num2-el").value
    let total = num1-num2
    resultEL.textContent ="Sub : "+total
}

function mult(){
    let num1 = document.getElementById("num1-el").value
   let num2 = document.getElementById("num2-el").value
    let total = num1*num2
    resultEL.textContent = "Mult: "+total
}

function div(){
    let num1 = document.getElementById("num1-el").value
   let num2 = document.getElementById("num2-el").value
    let total = num1/num2
    resultEL.textContent = "Divd : "+total
}
