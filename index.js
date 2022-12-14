const tiles = [
    {
        title: "Montreal to Sherbrooke",
        subtitle: "Via La Route Verte",
        image: "images/mtrl-sherbrooke/IMG_2710.jpg",
        page: "tours/mtrl-sherbrooke.html"
    },
    {
        title: "P'tit Train du Nord",
        subtitle: "Once a Railway for Ski Trains",
        image: "images/ptit-train/IMG_2551.jpg",
        page: "tours/ptit-train.html"
    },
    {
        title: "Haida Gwaii",
        subtitle: "A Magical Pacific Island",
        image: "images/haida-gwaii/IMG_0834.jpg",
        page: "tours/haida-gwaii.html"
    },
    {
        title: "Nisga'a",
        subtitle: "A Volcanic Landscape",
        image: "images/nass-valley/IMG_9730.jpg",
        page: "tours/nass-valley.html"
    },
    {
        title: "Babine Lake",
        subtitle: "BC's Longest Lake",
        image: "images/babine-lake/IMG_9538.jpg",
        page: "tours/babine-lake.html"
    },
    {
        title: "Downie Creek",
        subtitle: "A Ride Along the Columbia River",
        image: "images/downie-creek/IMG_8505.JPG",
        page: "tours/downie-creek.html"
    },
    {
        title: "Begbie Falls",
        subtitle: "Heavenly Revelstoke",
        image: "images/begbie-falls/superman-clara.JPG",
        page: "tours/begbie-falls.html"
    },
    {
        title: "Quadra & Cortes",
        subtitle: "Psychedelic Sailors",
        image: "images/quadra-cortes/IMG_6877.JPG",
        page: "tours/quadra-cortes.html"
    },
    {
        title: "Comox Lake",
        subtitle: "Tucked Behind the Comox Valley",
        image: "images/comox-lake/IMG_6328.JPG",
        page: "tours/comox-lake.html"
    },
    {
        title: "Texada Island",
        subtitle: "The Largest Island in the Strait of Georgia",
        image: "images/texada/IMG_5873.JPG",
        page: "tours/texada.html"
    },
    {
        title: "Brewster & Campbell Lakes",
        subtitle: "Two Fine Lakes",
        image: "images/brewster-lake/IMG_5594.JPG",
        page: "tours/brewster-lake.html"
    },
    {
        title: "North Vancouver Island",
        subtitle: "All Paths Lead to a Beach",
        image: "images/san-josef-bay/IMG_5485.JPG",
        page: "tours/san-josef-bay.html"
    },
    {
        title: "Nanaimo to Courtenay",
        subtitle: "Via Logging Roads",
        image: "images/nanaimo-courtenay/IMG_5149.JPG",
        page: "tours/nanaimo-courtenay.html"
    },
    {
        title: "Schomberg to Montreal",
        subtitle: "Riding the Waterfront Trail",
        image: "images/to-mtrl/IMG_4290.JPG",
        page: "tours/to-mtrl.html"
    },
]

function makeTiles(tiles) {
    return `
        <div id="card-row" class="row no-gutters">
            ${tiles.map((tile) => `
                <div class="col-12 col-md-4">
                    <div class="card border-0 card-corners">
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
            `).join("")}
        </div>
    `;
}

bike_tour_tiles.innerHTML = makeTiles(tiles);
