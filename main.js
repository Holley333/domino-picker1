// i want to create an app
// which picks a random domino for the user
// I want my JavaScript to be able to Pick
// any Domino element, how?
// anything sort of array-like into and array,
// use Array.from() to convert it into an array.
//NodeList -> Array.from()
 function getRandomNumber(min, max) {
     return Math.floor(Math.random() * (max - min + 1) + min)
 }

  let dominoList = document.querySelectorAll(".domino-list > li")
   console.log(dominoList)
 
    let firstIndex = 0
     let lastIndex = dominoList.length - 1
 // I want a random number between firstIndex and lastIndex
       let randomIndex = getRandomNumber(firstIndex, lastIndex)
        let randomDominoElement = dominoList[randomIndex]
     console.log(randomDominoElement)

     randomDominoElement.classList.add("selected");