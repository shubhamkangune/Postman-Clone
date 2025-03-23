console.log("this is project 6 in js");


// Utility functions:
// 1. Utility function to get DOM element from string

function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}


// initialize no of parameters
let addedParamCount = 0;


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

// if the user click the + button,add more parameters and if the user click the - button remove the parameters
let addParam = document.getElementById('addParam');
addParam.addEventListener('click',()=>{
    console.log("user click the addParam button");
    let params = document.getElementById('params')  
    let string = `<div id="parametersBox" class="flex gap-[15px] m-auto w-[570px] p-2">
                        <label for="url" class="block mb-2 text-sm font-bold p-2 text-gray-900"
                        >Parameter ${addedParamCount+2}</label
                        >
                        <div class="mb-5 col-md-4">
                        <input
                            type="text"
                            id="parameterKey${addedParamCount+2}"
                            class="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                            placeholder="Enter Parameter ${addedParamCount+2} key"
                        />
                        </div>
                        <div>
                        <input
                            type="text"
                            id="parameterValue${addedParamCount+2}"
                            class="border text-sm rounded-lg dark:bg-gray-700 block w-full p-2.5 dark:border-red-500"
                            placeholder="Enter Parameter ${addedParamCount+2} value"
                        />
                        </div>

                        <button
                        type="button"
                        id="addParam"
                        class="btn deleteParam text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 font-medium rounded-lg px-4 text-center h-10"
                        >
                        -
                        </button>
                    </div>`;

    // convert the element string to DOM node
    let paramElement = getElementFromString(string);
    // console.log(paramElement);
    params.appendChild(paramElement);
    // add event listener to remove the parameter on clicking - button
    let deleteParam = document.getElementsByClassName('deleteParam');
    for(item of deleteParam){
        item.addEventListener('click',(e)=>{
            e.target.parentElement.remove();
        })
    }

    addedParamCount++;
    
});

// if the user click the submit button 
let submit = document.getElementById('submit');
submit.addEventListener('click',()=>{
    let responceJsonText = document.getElementById('responceJsonText');
    responceJsonText.value = "Please Wait . . . Fetching Responce . . ."
    console.log("please wait responce for user");
    
})
