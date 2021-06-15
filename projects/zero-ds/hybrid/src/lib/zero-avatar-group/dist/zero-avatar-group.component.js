"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ZeroAvatarGroupComponent = void 0;
var core_1 = require("@angular/core");
var ZeroAvatarGroupComponent = /** @class */ (function () {
    function ZeroAvatarGroupComponent() {
        var _a;
        /** List of avatar sources. */
        this.avatarList = [];
        /** If TRUE show skeleton */
        this.loading = false;
        /** Diametro de los Avatares: { ancho x alto }. Default = 40px */
        this.diametro = 40;
        this.avatarClick = new core_1.EventEmitter();
        this.width = 40;
        this.height = 40;
        this._max = 3;
        // Si el núm. max es menor a 0, mostrar todos los Avatares
        if (this.max <= 0) {
            this.max = (_a = this.avatarList) === null || _a === void 0 ? void 0 : _a.length;
        }
    }
    Object.defineProperty(ZeroAvatarGroupComponent.prototype, "max", {
        get: function () { return this._max; },
        /** Number of avatars to show. If surpass this number, show how much items are. */
        set: function (value) {
            var _a;
            this._max = (value > 0) ? value : (_a = this.avatarList) === null || _a === void 0 ? void 0 : _a.length;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ZeroAvatarGroupComponent.prototype.trackByFn = function (index, item) { return item.id; };
    /** Evento que emite el avatar pulsado */
    ZeroAvatarGroupComponent.prototype.avatarClickEmit = function (avatarItem) {
        this.avatarClick.emit(avatarItem /* .id */);
    };
    __decorate([
        core_1.Input()
    ], ZeroAvatarGroupComponent.prototype, "avatarList");
    __decorate([
        core_1.Input()
    ], ZeroAvatarGroupComponent.prototype, "max");
    __decorate([
        core_1.Input()
    ], ZeroAvatarGroupComponent.prototype, "loading");
    __decorate([
        core_1.Input()
    ], ZeroAvatarGroupComponent.prototype, "diametro");
    __decorate([
        core_1.Output()
    ], ZeroAvatarGroupComponent.prototype, "avatarClick");
    ZeroAvatarGroupComponent = __decorate([
        core_1.Component({
            selector: 'zero-avatar-group',
            templateUrl: './zero-avatar-group.component.html',
            styleUrls: ['./zero-avatar-group.component.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], ZeroAvatarGroupComponent);
    return ZeroAvatarGroupComponent;
}());
exports.ZeroAvatarGroupComponent = ZeroAvatarGroupComponent;
