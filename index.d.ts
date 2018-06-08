/// <amd-dependency name="__extends" path="esri/core/tsSupport/declareExtendsHelper" />
/// <amd-dependency name="__decorate" path="esri/core/tsSupport/decorateHelper" />
/// <reference types="arcgis-js-api" />
declare const ScalableMarkerSymbol_base: __esri.PictureMarkerSymbolConstructor;
declare class ScalableMarkerSymbol extends ScalableMarkerSymbol_base {
    private _width;
    private _height;
    private _displayBoundary;
    width: number;
    height: number;
    path: string;
    constructor();
}
export = ScalableMarkerSymbol;
