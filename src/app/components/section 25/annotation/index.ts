import { costemMap } from "../costemMap";

new  google.maps.Map(document.getElementById('map'), {
    zoom: 1,
    center: {
        lat: 0,
        lng: 0,
    },
});

new costemMap('map');