class Cardnews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  //criando a estrutura html
  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card_left");

    const autor = document.createElement("span");
    autor.textContent = "by " + (this.getAttribute("autor") || "Anonymous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-url");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card_right");

    const newsImage = document.createElement("img");
    newsImage.src = this.getAttribute("photo") || "./assets/imagem_padrao.png";
    newsImage.setAttribute("class", "card-img");
    newsImage.alt = this.getAttribute("alt-text");

    cardRight.appendChild(newsImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  //css
  styles() {
    const style = document.createElement("style");
    style.textContent = `
    .card {
        width: 100%;
        border: 1px solid grey;
        -webkit-box-shadow: 13px 10px 28px -7px rgba(0,0,0,0.75);
        -moz-box-shadow: 13px 10px 28px -7px rgba(0,0,0,0.75);
        box-shadow: 13px 10px 28px -7px rgba(0,0,0,0.75);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 15px;
    }

    .card-img {
        width: 300px;
    }

    .card_left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10px;
    }

    .card_left > a {
        margin-top: 15px;
        font-size: 25px;
        color: black;
        text-decoration: none;
    }

    .card_left > p {
        color: grey;
    }

    .card_left > span {
        font-weight: 400;
    }
    `;
    return style;
  }
}

customElements.define("card-news", Cardnews);
