fetch('http://localhost:3000/bike_tours')
    .then((response) => response.json())
    .then((bike_tours) => {
        bike_tour_tiles.innerHTML = 
            '<div id="card-row" class="row no-gutters">' 
            + bike_tours.map(makeTile).join("") 
            + "</div>"
    })
    .catch((err) => console.log(err))

function makeTile(tile) {
    return `
        <div class="col-12 col-md-4">
            <div class="card border-0">
                <a href=${tile.page}>
                    <div class="content">
                        <div class="content-overlay"></div>
                        <img class="content-image img-fluid" src=${tile.image} height="300px">
                        <div class="content-details">
                            <h3 class="content-title text-white">
                                ${tile.title}
                            </h3>
                            <p class="content-text text-white">
                                ${tile.subtitle}
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    `;
}