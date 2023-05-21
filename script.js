
//Async function to fetch makeup API

async function makeupAPI() {
    
    try {

        let result =await(await fetch("https://makeup-api.herokuapp.com/api/v1/products.json")).json();

        let output = await result;

        dataTraversing(output);


        

    } catch (error) {
        
        console.log(error);

    }
}

makeupAPI();


//bootstrap layout

let container = document.createElement('div');

container.setAttribute('class', 'container');

let row1 = document.createElement('div');

row1.setAttribute('class', 'row');

let row2 = document.createElement('div');

row2.setAttribute('class', 'row');

let box = document.createElement('div');

// box.setAttribute('class', 'col-lg-12');

box.style.boxShadow='rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;'

let hot_release = document.createElement('div');

hot_release.setAttribute('class', 'col-12-lg text-left');

let hot_content = document.createElement('h4');

hot_content.innerText = `Amazon Hot New Releases`;

hot_content.innerHTML += `<br><span style="font-size: 15px;font-weight: 300;">Our bestselling new and future releases. Updated frequently.</span>`


//Navbar

let navbar = document.createElement('nav');

navbar.setAttribute('class', 'navbar navbar-light bg-dark');

navbar.setAttribute('style','background-color:#080909!important')

//img
let img1 = document.createElement('img');

img1.src = 'amazon1.png';

img1.style.width = '111px';

img1.style.height = '50px';

img1.setAttribute('class', 'd-inline-block align-top');

//form

let form = document.createElement('form');

form.setAttribute('class', 'form-inline');

//search bar

let search_input = document.createElement('input');

search_input.setAttribute('class', 'form-control mr-sm-2');

search_input.setAttribute('type', 'search');

search_input.setAttribute('placeholder', 'Enter the product name');

//search button

let search_button = document.createElement('button');

search_button.setAttribute('class', 'btn btn-outline-warning my-2 my-sm-0');

search_button.setAttribute('type', 'submit')

search_button.innerText = 'Search';

search_button.setAttribute('onclick', 'searchfunc()');


//apending navbar

document.body.append(navbar);

navbar.append(img1);

navbar.append(form);

form.append(search_input);

form.append(search_button);


//bootstrap layout append

document.body.append(container);

container.append(row1);

row1.append(hot_release);

hot_release.append(hot_content);

let hr = document.createElement('hr');

row1.append(hr);

container.append(row2)


// API Data Traversing & displaying in html page

function dataTraversing(data) {


    for (let i = 0; i < data.length; i++) {

        row2.innerHTML += `<a href=${data[i].product_link}><div class='card img-fluid text-center m-3'style='width:240px;font-size:13px;margin-left:19px'>
    <img src=${data[i].image_link} class='rounded mx-auto d-block mt-3' style='width:183px'>
    <h6 style="margin-top:3px;"class="text-uppercase">${data[i].brand}</h6><p class="text-uppercase">${data[i].name}</p><br>
    <p>${data[i].description}</p>
    <b class='text-left m-2' style='width: fit-content;
    background-color: yellow;
    padding: 3px;
    border-radius: 7px;'>$ ${data[i].price}</b>

    </div></a>`;
        
    }


  

}

//search function

function searchfunc() {
    
    let seach_value = search_input.value;

    for (let j = 0; j < output.length; j++){
         

         if (seach_value == output[j].name) {

            row2+= `<a href=${output[j].product_link}><div class='card img-fluid text-center m-3'style='width:240px;font-size:13px;margin-left:19px'>
            <img src=${output[j].image_link} class='rounded mx-auto d-block mt-3' style='width:183px'>
            <h6 style="margin-top:3px;"class="text-uppercase">${output[j].brand}</h6><p class="text-uppercase">${output[j].name}</p><br>
            <p>${output[j].description}</p>
            <b class='text-left m-2' style='width: fit-content;
            background-color: yellow;
            padding: 3px;
            border-radius: 7px;'>$ ${output[j].price}</b>
        
            </div></a>`
             
   
                
            
         }
            

      }

   
    }


