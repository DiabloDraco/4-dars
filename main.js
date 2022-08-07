let elList= document.querySelector(".list")
let listcha 
let index
for (let i = 0+1; i < 7; i++) {
    let newLi = document.createElement("li")
    let newh2 = document.createElement("h2")
    let newbtn = document.createElement("button")
    newh2.textContent = `Hello ${i}`
    newbtn.textContent = `Click`
    newbtn.classList.add(`lol${i}`)
    newLi.appendChild(newh2)
    newLi.appendChild(newbtn)
    let fragment = document.createDocumentFragment()
    fragment.appendChild(newLi)
    listcha = fragment
    index = i
    elList.appendChild(listcha)
}

elList.style.display = "flex"
elList.style.gap = "180px"
elList.style.marginTop = "300px"
elList.style.listStyleType = "none"
let btn1 = document.querySelector(".lol1")
let btn2 = document.querySelector(".lol2")
let btn3 = document.querySelector(".lol3")
let btn4 = document.querySelector(".lol4")
let btn5 = document.querySelector(".lol5")
let btn6 = document.querySelector(".lol6")
let body = document.querySelector("#body")
body.style.background = "gold"
btn1.addEventListener("click" , ()=> {
    body.style.background = "red"
})

btn2.addEventListener("click" , ()=> {
    body.style.background = "blue"
})
btn3.addEventListener("click" , ()=> {
    body.style.background = "yellow"
})
btn4.addEventListener("click" , ()=> {
    body.style.background = "orange"
})
btn5.addEventListener("click" , ()=> {
    body.style.background = "purple"
})
btn6.addEventListener("click" , ()=> {
    body.style.background = "aqua"
})
