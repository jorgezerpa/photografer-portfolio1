const history__container = document.getElementById("history__container");

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


for (let i = 0; i < history_components.length ; i++) {
                
    let pointer_direction = i%2 === 0 ?"left" : "right";

    
    history__container.innerHTML +=
        i%2===0 ?   //alternate pointer direction and change change elemens position(l<-->t)
            `
            <div class="history__section">
            <div class="history__line"><div class="pointer ${pointer_direction}"></div></div>
            <div class="history__element">
            <img class ="history__image" src="${history_components[i].img}">
            </div>
            <div class="history__element">
                <div class="history__text"><p>${history_components[i].text}</p></div>
            </div>
            </div>
        `          
        :
        `
        <div class="history__section">
            <div class="history__element">
                <div class="history__text"><p>${history_components[i].text}</p></div>
            </div>
            <div class="history__line"><div class="pointer ${pointer_direction}"></div></div>
            <div class="history__element">
                <img class ="history__image" src="${history_components[i].img}">
            </div>
        </div>
    `          
}
