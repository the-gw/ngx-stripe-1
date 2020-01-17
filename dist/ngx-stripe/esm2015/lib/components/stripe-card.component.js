/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/stripe-card.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';
import { StripeService } from '../services/stripe.service';
import { StripeInstance } from '../services/stripe-instance.class';
export class StripeCardComponent {
    /**
     * @param {?} stripeService
     */
    constructor(stripeService) {
        this.stripeService = stripeService;
        this.card = new EventEmitter();
        // tslint:disable-next-line:no-output-on-prefix
        this.on = new EventEmitter();
        this.options$ = new BehaviorSubject({});
        this.elementsOptions$ = new BehaviorSubject({});
        this.stripe$ = new BehaviorSubject(null);
    }
    /**
     * @param {?} optionsIn
     * @return {?}
     */
    set options(optionsIn) {
        this.options$.next(optionsIn);
    }
    /**
     * @param {?} optionsIn
     * @return {?}
     */
    set elementsOptions(optionsIn) {
        this.elementsOptions$.next(optionsIn);
    }
    /**
     * @param {?} stripeIn
     * @return {?}
     */
    set stripe(stripeIn) {
        this.stripe$.next(stripeIn);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const elements$ = combineLatest(this.elementsOptions$.asObservable(), this.stripe$.asObservable()).pipe(switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([options, stripe]) => {
            if (stripe) {
                if (Object.keys(options).length > 0) {
                    return stripe.elements(options);
                }
                return stripe.elements();
            }
            else {
                if (Object.keys(options).length > 0) {
                    return this.stripeService.elements(options);
                }
                return this.stripeService.elements();
            }
        })));
        combineLatest(elements$, this.options$.asObservable().pipe(filter((/**
         * @param {?} options
         * @return {?}
         */
        options => Boolean(options))))).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ([elements, options]) => {
            this.element = elements.create('card', options);
            this.element.on('blur', (/**
             * @param {?} ev
             * @return {?}
             */
            ev => this.on.emit({
                event: ev,
                type: 'blur'
            })));
            this.element.on('change', (/**
             * @param {?} ev
             * @return {?}
             */
            ev => this.on.emit({
                event: ev,
                type: 'change'
            })));
            this.element.on('click', (/**
             * @param {?} ev
             * @return {?}
             */
            ev => this.on.emit({
                event: ev,
                type: 'click'
            })));
            this.element.on('focus', (/**
             * @param {?} ev
             * @return {?}
             */
            ev => this.on.emit({
                event: ev,
                type: 'focus'
            })));
            this.element.on('ready', (/**
             * @param {?} ev
             * @return {?}
             */
            ev => this.on.emit({
                event: ev,
                type: 'ready'
            })));
            this.element.mount(this.stripeCard.nativeElement);
            this.card.emit(this.element);
        }));
    }
    /**
     * @return {?}
     */
    getCard() {
        return this.element;
    }
}
StripeCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-stripe-card',
                template: `
    <div class="field" #stripeCard></div>
  `
            }] }
];
/** @nocollapse */
StripeCardComponent.ctorParameters = () => [
    { type: StripeService }
];
StripeCardComponent.propDecorators = {
    card: [{ type: Output }],
    on: [{ type: Output }],
    stripeCard: [{ type: ViewChild, args: ['stripeCard',] }],
    options: [{ type: Input }],
    elementsOptions: [{ type: Input }],
    stripe: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaXBlLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXN0cmlwZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3N0cmlwZS1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZUFBZSxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFRbkUsTUFBTSxPQUFPLG1CQUFtQjs7OztJQXdCOUIsWUFBbUIsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUF2QjlCLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQzs7UUFHbkQsT0FBRSxHQUFHLElBQUksWUFBWSxFQUEwQyxDQUFDO1FBUWhFLGFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBaUIsRUFBRSxDQUFDLENBQUM7UUFLbkQscUJBQWdCLEdBQUcsSUFBSSxlQUFlLENBQWtCLEVBQUUsQ0FBQyxDQUFDO1FBSzVELFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBd0IsSUFBSSxDQUFDLENBQUM7SUFFaEIsQ0FBQzs7Ozs7SUFoQm5ELElBQ1csT0FBTyxDQUFDLFNBQXlCO1FBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQsSUFDVyxlQUFlLENBQUMsU0FBMEI7UUFDbkQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUks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LENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUVsRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRU0sT0FBTztRQUNaLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7WUFwR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7R0FFVDthQUNGOzs7O1lBVFEsYUFBYTs7O21CQVduQixNQUFNO2lCQUVOLE1BQU07eUJBR04sU0FBUyxTQUFDLFlBQVk7c0JBRXRCLEtBQUs7OEJBS0wsS0FBSztxQkFLTCxLQUFLOzs7O0lBakJOLG1DQUEwRDs7SUFFMUQsaUNBQ3VFOztJQUV2RSx5Q0FBd0Q7O0lBQ3hELHNDQUErQjs7SUFLL0IsdUNBQTBEOztJQUsxRCwrQ0FBbUU7O0lBS25FLHNDQUFrRTs7SUFFdEQsNENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBFbGVtZW50IGFzIFN0cmlwZUVsZW1lbnQsXG4gIEVsZW1lbnRPcHRpb25zLFxuICBFbGVtZW50RXZlbnRUeXBlXG59IGZyb20gJy4uL2ludGVyZmFjZXMvZWxlbWVudCc7XG5pbXBvcnQgeyBTdHJpcGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvc3RyaXBlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRWxlbWVudHMsIEVsZW1lbnRzT3B0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvZWxlbWVudHMnO1xuaW1wb3J0IHsgU3RyaXBlSW5zdGFuY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9zdHJpcGUtaW5zdGFuY2UuY2xhc3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtc3RyaXBlLWNhcmQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiICNzdHJpcGVDYXJkPjwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFN0cmlwZUNhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAT3V0cHV0KCkgcHVibGljIGNhcmQgPSBuZXcgRXZlbnRFbWl0dGVyPFN0cmlwZUVsZW1lbnQ+KCk7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1vdXRwdXQtb24tcHJlZml4XG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb24gPSBuZXcgRXZlbnRFbWl0dGVyPHsgdHlwZTogRWxlbWVudEV2ZW50VHlwZTsgZXZlbnQ6IGFueSB9PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ3N0cmlwZUNhcmQnKSBwdWJsaWMgc3RyaXBlQ2FyZCE6IEVsZW1lbnRSZWY7XG4gIHB1YmxpYyBlbGVtZW50ITogU3RyaXBlRWxlbWVudDtcbiAgQElucHV0KClcbiAgcHVibGljIHNldCBvcHRpb25zKG9wdGlvbnNJbjogRWxlbWVudE9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMkLm5leHQob3B0aW9uc0luKTtcbiAgfVxuICBwdWJsaWMgb3B0aW9ucyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEVsZW1lbnRPcHRpb25zPih7fSk7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZWxlbWVudHNPcHRpb25zKG9wdGlvbnNJbjogRWxlbWVudHNPcHRpb25zKSB7XG4gICAgdGhpcy5lbGVtZW50c09wdGlvbnMkLm5leHQob3B0aW9uc0luKTtcbiAgfVxuICBwdWJsaWMgZWxlbWVudHNPcHRpb25zJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RWxlbWVudHNPcHRpb25zPih7fSk7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc3RyaXBlKHN0cmlwZUluOiBTdHJpcGVJbnN0YW5jZSkge1xuICAgIHRoaXMuc3RyaXBlJC5uZXh0KHN0cmlwZUluKTtcbiAgfVxuICBwdWJsaWMgc3RyaXBlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U3RyaXBlSW5zdGFuY2UgfCBudWxsPihudWxsKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RyaXBlU2VydmljZTogU3RyaXBlU2VydmljZSkge31cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgZWxlbWVudHMkOiBPYnNlcnZhYmxlPEVsZW1lbnRzPiA9IGNvbWJpbmVMYXRlc3QoXG4gICAgICB0aGlzLmVsZW1lbnRzT3B0aW9ucyQuYXNPYnNlcnZhYmxlKCksXG4gICAgICB0aGlzLnN0cmlwZSQuYXNPYnNlcnZhYmxlKClcbiAgICApLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKFtvcHRpb25zLCBzdHJpcGVdKSA9PiB7XG4gICAgICAgIGlmIChzdHJpcGUpIHtcbiAgICAgICAgICBpZiAoT2JqZWN0LmtleXMob3B0aW9ucykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmlwZS5lbGVtZW50cyhvcHRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN0cmlwZS5lbGVtZW50cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhvcHRpb25zKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHJpcGVTZXJ2aWNlLmVsZW1lbnRzKG9wdGlvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5zdHJpcGVTZXJ2aWNlLmVsZW1lbnRzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgICBjb21iaW5lTGF0ZXN0KFxuICAgICAgZWxlbWVudHMkLFxuICAgICAgdGhpcy5vcHRpb25zJC5hc09ic2VydmFibGUoKS5waXBlKGZpbHRlcihvcHRpb25zID0+IEJvb2xlYW4ob3B0aW9ucykpKVxuICAgICkuc3Vic2NyaWJlKChbZWxlbWVudHMsIG9wdGlvbnNdKSA9PiB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50cy5jcmVhdGUoJ2NhcmQnLCBvcHRpb25zKTtcblxuICAgICAgdGhpcy5lbGVtZW50Lm9uKCdibHVyJywgZXYgPT5cbiAgICAgICAgdGhpcy5vbi5lbWl0KHtcbiAgICAgICAgICBldmVudDogZXYsXG4gICAgICAgICAgdHlwZTogJ2JsdXInXG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICB0aGlzLmVsZW1lbnQub24oJ2NoYW5nZScsIGV2ID0+XG4gICAgICAgIHRoaXMub24uZW1pdCh7XG4gICAgICAgICAgZXZlbnQ6IGV2LFxuICAgICAgICAgIHR5cGU6ICdjaGFuZ2UnXG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICB0aGlzLmVsZW1lbnQub24oJ2NsaWNrJywgZXYgPT5cbiAgICAgICAgdGhpcy5vbi5lbWl0KHtcbiAgICAgICAgICBldmVudDogZXYsXG4gICAgICAgICAgdHlwZTogJ2NsaWNrJ1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgICAgdGhpcy5lbGVtZW50Lm9uKCdmb2N1cycsIGV2ID0+XG4gICAgICAgIHRoaXMub24uZW1pdCh7XG4gICAgICAgICAgZXZlbnQ6IGV2LFxuICAgICAgICAgIHR5cGU6ICdmb2N1cydcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuZWxlbWVudC5vbigncmVhZHknLCBldiA9PlxuICAgICAgICB0aGlzLm9uLmVtaXQoe1xuICAgICAgICAgIGV2ZW50OiBldixcbiAgICAgICAgICB0eXBlOiAncmVhZHknXG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICB0aGlzLmVsZW1lbnQubW91bnQodGhpcy5zdHJpcGVDYXJkLm5hdGl2ZUVsZW1lbnQpO1xuXG4gICAgICB0aGlzLmNhcmQuZW1pdCh0aGlzLmVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldENhcmQoKTogU3RyaXBlRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgfVxufVxuIl19