let carouselArr = [];
class Carousel {
 constructor(imagem, descricao, link) {
        this.imagem = imagem;
        this.descricao = descricao;
        this.link = link;
 }
    
      
   static Start(arr) {
        if (arr && arr.length > 0) {
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            Carousel._data = arr;

            Carousel.render();
            Carousel._interval = setInterval(() => Carousel.Next(), 5000);

          const passar = document.querySelector("#next");
            const voltar = document.querySelector("#prev");

            passar.addEventListener("click", () => {
                clearInterval(Carousel._interval);
                Carousel.Next();
                Carousel._interval = setInterval(() => Carousel.Next(), 5000);
            });

            voltar.addEventListener("click", () => {
                clearInterval(Carousel._interval);
                Carousel.Prev();
                Carousel._interval = setInterval(() => Carousel.Next(), 5000);
            });
        } else {
            throw "Method Start needs an Array Variable.";
        }
    }    

        static render() {
        const container = document.querySelector("#carousel .conteiner");
        const title = document.querySelector("#carousel-title");
        const item = Carousel._data[Carousel._sequence];

        container.innerHTML = `
            <a href="${item.link}">
                <img src="img/${item.imagem}" alt="${item.descricao}">
            </a>
        `;
        title.innerHTML = `<p>${item.descricao}</p>`;
    }

  static Next() {
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
        Carousel.render();
    }

    static Prev() {
        Carousel._sequence = (Carousel._sequence - 1 + Carousel._size) % Carousel._size;
        Carousel.render();
    }
  
}
