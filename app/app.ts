
import ScalableMarkerSymbol = require('app/esrips/symbols/ScalableMarkerSymbol');
 
import Map = require('esri/Map');
import MapView = require('esri/views/MapView');
import Graphic = require('esri/Graphic');
import Point = require('esri/geometry/Point');
import SimpleMarkerSymbol = require('esri/symbols/SimpleMarkerSymbol');

//TODO: this works, but should be a better way to define with TypeScript
var svgSymbol = new ScalableMarkerSymbol({
  width: 40,
  height: 80,
  path: 'M 150, 0 L 75 200 L 225 200 Z'
});


// svgSymbol.path = 'M300,200 h-150 a150,150 0 1,0 150,-150 z';
// svgSymbol.path = 'M 100 350 q 150 -300 300 0z';


let referenceSymbol = new SimpleMarkerSymbol({
  size: 10,
  color: 'red'
});
// referenceSymbol.path = 'M 150, 0 L 75 200 L 225 200 Z';

let point = new Point({
  longitude: -121.84068298339844,
  latitude: 37.50552177429198
});

let pointGraphic = new Graphic({
  geometry: point,
  symbol: svgSymbol
});

let referenceGraphic = new Graphic( {
  geometry: point,
  symbol: referenceSymbol
});

let map = new Map({
  basemap: 'gray'
});
let view = new MapView({
  container: 'viewDiv',
  map: map,
  zoom: 12,
  center: [-121.848889, 37.505833]
});

view.graphics.addMany([pointGraphic, referenceGraphic]);
