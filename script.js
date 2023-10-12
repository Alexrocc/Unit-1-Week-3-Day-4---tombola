


const cellCreation = function(){
for (let i = 0; i < 90; i++) {

    const tableSection = document.getElementById("tableSection")

    const newCell = document.createElement("div")
    newCell.classList.add("cell")

    const newCellNum = document.createElement("h4")
    newCellNum.innerText = i + 1

    const checkedDot = document.createElement("div")

    newCell.appendChild(newCellNum)

    newCell.appendChild(checkedDot)

    tableSection.appendChild(newCell)
}
}
cellCreation()


