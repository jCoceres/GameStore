const url = `https://api.rawg.io/api/games?dates=&key=e527a9aa144f4435a742b02a33192e1f`

document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("container");
    const page = document.getElementById("page");

    const fetchAndRenderGames = (currentPage) => {

        fetch(currentPage)
            .then(response => response.json())
            .then((data) => {

                const fragment = document.createDocumentFragment();
                data.results.forEach((element) => {
                    let title = element.name;
                    let img = element.background_image;

                    const card = document.createElement("div");
                    card.classList.add("product-card");
                    const figure = document.createElement("figure");
                    const image = document.createElement("img");
                    image.src = img;
                    image.classList.add("product-img");
                    const figcaption = document.createElement("figcaption");
                    figcaption.textContent = title;

                    figure.appendChild(image);
                    figure.appendChild(figcaption);
                    card.appendChild(figure);

                    card.innerHTML += `
            <div>
                <a href="#" class="add-to-cart">
                    <p>59.99$</p>
                </a>
                <a class="card-fav">
                    <svg class="svgIcon favicon" stroke="#ffffff" fill="none" stroke-width="2"
                        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20px"
                        width="20px" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                        </path>
                    </svg>
                </a>
            </div>
        `

                    fragment.appendChild(card);
                })
                container.textContent = "";
                container.appendChild(fragment);

                container.addEventListener("click", (event) => {
                    event.preventDefault();
                    const enlace = event.target.closest('.card-fav');
                    if (!enlace) {
                        return
                    }
                    const svg = enlace.querySelector('.svgIcon');
                    svg.classList.toggle("active");
                })
            })
            .catch(error => console.error("Hubo un error:", error.message));
    }

    fetchAndRenderGames(url);
    page.addEventListener("click", (event) => {
        let currentPage = `${url}&page=${event.target.textContent}`
        event.preventDefault();
        fetchAndRenderGames(currentPage);
    })


}
)
