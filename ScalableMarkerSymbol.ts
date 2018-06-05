/// <amd-dependency path='esri/core/tsSupport/declareExtendsHelper' name='__extends' />
/// <amd-dependency path='esri/core/tsSupport/decorateHelper' name='__decorate' />

import Accessor = require('esri/core/Accessor');
import PictureMarkerSymbol = require('esri/symbols/PictureMarkerSymbol');
import { subclass, declared, property } from 'esri/core/accessorSupport/decorators';

@subclass('esrips.symbols.ScalableMarkerSymbol')
class ScalableMarkerSymbol extends declared(PictureMarkerSymbol) {

  private _width: number;
  private _height: number;
  private _displayBoundary: boolean = false;

  @property()
  get width(): number {
    return this._width;
  }
  set width(value: number) {
    this._width = value * 0.75;
  }

  @property() 
  firstName: string = "John";

  @property()
  get height(): number {
    return this._height;
  }
  set height(value: number) {
    this._height = value * 0.75;
  }

  @property()
  set path(value: string) {
    var pathSansAlpha = value.replace(/[a-zA-Z]+/g, '');
    pathSansAlpha = pathSansAlpha.replace(/,/g, ' ');
    pathSansAlpha = pathSansAlpha.replace(/  +/g, ' ');
    pathSansAlpha = pathSansAlpha.trim();
    var arrs = [[], []]
    pathSansAlpha.split(' ').forEach(function (val, i) {
      arrs[i & 1].push(val);
    });

    let xMin = Math.min(...arrs[0]);
    xMin = xMin <=0 ? xMin : 0;
    let xMax = Math.max(...arrs[0]);
    let yMin = Math.min(...arrs[1]);
    yMin = yMin <=0 ? yMin : 0;
    let yMax = Math.max(...arrs[1]);

    let width = Math.abs(xMax - xMin);
    let height = Math.abs(yMax - yMin);

    
    var svgXml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">`;
    svgXml += `<path d="${value}"/>`;
    svgXml += `</svg>`;

    this.url = 'data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" standalone="no"?>' + svgXml;
  }

  constructor() {
    super();
  }

}

export = ScalableMarkerSymbol;