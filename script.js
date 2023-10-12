window.addEventListener("DOMContentLoaded", () => {


// CREAZIONE CELLE

const cellCreation = function(){
    
        for (let i = 0; i < 90; i++) {
    
            const tableSection = document.getElementById("tableSection")
    
            const newCell = document.createElement("div")
            newCell.classList.add("cell")
    
            const newCellNum = document.createElement("h4")
            newCellNum.innerText = i + 1
            newCellNum.classList.add("cellH4")
    
            const checkedDot = document.createElement("div")
            checkedDot.classList.add("cellDot")
    
            newCell.appendChild(newCellNum)
    
            newCell.appendChild(checkedDot)
    
            tableSection.appendChild(newCell)
        }}
        cellCreation()
    
        // RANDOMIZZAZIONE NUMERO DA BUTTON
    
        const randomNumBtn = document.getElementById("extractionBtn") 
    
        randomNumBtn.onclick = function () {
            const extraction = Math.floor(Math.random() * (90 - 1) + 1); 
    
            const dot = document.querySelectorAll(".cellDot")
            const dotArray = Array.from(dot)
    
            dotArray[extraction].classList.add("checkedNumber")
        }
    })