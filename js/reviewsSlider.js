let slider = document.getElementById("review__slider_container");

class complete_review{
    constructor(name, img, review, key){
        this.name = name;
        this.img = `./assets/images/${img}`;
        // this.review =review;
        this.review ='    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ti esse ullam et a magni nobis ratione, deleniti ducimus pariatur.';
        this.key = key;
    }
}

// import 

const images = [
    new complete_review('marissa Lain', 'slider1.jpg', '', 1),
    new complete_review('Gabriela Novack', 'slider2.jpg', '', 2),
    new complete_review('Vannesa Lopez', 'slider3.jpg', '', 3),
    new complete_review('Hanna Montana', 'slider4.jpg','', '', 4),
    new complete_review('Luci Perez', 'slider5.jpg', '', 5),
    new complete_review('Patricia Janiot', 'slider6.jpg', '', 6),
]


for (let i = 0; i < images.length; i++) {
    let item = `   
    <div class="review__slider_item">
        <img src="${images[i].img}">
        <p>${images[i].review}</p>
        <h3>${images[i].name}</h3>
    </div>
    `;

    slider.innerHTML += item;
}


// document.getElementById("slide_left_btn");
// document.getElementById("slide_left_btn");
// document.getElementById("slide_right_btn");



