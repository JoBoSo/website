const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors());

const fun = (req, res) => {
    res.json([
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
            image: "images/babine-lake/IMG_9504.jpg",
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
            subtitle: "Peace on the water",
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
    ]);
};

app.get('/bike_tours', fun);


console.log("server started on port 3000")
app.listen(3000)