//Basic---
// function saveInput(){
//     console.log("Button Clicked")
// }

//with addEventListner
// let inputBtn = document.getElementById("input-btn")
// let inputEl = document.getElementById("input-el")

// inputBtn.addEventListener("click", function(){
//     inputEl.textContent = "Button clicked from addEventListner"
// }) 

// //practice
// // 1. Grab the box from the DOM and store it in a variable
// // 2. Add a click event listener to the box 
// // 3. Log out "I want to open the box!" when it's clicked

// let boxOpen = document.getElementById("box")
//  boxOpen.addEventListener("click", function(){
//      console.log("I want to poen the box!")
//  })


//  //Refactor code
//  // Refactor the code so that it uses .addEventListener()
// // when you click the SAVE INPUT button

// // function saveLead() {
// //     console.log("Button clicked!")
// // }

// let saveInputEl = document.getElementById("input-btn")
// saveInputEl.addEventListener ("click", function(){
//     console.log("Button Clicked")
// })

//creating myLeads array and inputEL
// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field
// let myLeads = []
// const inputel = document.getElementById("input-el")
// const inputbtn = document.getElementById("input-btn")

// inputbtn.addEventListener("click", function() {
//     console.log("Button clicked!")
// })

// // pra-When to use const and let
// // If possible, use const. If not, use let.

// // Which variables below should be changed from let to const?

// // The customer wants to order some stuff. Here are the details:
// const basePrice = 520
// const discount = 120
// let shippingCost = 12
// let shippingTime = "5-12 days"

// // Whops! Turns out the shipping will be a bit more complex
// shippingCost = 15
// shippingTime = "7-14 days"

// // Calculating the full price
// const fullPrice = basePrice - discount + shippingCost

// // Finally, notifying the customer
// console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)


// //pra- push vale to myLeads
// let myLeadss = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")

// Push the value "www.awesomelead.com" to myArray when the input button is clicked

// inputBtn.addEventListener("click", function() {
//    myLeads.push("www.awesomelead.com")
//    console.log(myLeads)
// })


//pra- push from input field
// let myLeadss = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click", function() {
//     // Push the value from the inputEl into the myLeads array 
//     // instead of the hard-coded "www.awesomeleads.com" value
//     // Google -> "get value from input field javascript"
//     myLeads.push(inputEl.value)
//     console.log(myLeads)
// })
 
// use for loop to log out myLeads
// let myLeade = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     console.log(myLeads)
// })


// // Log out the items in the myLeads array using a for loop 

// for ( let i = 0; i < myLeads.length; i++){
//     console.log(myLeads[i])


// }

//create unorderlist

// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")
// console.log(ulEl)
// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     console.log(myLeads)
// })


// // Log out the items in the myLeads array using a for loop 

// for ( let i = 0; i < myLeads.length; i++){
//     console.log(myLeads[i])

// }

//render the leads in unorderded list
// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     console.log(myLeads)
// })

// // Render the leads in the unordered list using ulEl.textContent
// for (let i = 0; i < myLeads.length; i++) {
//     ulEl.textContent += myLeads[i] + " "
// }
 // how to render list using innerHTML
//  let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     console.log(myLeads)
// })


// for (let i = 0; i < myLeads.length; i++) {
//     ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
// }


// write first innerHtml
// Use .innerHTML to render a Buy! button inside the div container

// const container = document.getElementById("container")
// containerEl.innerHTML = ("<button>Buy!</button")

// more innerHTML pra--

// const container = document.getElementById("container")

// container.innerHTML = "<button onclick='buy()'>Buy!</button>"

// // When clicked, render a paragraph under the button (in the container)
// // that says "Thank you for buying!"

// function buy(){
//     container.innerHTML += "<p>Thank you for buying!</p>"
// }

//rendering <li> using innerHTML
// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     console.log(myLeads)
// })

// // Replace .textContent with .innerHTML and use <li> tags
// for (let i = 0; i < myLeads.length; i++) {
//     ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
// }

// use createElement() and append() instead of innerHtml
// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     console.log(myLeads)
// })

// // Let's try a different method!
// for (let i = 0; i < myLeads.length; i++) {
//     // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
//     // create element
//     // set text content
//     // append to ul
// const li = document.createElement("li")
// li.textContent = myLeads[i]
// ulEl.append(li)
// }

// //improving app creating variable listeitem
// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     console.log(myLeads)
// })

// // 1. Create a variable, listItems, to hold all the HTML for the list items
// let listItems = ""
// // Assign it to an empty string to begin with
// for (let i = 0; i < myLeads.length; i++) {
//     // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
//     listItems += "<li>" + myLeads[i] + "</li>"
// }
// // 3. Render the listItems inside the unordered list using ulEl.innerHTML
// ulEl.innerHTML = listItems


//create renderLeads function
// let myLeads = []
//storing arry in localStorage
// let myLeads = `["www.awesomelead.com"]`

// // 1. Turn the myLeads string into an array
// // 2. Push a new value to the array
// // 3. Turn the array into a string again
// // 4. Console.log the string using typeof to verify that it's a string
// // myLeads = JSON.parse(myLeads)
// // myLeads.push ("www.goole.com")
// // myLeads = JSON.stringify( typeof myLeads)
// // console.log(myLeads)

// //Save the myLeads array to localStorage 
//     // PS: remember JSON.stringify()
//     localStorage.setItem("myLeads", JSON.stringify (myLeads))
//     localStorage.getItem("myLeads")
//     renderLeads()
    
//     // To verify that it works:
//     console.log( localStorage.getItem("myLeads") )
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     // 2. Call the renderLeads() function
//     renderLeads()
//      // Clear out the input field
//      renderLeads()
//      inputEl.value = ""
// })

// // 1. Wrap the code below in a renderLeads() function
// function renderLeads(){
// let listItems = ""
// for (let i = 0; i < myLeads.length; i++) {
//     // listItems += "<li>" + myLeads[i] + "</li>"
//     //Adding <a> tag
//     // Wrap the lead in an anchor tag (<a>) inside the <li>
//         // Can you make the link open in a new tab?
//         // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"

//         // templete string
//         listItems += `<li>
//         <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
//         </li>`
// }

// ulEl.innerHTML = listItems
// }

// //practice templete string/literal
// // template strings/literals

// const recipient = "James"
// // Create a new variable, sender, and set its value to your name
// const sender = "Prash"
// // Use your sender variable instead of "Per"
// const email = `Hey ${recipient}! How is it going? Cheers ${sender}`

// console.log(email)

// //local storage practice
// // 1. Save a key-value pair in localStorage
// // 2. Refresh the page. Get the value and log it to the console
// // 3. Clear localStorage

// // let name = localStorage.setItem("myName", "Prash")
// let name = localStorage.getItem("myName")
// console.log(name)
// localStorage.clear()

// // HINTS:
// // localStorage.setItem(key, value)
// // localStorage.getItem(key)




let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
// 1. Store the delete button in a deleteBtn variable
const deleteBtn = document.getElementById("delete-btn")


// Get the leads from the localStorage - PS: JSON.parse()
// Store it in a variable, leadsFromLocalStorage
// Log out the variable
// localStorage.clear()
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

const tabBtn = document.getElementById("tab-btn")

// console.log(leadsFromLocalStorage)

// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}


// 2. Listen for double clicks on the delete button (google it!)
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
// 3. When clicked, clear localStorage, myLeads, and the DOM
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // Save the myLeads array to localStorage 
    // PS: remember JSON.stringify()
    localStorage.setItem("myLeads", JSON.stringify (myLeads))
    render(myLeads)
    
    // // To verify that it works:
    // console.log( localStorage.getItem("myLeads") )
    
})



// //falsy and truthy value practice
// console.log(  Boolean("")   ) // false
// console.log(  Boolean("0")  ) // true
// console.log(  Boolean(100)  ) // true
// console.log(  Boolean(null) ) // false
// console.log(  Boolean([0])  ) // true
// console.log(  Boolean(-0)   ) // false

// //write fisrt functii\on parameter 
// const welcomeEl = document.getElementById("welcome-el")

// // Give the function a parameter, greeting, that replaces "Welcome back"
// function greetUser(greet) {
//     welcomeEl.textContent = greet +", Per Harald Borgen 👋"    
// }

// greetUser("Hi")

// //multiple function parameter
// const welcomeEL = document.getElementById("welcome-el")

// // Add the ability to choose the emoji as well!

// function greetUser(greeting, name, emoji) {
//     welcomeEl.textContent = `${greeting}, ${name} ${emoji}`
// }

// greetUser("Howdy", "James", "🔥")

// //array as parameter
// // Create a function, getFirst(arr), that returns the first item in the array
// function getFirst(arr){
//     return arr[2]
// }

//  let firstCard = getFirst([1, 2, 5])
// // Call it with an array as an argument to verify that it works
// console.log(firstCard)


//practice 3 -let&const
// SETTING THE STAGE
const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"

let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`)
}

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes

//Logout items in array
let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function logItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

logItems(myCourses)

//save to localStorage
// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out
localStorage.setItem("Items", "Prash")
const fname = localStorage.getItem("Items")
console.log(fname)

//addEventListner and Object in array
let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)

const scoreBtn = document.getElementById("score-btn")
scoreBtn.addEventListener("click", function(){
    console.log(data[1])
        console.log(data[1].score)
})

//Generate Sentence
// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            baseString += arr[i]
        } else {
            baseString += arr[i] + ", "   
        }
    }
    return baseString
}

const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"])
console.log(sentence)

//render Images
// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const container = document.getElementById("container")

function renderImages() {
    let imgsDOM = ""
    for (let i = 0; i < imgs.length; i++) {
        imgsDOM += `<img alt =" User "class="team-img" src="${imgs[i]}">`
    }
    container.innerHTML = imgsDOM
}

renderImages()

//round decimal number 
// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

const totalPrice = 420.69235632455
const btn = document.getElementById("purchase-btn")
btn.textContent = `Buy €${ totalPrice.toFixed(2) }`

//convet string to number
// Challenge:
// The toFixed() method doesn't work anymore. Can you make it work?
// Google the error message if you're unsure about how to do it

const totalPrices = "420.69235632455"
const btn = document.getElementById("buy-btn")
btn.textContent = `Buy €${ parseFloat(totalPrice).toFixed(2) }`
// btn.textContent = `Buy €${ Number(totalPrice).toFixed(2) }` //any
