//tipos de dados
//String "" 
//Number 01
// Object {}
// Boolean true or false
// Array [] 

//Create map from
const map = L.map('mapid').setView([-16.6892474,-49.2717842], 14)

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//crate icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})






//crate and add marker

L.marker([-16.6892474,-49.2717842], {icon})
.addTo(map)
.bindPopup(popup)