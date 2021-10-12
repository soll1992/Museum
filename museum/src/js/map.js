const accessToken = "pk.eyJ1IjoiYW50b25kOTIiLCJhIjoiY2t1bmJoMW5lMXlmczJvb3preTJra2ZubiJ9.H9GDejJ0AzhnH2A92EtkcQ"

mapboxgl.accessToken = accessToken;

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    zoom: 16,
    center: [2.337676184558409, 48.86074871843468],
    pitch: 10,
    bearing: 6,
})

const marker1 = new mapboxgl.Marker({ color: 'grey'})
.setLngLat([2.3397647610812524,48.86072759755627])
.addTo(map);

const marker2 = new mapboxgl.Marker({ color: 'black'})
.setLngLat([2.336461894919,48.86087447518218])
.addTo(map);

const marker3 = new mapboxgl.Marker({ color: 'grey'})
.setLngLat([2.3332049930969783,48.860166002659])
.addTo(map); 

const marker4 = new mapboxgl.Marker({ color: 'grey'})
.setLngLat([2.33291800790972,48.86177985925522])
.addTo(map);
 

const marker5 = new mapboxgl.Marker({ color: 'grey'})
.setLngLat([2.336676731539164,48.86241562805306])
.addTo(map);

map.addControl(new mapboxgl.NavigationControl());