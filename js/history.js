const history__container = document.getElementById("history__container");
let elements;
let observer;

class HistoryComponent{
    constructor( img, text, key){
        this.img = `./assets/images/${img}`;
        // this.text =text;
        this.text ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, recusandae. Hic voluptatum illum laboriosam, laudantium modi optio consectetur laborum. Corrupti esse ullam et a magni nobis ratione, deleniti ducimus pariatur.';
        this.key = key;
    }
}

            //fake data
const history_components = [
    new HistoryComponent( 'slider1.jpg', '', 1),
    new HistoryComponent( 'slider2.jpg', '', 2),
    new HistoryComponent( 'slider3.jpg', '', 3),
    new HistoryComponent( 'slider4.jpg','', '', 4),
    new HistoryComponent( 'slider5.jpg', '', 5),
    new HistoryComponent( 'slider6.jpg', '', 6),
]


let block_a = (component)=>(
    `
    <div class="history__section ">
        <div class="history__line"><div class="pointer left"></div></div>
        
        <div class="history__element">
            <img class ="history__image" src="${component.img}">
        </div>

        <div class="history__element">
            <div class="history__text"><p>${ component.text}</p></div>
        </div>
    </div>
`          
)

let block_b = (component)=>(
    `
    <div class="history__section">
        <div class="history__line"><div class="pointer right"></div></div>

        <div class="history__element">
            <div class="history__text"><p>${component.text}</p></div>
        </div>
        
        <div class="history__element">
            <img class ="history__image" src="${component.img}">
        </div>
    </div>
`                     
)

history_components.forEach((component, i)=>{
    let is_par = i%2 === 0; //change beetween both components
    history__container.innerHTML += is_par ? block_a(component) : block_b(component);
 
    if(i===history_components.length-1) elements = document.querySelectorAll(".history__element"); 
})

 
 const displayAnimations = (entries, observer)=>{
        entries.forEach((entrie, i)=>{
            if(entrie.isIntersecting){
                if(i % 2 === 0) entrie.target.classList.add("history__element_isIntersecting1");
                else entrie.target.classList.add("history__element_isIntersecting2");
            }
        })    
    }

 observer = new IntersectionObserver(displayAnimations, {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: 0.5,     
 })

elements.forEach(element=>observer.observe(element))


// const elements = document.querySelectorAll(".section");

// const showImage = (entries, observer)=>{
//     // console.log(entries);
//     // console.log(observer);
//     entries.forEach(entrie=>{
//         if(entrie.isIntersecting){
//             entrie.target.classList.add("isIntersected");
//         }
//     })
// }

// const observer = new IntersectionObserver(showImage, {
//     root: null,
//     rootMargin: '0px 0px 0px 0px',
//     threshold: 0.3,
// });


// elements.forEach(element=>{
//     observer.observe(element);
// })


