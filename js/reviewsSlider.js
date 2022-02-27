let slider = document.getElementById("review__slider_container");
let slider_btn = document.getElementById("review__slider_read");
let slider_run = true; //stop/run slider
let slider_elements;

class client_review{
    constructor(name, img, review, key){
        this.name = name;
        this.img = `./assets/images/${img}`;
        // this.review =review;
        this.review ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ti esse ullam et a magni nobis ratione, deleniti ducimus pariatur.';
        this.key = key;
    }
}

                // reviews fake data 
const reviews = [
    new client_review('marissa Lain', 'slider1.jpg', '', 1),
    new client_review('Gabriela Novack', 'slider2.jpg', '', 2),
    new client_review('Vannesa Lopez', 'slider3.jpg', '', 3),
    new client_review('Hanna Montana', 'slider4.jpg','', '', 4),
    new client_review('Luci Perez', 'slider5.jpg', '', 5),
    new client_review('Patricia Janiot', 'slider6.jpg', '', 6),
]


            //create a element for each review
reviews.forEach((review, i)=>{
    slider.innerHTML += `   
    <div class="review__slider_item">
        <img src="${review.img}">
        <p>${review.review}</p>
        <h3>${review.name}</h3>
    </div>
    `;
    if(i===reviews.length-1) slider_elements = document.querySelectorAll(".review__slider_item");
})

            // set listenners
slider_btn.addEventListener("click", sliderToggler);

slider_elements.forEach(element=>{
    element.addEventListener("mouseover", sliderToggler)
    element.addEventListener("mouseleave", sliderToggler)
})


function sliderToggler(){
    slider.style.animationPlayState = slider_run ? "paused" : "running";
    slider_run = !slider_run;
}


// ANIMATION IS CONTROLLED IN MOST PART BY CSS, this just stop it or run it


