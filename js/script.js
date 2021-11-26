let d = document
let textInpt = d.querySelector('.task-text')
let addButton = d.querySelector('.add-task')
let ul = d.querySelector('.list-box')
let allLi = ul.querySelectorAll('li')
let clearButton = d.querySelector('.clear-btn')
let b1 = d.querySelectorAll('.b1')
let b2 = d.querySelectorAll('.b2')
let b3 = d.querySelectorAll('.b3')
let alrtBox = d.querySelector('.alert-box')



addButton.addEventListener('click', addTask)

for (let a = 0; a < b1.length; a++) {
    b1[a].addEventListener('click', checked)
}

for (let d = 0; d < b2.length; d++) {
    b2[d].addEventListener('click', edit)
}

for (let b = 0; b < b3.length; b++) {
    b3[b].addEventListener('click', dlt)
}
clearButton.addEventListener('click', clear)

function addTask() {
    let taskText = textInpt.value
    if (taskText === '') {
        alrtBox.style.opacity = 1;
        setTimeout(() =>{
            alrtBox.style.opacity = 0; 
        },2000)
    }else{
        let li = d.createElement('li')
        let p = d.createElement('p')
        let b1 = d.createElement('input')
        let b2 = d.createElement('input')
        let b3 = d.createElement('input')
        p.innerHTML = taskText
        b1.type = 'image'
        b2.type = 'image'
        b3.type = 'image'
        b1.setAttribute("class","b1")
        b2.setAttribute("class","b2")
        b3.setAttribute("class","b3")
        b1.setAttribute("src","img/checked.png")
        b2.setAttribute("src","img/edit.png")
        b3.setAttribute("src","img/delete.png")
        li.appendChild(p)
        li.appendChild(b1)
        li.appendChild(b2)
        li.appendChild(b3)
        ul.appendChild(li)

        b1.addEventListener('click', checked)  
        b2.addEventListener('click', edit)       
        b3.addEventListener('click', dlt)       
    }
    textInpt.value = ""
}

function checked() {
    let li = this.parentNode
    let pdl = li.querySelector("p del")
    if (pdl == undefined) {       
        let pval = li.querySelector("p").innerHTML
        let del = `<del>`+ pval +`</del>`
        li.querySelector("p").innerHTML = del
    }else{
        let pval = li.querySelector("p del").innerHTML
        li.querySelector("p").innerHTML = pval
    }
}

function edit() {
    let li = this.parentNode
    let pval = li.querySelector("p").innerHTML
    textInpt.value = pval
    li.remove()
}

function dlt() {
    let li = this.parentNode
    li.remove()
}


function clear() {
    let allLi = ul.querySelectorAll('li')
    for (let i = 0; i < allLi.length; i++) {
        ul.removeChild(allLi[i])
    }
}
