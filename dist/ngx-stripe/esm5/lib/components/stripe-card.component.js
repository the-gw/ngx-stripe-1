/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/stripe-card.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';
import { StripeService } from '../services/stripe.service';
import { StripeInstance } from '../services/stripe-instance.class';
var StripeCardComponent = /** @class */ (function () {
    function StripeCardComponent(stripeService) {
        this.stripeService = stripeService;
        this.card = new EventEmitter();
        // tslint:disable-next-line:no-output-on-prefix
        this.on = new EventEmitter();
        this.options$ = new BehaviorSubject({});
        this.elementsOptions$ = new BehaviorSubject({});
        this.stripe$ = new BehaviorSubject(null);
    }
    Object.defineProperty(StripeCardComponent.prototype, "options", {
        set: /**
         * @param {?} optionsIn
         * @return {?}
         */
        function (optionsIn) {
            this.options$.next(optionsIn);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StripeCardComponent.prototype, "elementsOptions", {
        set: /**
         * @param {?} optionsIn
         * @return {?}
         */
        function (optionsIn) {
            this.elementsOptions$.next(optionsIn);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StripeCardComponent.prototype, "stripe", {
        set: /**
         * @param {?} stripeIn
         * @return {?}
         */
        function (stripeIn) {
            this.stripe$.next(stripeIn);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StripeCardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var elements$ = combineLatest(this.elementsOptions$.asObservable(), this.stripe$.asObservable()).pipe(switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), options = _b[0], stripe = _b[1];
            if (stripe) {
                if (Object.keys(options).length > 0) {
                    return stripe.elements(options);
                }
                return stripe.elements();
            }
            else {
                if (Object.keys(options).length > 0) {
                    return _this.stripeService.elements(options);
                }
                return _this.stripeService.elements();
            }
        })));
        combineLatest(elements$, this.options$.asObservable().pipe(filter((/**
         * @param {?} options
         * @return {?}
         */
        function (options) { return Boolean(options); })))).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), elements = _b[0], options = _b[1];
            _this.element = elements.create('card', options);
            _this.element.on('blur', (/**
             * @param {?} ev
             * @return {?}
             */
            function (ev) {
                return _this.on.emit({
                    event: ev,
                    type: 'blur'
                });
            }));
            _this.element.on('change', (/**
             * @param {?} ev
             * @return {?}
             */
            function (ev) {
                return _this.on.emit({
                    event: ev,
                    type: 'change'
                });
            }));
            _this.element.on('click', (/**
             * @param {?} ev
             * @return {?}
             */
            function (ev) {
                return _this.on.emit({
                    event: ev,
                    type: 'click'
                });
            }));
            _this.element.on('focus', (/**
             * @param {?} ev
             * @return {?}
             */
            function (ev) {
                return _this.on.emit({
                    event: ev,
                    type: 'focus'
                });
            }));
            _this.element.on('ready', (/**
             * @param {?} ev
             * @return {?}
             */
            function (ev) {
                return _this.on.emit({
                    event: ev,
                    type: 'ready'
                });
            }));
            _this.element.mount(_this.stripeCard.nativeElement);
            _this.card.emit(_this.element);
        }));
    };
    /**
     * @return {?}
     */
    StripeCardComponent.prototype.getCard = /**
     * @return {?}
     */
    function () {
        return this.element;
    };
    StripeCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-stripe-card',
                    template: "\n    <div class=\"field\" #stripeCard></div>\n  "
                }] }
    ];
    /** @nocollapse */
    StripeCardComponent.ctorParameters = function () { return [
        { type: StripeService }
    ]; };
    StripeCardComponent.propDecorators = {
        card: [{ type: Output }],
        on: [{ type: Output }],
        stripeCard: [{ type: ViewChild, args: ['stripeCard',] }],
        options: [{ type: Input }],
        elementsOptions: [{ type: Input }],
        stripe: [{ type: Input }]
    };
    return StripeCardComponent;
}());
export { StripeCardComponent };
if (false) {
    /** @type {?} */
    StripeCardComponent.prototype.card;
    /** @type {?} */
    StripeCardComponent.prototype.on;
    /** @type {?} */
    StripeCardComponent.prototype.stripeCard;
    /** @type {?} */
    StripeCardComponent.prototype.element;
    /** @type {?} */
    StripeCardComponent.prototype.options$;
    /** @type {?} */
    StripeCardComponent.prototype.elementsOptions$;
    /** @type {?} */
    StripeCardComponent.prototype.stripe$;
    /** @type {?} */
    StripeCardComponent.prototype.stripeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaXBlLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXN0cmlwZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3N0cmlwZS1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGVBQWUsRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU9uRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRW5FO0lBOEJFLDZCQUFtQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQXZCOUIsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDOztRQUduRCxPQUFFLEdBQUcsSUFBSSxZQUFZLEVBQTBDLENBQUM7UUFRaEUsYUFBUSxHQUFHLElBQUksZUFBZSxDQUFpQixFQUFFLENBQUMsQ0FBQztRQUtuRCxxQkFBZ0IsR0FBRyxJQUFJLGVBQWUsQ0FBa0IsRUFBRSxDQUFDLENBQUM7UUFLNUQsWUFBTyxHQUFHLElBQUksZUFBZSxDQUF3QixJQUFJLENBQUMsQ0FBQztJQUVoQixDQUFDO0lBaEJuRCxzQkFDVyx3Q0FBTzs7Ozs7UUFEbEIsVUFDbUIsU0FBeUI7WUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFDVyxnREFBZTs7Ozs7UUFEMUIsVUFDMkIsU0FBMEI7WUFDbkQsSUFBSSxDQUFDLGdCQUFnQixDQUFD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QUEsS0FBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBQ1gsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsSUFBSSxFQUFFLE9BQU87aUJBQ2QsQ0FBQztZQUhGLENBR0UsRUFDSCxDQUFDO1lBRUYsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUVsRCxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRU0scUNBQU87OztJQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7O2dCQXBHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLG1EQUVUO2lCQUNGOzs7O2dCQVRRLGFBQWE7Ozt1QkFXbkIsTUFBTTtxQkFFTixNQUFNOzZCQUdOLFNBQVMsU0FBQyxZQUFZOzBCQUV0QixLQUFLO2tDQUtMLEtBQUs7eUJBS0wsS0FBSzs7SUE2RVIsMEJBQUM7Q0FBQSxBQXJHRCxJQXFHQztTQS9GWSxtQkFBbUI7OztJQUM5QixtQ0FBMEQ7O0lBRTFELGlDQUN1RTs7SUFFdkUseUNBQXdEOztJQUN4RCxzQ0FBK0I7O0lBSy9CLHVDQUEwRDs7SUFLMUQsK0NBQW1FOztJQUtuRSxzQ0FBa0U7O0lBRXRELDRDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgRWxlbWVudCBhcyBTdHJpcGVFbGVtZW50LFxuICBFbGVtZW50T3B0aW9ucyxcbiAgRWxlbWVudEV2ZW50VHlwZVxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2VsZW1lbnQnO1xuaW1wb3J0IHsgU3RyaXBlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3N0cmlwZS5zZXJ2aWNlJztcbmltcG9ydCB7IEVsZW1lbnRzLCBFbGVtZW50c09wdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2VsZW1lbnRzJztcbmltcG9ydCB7IFN0cmlwZUluc3RhbmNlIH0gZnJvbSAnLi4vc2VydmljZXMvc3RyaXBlLWluc3RhbmNlLmNsYXNzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXN0cmlwZS1jYXJkJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIiAjc3RyaXBlQ2FyZD48L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBTdHJpcGVDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQE91dHB1dCgpIHB1YmxpYyBjYXJkID0gbmV3IEV2ZW50RW1pdHRlcjxTdHJpcGVFbGVtZW50PigpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LW9uLXByZWZpeFxuICBAT3V0cHV0KClcbiAgcHVibGljIG9uID0gbmV3IEV2ZW50RW1pdHRlcjx7IHR5cGU6IEVsZW1lbnRFdmVudFR5cGU7IGV2ZW50OiBhbnkgfT4oKTtcblxuICBAVmlld0NoaWxkKCdzdHJpcGVDYXJkJykgcHVibGljIHN0cmlwZUNhcmQhOiBFbGVtZW50UmVmO1xuICBwdWJsaWMgZWxlbWVudCE6IFN0cmlwZUVsZW1lbnQ7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgb3B0aW9ucyhvcHRpb25zSW46IEVsZW1lbnRPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zJC5uZXh0KG9wdGlvbnNJbik7XG4gIH1cbiAgcHVibGljIG9wdGlvbnMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxFbGVtZW50T3B0aW9ucz4oe30pO1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGVsZW1lbnRzT3B0aW9ucyhvcHRpb25zSW46IEVsZW1lbnRzT3B0aW9ucykge1xuICAgIHRoaXMuZWxlbWVudHNPcHRpb25zJC5uZXh0KG9wdGlvbnNJbik7XG4gIH1cbiAgcHVibGljIGVsZW1lbnRzT3B0aW9ucyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEVsZW1lbnRzT3B0aW9ucz4oe30pO1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHN0cmlwZShzdHJpcGVJbjogU3RyaXBlSW5zdGFuY2UpIHtcbiAgICB0aGlzLnN0cmlwZSQubmV4dChzdHJpcGVJbik7XG4gIH1cbiAgcHVibGljIHN0cmlwZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFN0cmlwZUluc3RhbmNlIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHN0cmlwZVNlcnZpY2U6IFN0cmlwZVNlcnZpY2UpIHt9XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGVsZW1lbnRzJDogT2JzZXJ2YWJsZTxFbGVtZW50cz4gPSBjb21iaW5lTGF0ZXN0KFxuICAgICAgdGhpcy5lbGVtZW50c09wdGlvbnMkLmFzT2JzZXJ2YWJsZSgpLFxuICAgICAgdGhpcy5zdHJpcGUkLmFzT2JzZXJ2YWJsZSgpXG4gICAgKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChbb3B0aW9ucywgc3RyaXBlXSkgPT4ge1xuICAgICAgICBpZiAoc3RyaXBlKSB7XG4gICAgICAgICAgaWYgKE9iamVjdC5rZXlzKG9wdGlvbnMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpcGUuZWxlbWVudHMob3B0aW9ucyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdHJpcGUuZWxlbWVudHMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoT2JqZWN0LmtleXMob3B0aW9ucykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RyaXBlU2VydmljZS5lbGVtZW50cyhvcHRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3RyaXBlU2VydmljZS5lbGVtZW50cygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gICAgY29tYmluZUxhdGVzdChcbiAgICAgIGVsZW1lbnRzJCxcbiAgICAgIHRoaXMub3B0aW9ucyQuYXNPYnNlcnZhYmxlKCkucGlwZShmaWx0ZXIob3B0aW9ucyA9PiBCb29sZWFuKG9wdGlvbnMpKSlcbiAgICApLnN1YnNjcmliZSgoW2VsZW1lbnRzLCBvcHRpb25zXSkgPT4ge1xuICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudHMuY3JlYXRlKCdjYXJkJywgb3B0aW9ucyk7XG5cbiAgICAgIHRoaXMuZWxlbWVudC5vbignYmx1cicsIGV2ID0+XG4gICAgICAgIHRoaXMub24uZW1pdCh7XG4gICAgICAgICAgZXZlbnQ6IGV2LFxuICAgICAgICAgIHR5cGU6ICdibHVyJ1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgICAgdGhpcy5lbGVtZW50Lm9uKCdjaGFuZ2UnLCBldiA9PlxuICAgICAgICB0aGlzLm9uLmVtaXQoe1xuICAgICAgICAgIGV2ZW50OiBldixcbiAgICAgICAgICB0eXBlOiAnY2hhbmdlJ1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgICAgdGhpcy5lbGVtZW50Lm9uKCdjbGljaycsIGV2ID0+XG4gICAgICAgIHRoaXMub24uZW1pdCh7XG4gICAgICAgICAgZXZlbnQ6IGV2LFxuICAgICAgICAgIHR5cGU6ICdjbGljaydcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuZWxlbWVudC5vbignZm9jdXMnLCBldiA9PlxuICAgICAgICB0aGlzLm9uLmVtaXQoe1xuICAgICAgICAgIGV2ZW50OiBldixcbiAgICAgICAgICB0eXBlOiAnZm9jdXMnXG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICB0aGlzLmVsZW1lbnQub24oJ3JlYWR5JywgZXYgPT5cbiAgICAgICAgdGhpcy5vbi5lbWl0KHtcbiAgICAgICAgICBldmVudDogZXYsXG4gICAgICAgICAgdHlwZTogJ3JlYWR5J1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgICAgdGhpcy5lbGVtZW50Lm1vdW50KHRoaXMuc3RyaXBlQ2FyZC5uYXRpdmVFbGVtZW50KTtcblxuICAgICAgdGhpcy5jYXJkLmVtaXQodGhpcy5lbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDYXJkKCk6IFN0cmlwZUVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gIH1cbn1cbiJdfQ==