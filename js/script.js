function changeSearch(type, event) {
    const searchBox = document.getElementById("search-box");
    const buttons = document.querySelectorAll(".menu button");

    // Remove 'active' de todos os botões
    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    // Adiciona 'active' ao botão clicado
    event.target.classList.add("active");

    // Altera o HTML da busca conforme o tipo
    if (type === "viagens") {
        searchBox.innerHTML = `
            <input type="text" placeholder="Origem">
            <input type="text" placeholder="Destino">
            <input type="date">
            <input type="date">
            <button class="search-button">Buscar</button>
        `;
    } else if (type === "hospedagens") {
        searchBox.innerHTML = `
            <input type="text" placeholder="Destino">
            <input type="date">
            <input type="date">
            <select>
                <option>1 Quarto</option>
                <option>2 Quartos</option>
                <option>3 Quartos</option>
            </select>
            <button class="search-button">Buscar</button>
        `;
    } else if (type === "carros") {
        searchBox.innerHTML = `
            <input type="text" placeholder="Local de retirada">
            <input type="date">
            <input type="date">
            <select>
                <option>Econômico</option>
                <option>SUV</option>
                <option>Luxo</option>
            </select>
            <button class="search-button">Buscar</button>
        `;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    new Swiper('.card-slider', {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 'auto',
        centeredSlides: false,
        
        // Paginação
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navegação - classes CORRETAS
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
                centeredSlides: true,
                navigation: {
                    enabled: false // Desativa navegação por setas em mobile
                }
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
                navigation: {
                    enabled: true // Ativa navegação por setas em tablets+
                }
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            },

            1280: {
                slidesPerView: 4,
                spaceBetween: 35,
                // navigation: {
                //     enabled: true
                // }
            },


        }
    });
});