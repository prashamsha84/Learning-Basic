
let count = 0
let countEL=document.getElementById("count-el")
countEL.textContent= count
let saveEL = document.getElementById("entries-el")

function increment(){
    count += 1
    countEL.textContent = count
}

function save(){
let countstr = count + " - "
saveEL.textContent += countstr
countEL.textContent = 0
count= 0
}