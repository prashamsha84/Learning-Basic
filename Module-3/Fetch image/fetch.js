let btnEl  = document.getElementById('btnClick')
let imageEl = document.getElementById("image")

// btnEl.addEventListener('click', function (){
//     fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => response.json()) .then((data => {
//     imageEl.innerHTML = `<img src="${data.message}">`
// }))
//   })

//using fetch with async and wait
btnEl.addEventListener('click', async ()=>{
 const  response = await fetch("https://dog.ceo/api/breeds/image/random")
 const data = await response.json()
 imageEl.innerHTML = `<img src="${data.message}">` 
})


