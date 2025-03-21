console.log("this is project 6 in js");


// hide the parameters box initially
let parametersBox = document.getElementById('parametersBox');
// parametersBox.style.display = 'none';


// if the user clicks the params box, hide the json box

let paramesRadio = document.getElementById('paramesRadio')
paramesRadio.addEventListener('click',()=>{
    document.getElementById('requestJsonBox').style.display = 'none'
    document.getElementById('parametersBox').style.display = 'block'
})

// if the user clicks the json box, hide the params box

let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click',()=>{
    document.getElementById('parametersBox').style.display = 'none'
    document.getElementById('requestJsonBox').style.display = 'block'

})