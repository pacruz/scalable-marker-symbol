/// <amd-dependency path='esri/core/tsSupport/declareExtendsHelper' name='__extends' />
/// <amd-dependency path='esri/core/tsSupport/decorateHelper' name='__decorate' />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "esri/core/tsSupport/declareExtendsHelper", "esri/core/tsSupport/decorateHelper", "esri/symbols/PictureMarkerSymbol", "esri/core/accessorSupport/decorators"], function (require, exports, __extends, __decorate, PictureMarkerSymbol, decorators_1) {
    "use strict";
    var ScalableMarkerSymbol = (function (_super) {
        __extends(ScalableMarkerSymbol, _super);
        function ScalableMarkerSymbol() {
            var _this = _super.call(this) || this;
            _this._displayBoundary = false;
            return _this;
        }
        Object.defineProperty(ScalableMarkerSymbol.prototype, "width", {
            get: function () {
                return this._width;
            },
            set: function (value) {
                this._width = value * 0.75;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScalableMarkerSymbol.prototype, "height", {
            get: function () {
                return this._height;
            },
            set: function (value) {
                this._height = value * 0.75;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScalableMarkerSymbol.prototype, "path", {
            set: function (value) {
                var pathSansAlpha = value.replace(/[a-zA-Z]+/g, '');
                pathSansAlpha = pathSansAlpha.replace(/,/g, ' ');
                pathSansAlpha = pathSansAlpha.replace(/  +/g, ' ');
                pathSansAlpha = pathSansAlpha.trim();
                var arrs = [[], []];
                pathSansAlpha.split(' ').forEach(function (val, i) {
                    arrs[i & 1].push(val);
                });
                var xMin = Math.min.apply(Math, arrs[0]);
                xMin = xMin <= 0 ? xMin : 0;
                var xMax = Math.max.apply(Math, arrs[0]);
                var yMin = Math.min.apply(Math, arrs[1]);
                yMin = yMin <= 0 ? yMin : 0;
                var yMax = Math.max.apply(Math, arrs[1]);
                var width = Math.abs(xMax - xMin);
                var height = Math.abs(yMax - yMin);
                var svgXml = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 " + width + " " + height + "\">";
                svgXml += "<path d=\"" + value + "\"/>";
                svgXml += "</svg>";
                this.url = 'data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" standalone="no"?>' + svgXml;
            },
            enumerable: true,
            configurable: true
        });
        return ScalableMarkerSymbol;
    }(decorators_1.declared(PictureMarkerSymbol)));
    __decorate([
        decorators_1.property()
    ], ScalableMarkerSymbol.prototype, "width", null);
    __decorate([
        decorators_1.property()
    ], ScalableMarkerSymbol.prototype, "height", null);
    __decorate([
        decorators_1.property()
    ], ScalableMarkerSymbol.prototype, "path", null);
    ScalableMarkerSymbol = __decorate([
        decorators_1.subclass('esrips.symbols.ScalableMarkerSymbol')
    ], ScalableMarkerSymbol);
    return ScalableMarkerSymbol;
});
//# sourceMappingURL=ScalableMarkerSymbol.js.map