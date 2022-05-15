function scrollTo(element){
    window.scroll({
        left:0,
        top:element.offsetTop,
        behavior:'smooth'
    })
}
var nextbutton = document.querySelector("#next_block")


var nextbutton1 = document.querySelector("#next_block1")
var reviewbutton1 = document.querySelector("#review_block1")

var nextbutton2 = document.querySelector("#next_block2")
var reviewbutton2 = document.querySelector("#review_block2")

var block_Header = document.querySelector('#box_1')
var box_2 = document.querySelector('#box_2')
var box_3 = document.querySelector('#box_3')

nextbutton.addEventListener('click',() =>{
    scrollTo(box_2)
})

nextbutton1.addEventListener('click',() =>{
    scrollTo(box_3)
})
reviewbutton1.addEventListener('click',() =>{
    scrollTo(block_Header)
})

nextbutton2.addEventListener('click',() =>{
    scrollTo(box_3)
})
reviewbutton2.addEventListener('click',() =>{
    scrollTo(box_2)
})