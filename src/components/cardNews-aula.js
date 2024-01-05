//nova classe q vai se comportar como elementos html
class cardNews extends HTMLElement {
    constructor(){
        super();
        //essa classe cria uma sombra aberta para outros manipularem
        const shadow = this.attachShadow({mode: "open"})
        shadow.innerHTML = "<h1>Hello World!</h1>"
    }
}


customElements.define('card-news', cardNews)