/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/stripe-instance.class.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject, from } from 'rxjs';
import { filter, first, map, switchMap } from 'rxjs/operators';
import { isSourceData } from '../interfaces/sources';
import { isAccount, isAccountData, isBankAccount, isBankAccountData, isPii, isPiiData } from '../interfaces/token';
import { isHandleCardPaymentOptions, isPaymentMethodData } from '../interfaces/payment-intent';
export class StripeInstance {
    /**
     * @param {?} loader
     * @param {?} window
     * @param {?} key
     * @param {?=} options
     */
    constructor(loader, window, key, options) {
        this.loader = loader;
        this.window = window;
        this.key = key;
        this.options = options;
        this.stripe$ = new BehaviorSubject(undefined);
        this.loader
            .asStream()
            .pipe(filter((/**
         * @param {?} status
         * @return {?}
         */
        (status) => status.loaded === true)), first(), map((/**
         * @return {?}
         */
        () => ((/** @type {?} */ (this.window.getNativeWindow()))).Stripe)))
            .subscribe((/**
         * @param {?} Stripe
         * @return {?}
         */
        (Stripe) => {
            /** @type {?} */
            const stripe = this.options
                ? ((/** @type {?} */ (Stripe(this.key, this.options))))
                : ((/** @type {?} */ (Stripe(this.key))));
            this.stripe$.next(stripe);
        }));
    }
    /**
     * @return {?}
     */
    getInstance() {
        return this.stripe$.getValue();
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    elements(options) {
        return this.stripe$.asObservable().pipe(filter((/**
         * @param {?} stripe
         * @return {?}
         */
        stripe => Boolean(stripe))), map((/**
         * @param {?} stripe
         * @return {?}
         */
        stripe => ((/** @type {?} */ (stripe))).elements(options))), first());
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    createToken(a, b) {
        return this.stripe$.asObservable().pipe(filter((/**
         * @param {?} stripe
         * @return {?}
         */
        stripe => Boolean(stripe))), switchMap((/**
         * @param {?} s
         * @return {?}
         */
        s => {
            /** @type {?} */
            const stripe = (/** @type {?} */ (s));
            if (isAccount(a) && isAccountData(b)) {
                return from(stripe.createToken(a, b));
            }
            else if (isBankAccount(a) && isBankAccountData(b)) {
                return from(stripe.createToken(a, b));
            }
            else if (isPii(a) && isPiiData(b)) {
                return from(stripe.createToken(a, b));
            }
            else {
                return from(stripe.createToken((/** @type {?} */ (a)), (/** @type {?} */ (b))));
            }
        })), first());
    }
    /**
     * @param {?} a
     * @param {?=} b
     * @return {?}
     */
    createSource(a, b) {
        return this.stripe$.asObservable().pipe(filter((/**
         * @param {?} stripe
         * @return {?}
         */
        stripe => Boolean(stripe))), switchMap((/**
         * @param {?} s
         * @return {?}
         */
        s => {
            /** @type {?} */
            const stripe = (/** @type {?} */ (s));
            if (isSourceData(a)) {
                return from(stripe.createSource((/** @type {?} */ (a))));
            }
            return from(stripe.createSource((/** @type {?} */ (a)), b));
        })), first());
    }
    /**
     * @param {?} source
     * @return {?}
     */
    retrieveSource(source) {
        return this.stripe$.asObservable().pipe(filter((/**
         * @param {?} stripe
         * @return {?}
         */
        stripe => Boolean(stripe))), switchMap((/**
         * @param {?} s
         * @return {?}
         */
        s => {
            /** @type {?} */
            const stripe = (/** @type {?} */ (s));
            return from(stripe.retrieveSource(source));
        })), first());
    }
    /**
     * @param {?} options
     * @return {?}
     */
    paymentRequest(options) {
        /** @type {?} */
        const stripe = this.getInstance();
        if (stripe) {
            return stripe.paymentRequest(options);
        }
        return undefined;
    }
    /**
     * @param {?} a
     * @param {?} b
     * @param {?=} c
     * @return {?}
     */
    handleCardPayment(a, b, c) {
        return this.stripe$.asObservable().pipe(filter((/**
         * @param {?} stripe
         * @return {?}
         */
        stripe => Boolean(stripe))), switchMap((/**
         * @param {?} s
         * @return {?}
         */
        s => {
            /** @type {?} */
            const stripe = (/** @type {?} */ (s));
            if (isHandleCardPaymentOptions(b)) {
                return from(stripe.handleCardPayment((/** @type {?} */ (a)), (/** @type {?} */ (b))));
            }
            return from(stripe.handleCardPayment((/** @type {?} */ (a)), (/** @type {?} */ (b)), (/** @type {?} */ (c))));
        })));
    }
    /**
     * @param {?} a
     * @return {?}
     */
    handleCardAction(a) {
        return this.stripe$.asObservable().pipe(filter((/**
         * @param {?} stripe
         * @return {?}
         */
        stripe => Boolean(stripe))), switchMap((/**
         * @param {?} s
         * @return {?}
         */
        s => {
            /** @type {?} */
            const stripe = (/** @type {?} */ (s));
            return from(stripe.handleCardAction((/** @type {?} */ (a))));
        })));
    }
    /**
     * @param {?} a
     * @param {?=} b
     * @return {?}
     */
    confirmPaymentIntent(a, b) {
        return this.stripe$.asObservable().pipe(filter((/**
         * @param {?} stripe
         * @return {?}
         */
        stripe => Boolean(stripe))), switchMap((/**
         * @param {?} s
         * @return {?}
         */
        s => {
            /** @type {?} */
            const stripe = (/** @type {?} */ (s));
            return from(stripe.confirmPaymentIntent((/** @type {?} */ (a)), (/** @type {?} */ (b))));
        })));
    }
    /**
     * @param {?} a
     * @param {?} b
     * @param {?=} c
     * @return {?}
     */
    createPaymentMethod(a, b, c) {
        return this.stripe$.asObservable().pipe(filter((/**
         * @param {?} stripe
         * @return {?}
         */
        stripe => Boolean(stripe))), switchMap((/**
         * @param {?} s
         * @return {?}
         */
        s => {
            /** @type {?} */
            const stripe = (/** @type {?} */ (s));
            return from(stripe.createPaymentMethod(a, b, c));
        })), first());
    }
    /**
     * @param {?} a
     * @param {?=} b
     * @param {?=} c
     * @return {?}
     */
    handleCardSetup(a, b, c) {
        return this.stripe$.asObservable().pipe(filter((/**
         * @param {?} stripe
         * @return {?}
         */
        stripe => Boolean(stripe))), switchMap((/**
         * @param {?} s
         * @return {?}
         */
        s => {
            /** @type {?} */
            const stripe = (/** @type {?} */ (s));
            if (isPaymentMethodData(c)) {
                return from(stripe.handleCardSetup(a, (/** @type {?} */ (b)), (/** @type {?} */ (c))));
            }
            return from(stripe.handleCardSetup(a, (/** @type {?} */ (b))));
        })));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StripeInstance.prototype.stripe$;
    /** @type {?} */
    StripeInstance.prototype.loader;
    /** @type {?} */
    StripeInstance.prototype.window;
    /** @type {?} */
    StripeInstance.prototype.key;
    /** @type {?} */
    StripeInstance.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaXBlLWluc3RhbmNlLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXN0cmlwZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zdHJpcGUtaW5zdGFuY2UuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRL0QsT0FBTyxFQUdMLFlBQVksRUFFYixNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFTTCxTQUFTLEVBQ1QsYUFBYSxFQUNiLGFBQWEsRUFDYixpQkFBaUIsRUFDakIsS0FBSyxFQUNMLFNBQVMsRUFDVixNQUFNLHFCQUFxQixDQUFDO0FBRzdCLE9BQU8sRUFNTCwwQkFBMEIsRUFDMUIsbUJBQW1CLEVBQ3BCLE1BQU0sOEJBQThCLENBQUM7QUFHdEMsTUFBTSxPQUFPLGNBQWM7Ozs7Ozs7SUFLekIsWUFDUyxNQUEyQixFQUMzQixNQUFpQixFQUNqQixHQUFXLEVBQ1gsT0FBaUI7UUFIakIsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7UUFDM0IsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQ1gsWUFBTyxHQUFQLE9BQU8sQ0FBVTtRQVJsQixZQUFPLEdBQTBDLElBQUksZUFBZSxDQUUxRSxTQUFTLENBQUMsQ0FBQztRQVFYLElBQUksQ0FBQyxNQUFNO2FBQ1IsUUFBUSxFQUFFO2FBQ1YsSUFBSSxDQUNILE1BQU07Ozs7UUFBQyxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUMsRUFDbEQsS0FBSyxFQUFFLEVBQ1AsR0FBRzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxtQkFBQSxJQUFJLENBQUMsTUFB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QUM7SUFDSixDQUFDO0NBQ0Y7Ozs7OztJQTNNQyxpQ0FFYTs7SUFHWCxnQ0FBa0M7O0lBQ2xDLGdDQUF3Qjs7SUFDeEIsNkJBQWtCOztJQUNsQixpQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGZyb20sIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgZmlyc3QsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuL3dpbmRvdy1yZWYuc2VydmljZSc7XG5pbXBvcnQgeyBMYXp5U3RyaXBlQVBJTG9hZGVyLCBTdGF0dXMgfSBmcm9tICcuL2FwaS1sb2FkZXIuc2VydmljZSc7XG5cbmltcG9ydCB7IFN0cmlwZUpTLCBPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zdHJpcGUnO1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvZWxlbWVudCc7XG5pbXBvcnQgeyBFbGVtZW50cywgRWxlbWVudHNPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9lbGVtZW50cyc7XG5pbXBvcnQge1xuICBTb3VyY2VEYXRhLFxuICBTb3VyY2VSZXN1bHQsXG4gIGlzU291cmNlRGF0YSxcbiAgU291cmNlUGFyYW1zXG59IGZyb20gJy4uL2ludGVyZmFjZXMvc291cmNlcyc7XG5pbXBvcnQge1xuICBDYXJkRGF0YU9wdGlvbnMsXG4gIFRva2VuUmVzdWx0LFxuICBBY2NvdW50LFxuICBBY2NvdW50RGF0YSxcbiAgQmFua0FjY291bnQsXG4gIEJhbmtBY2NvdW50RGF0YSxcbiAgUGlpRGF0YSxcbiAgUGlpLFxuICBpc0FjY291bnQsXG4gIGlzQWNjb3VudERhdGEsXG4gIGlzQmFua0FjY291bnQsXG4gIGlzQmFua0FjY291bnREYXRhLFxuICBpc1BpaSxcbiAgaXNQaWlEYXRhXG59IGZyb20gJy4uL2ludGVyZmFjZXMvdG9rZW4nO1xuaW1wb3J0IHsgU3RyaXBlU2VydmljZUludGVyZmFjZSB9IGZyb20gJy4vc3RyaXBlLWluc3RhbmNlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBQYXltZW50UmVxdWVzdE9wdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BheW1lbnQtcmVxdWVzdCc7XG5pbXBvcnQge1xuICBIYW5kbGVDYXJkUGF5bWVudE9wdGlvbnMsXG4gIFBheW1lbnRJbnRlbnRSZXN1bHQsXG4gIENvbmZpcm1QYXltZW50SW50ZW50T3B0aW9ucyxcbiAgUGF5bWVudE1ldGhvZERhdGEsXG4gIFBheW1lbnRNZXRob2RSZXN1bHQsXG4gIGlzSGFuZGxlQ2FyZFBheW1lbnRPcHRpb25zLFxuICBpc1BheW1lbnRNZXRob2REYXRhXG59IGZyb20gJy4uL2ludGVyZmFjZXMvcGF5bWVudC1pbnRlbnQnO1xuaW1wb3J0IHsgQ2FyZFNldHVwUmVzdWx0IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9jYXJkLXNldHVwJztcblxuZXhwb3J0IGNsYXNzIFN0cmlwZUluc3RhbmNlIGltcGxlbWVudHMgU3RyaXBlU2VydmljZUludGVyZmFjZSB7XG4gIHByaXZhdGUgc3RyaXBlJDogQmVoYXZpb3JTdWJqZWN0PFN0cmlwZUpTIHwgdW5kZWZpbmVkPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8XG4gICAgU3RyaXBlSlMgfCB1bmRlZmluZWRcbiAgPih1bmRlZmluZWQpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBsb2FkZXI6IExhenlTdHJpcGVBUElMb2FkZXIsXG4gICAgcHVibGljIHdpbmRvdzogV2luZG93UmVmLFxuICAgIHB1YmxpYyBrZXk6IHN0cmluZyxcbiAgICBwdWJsaWMgb3B0aW9ucz86IE9wdGlvbnNcbiAgKSB7XG4gICAgdGhpcy5sb2FkZXJcbiAgICAgIC5hc1N0cmVhbSgpXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKChzdGF0dXM6IFN0YXR1cykgPT4gc3RhdHVzLmxvYWRlZCA9PT0gdHJ1ZSksXG4gICAgICAgIGZpcnN0KCksXG4gICAgICAgIG1hcCgoKSA9PiAodGhpcy53aW5kb3cuZ2V0TmF0aXZlV2luZG93KCkgYXMgYW55KS5TdHJpcGUpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChTdHJpcGU6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBzdHJpcGUgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgICA/IChTdHJpcGUodGhpcy5rZXksIHRoaXMub3B0aW9ucykgYXMgU3RyaXBlSlMpXG4gICAgICAgICAgOiAoU3RyaXBlKHRoaXMua2V5KSBhcyBTdHJpcGVKUyk7XG5cbiAgICAgICAgdGhpcy5zdHJpcGUkLm5leHQoc3RyaXBlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldEluc3RhbmNlKCk6IFN0cmlwZUpTIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUkLmdldFZhbHVlKCk7XG4gIH1cblxuICBwdWJsaWMgZWxlbWVudHMob3B0aW9ucz86IEVsZW1lbnRzT3B0aW9ucyk6IE9ic2VydmFibGU8RWxlbWVudHM+IHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUkLmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICBmaWx0ZXIoc3RyaXBlID0+IEJvb2xlYW4oc3RyaXBlKSksXG4gICAgICBtYXAoc3RyaXBlID0+IChzdHJpcGUgYXMgU3RyaXBlSlMpLmVsZW1lbnRzKG9wdGlvbnMpKSxcbiAgICAgIGZpcnN0KClcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZVRva2VuKFxuICAgIGE6IEVsZW1lbnQgfCBBY2NvdW50IHwgQmFua0FjY291bnQgfCBQaWksXG4gICAgYjogQ2FyZERhdGFPcHRpb25zIHwgQWNjb3VudERhdGEgfCBCYW5rQWNjb3VudERhdGEgfCBQaWlEYXRhIHwgdW5kZWZpbmVkXG4gICk6IE9ic2VydmFibGU8VG9rZW5SZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUkLmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICBmaWx0ZXIoc3RyaXBlID0+IEJvb2xlYW4oc3RyaXBlKSksXG4gICAgICBzd2l0Y2hNYXAocyA9PiB7XG4gICAgICAgIGNvbnN0IHN0cmlwZSA9IHMgYXMgU3RyaXBlSlM7XG5cbiAgICAgICAgaWYgKGlzQWNjb3VudChhKSAmJiBpc0FjY291bnREYXRhKGIpKSB7XG4gICAgICAgICAgcmV0dXJuIGZyb20oc3RyaXBlLmNyZWF0ZVRva2VuKGEsIGIpKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0JhbmtBY2NvdW50KGEpICYmIGlzQmFua0FjY291bnREYXRhKGIpKSB7XG4gICAgICAgICAgcmV0dXJuIGZyb20oc3RyaXBlLmNyZWF0ZVRva2VuKGEsIGIpKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc1BpaShhKSAmJiBpc1BpaURhdGEoYikpIHtcbiAgICAgICAgICByZXR1cm4gZnJvbShzdHJpcGUuY3JlYXRlVG9rZW4oYSwgYikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmcm9tKFxuICAgICAgICAgICAgc3RyaXBlLmNyZWF0ZVRva2VuKGEgYXMgRWxlbWVudCwgYiBhcyBDYXJkRGF0YU9wdGlvbnMgfCB1bmRlZmluZWQpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBmaXJzdCgpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVTb3VyY2UoXG4gICAgYTogRWxlbWVudCB8IFNvdXJjZURhdGEsXG4gICAgYj86IFNvdXJjZURhdGEgfCB1bmRlZmluZWRcbiAgKTogT2JzZXJ2YWJsZTxTb3VyY2VSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUkLmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICBmaWx0ZXIoc3RyaXBlID0+IEJvb2xlYW4oc3RyaXBlKSksXG4gICAgICBzd2l0Y2hNYXAocyA9PiB7XG4gICAgICAgIGNvbnN0IHN0cmlwZSA9IHMgYXMgU3RyaXBlSlM7XG5cbiAgICAgICAgaWYgKGlzU291cmNlRGF0YShhKSkge1xuICAgICAgICAgIHJldHVybiBmcm9tKHN0cmlwZS5jcmVhdGVTb3VyY2UoYSBhcyBTb3VyY2VEYXRhKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZyb20oc3RyaXBlLmNyZWF0ZVNvdXJjZShhIGFzIEVsZW1lbnQsIGIpKTtcbiAgICAgIH0pLFxuICAgICAgZmlyc3QoKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgcmV0cmlldmVTb3VyY2Uoc291cmNlOiBTb3VyY2VQYXJhbXMpOiBPYnNlcnZhYmxlPFNvdXJjZVJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZSQuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgIGZpbHRlcihzdHJpcGUgPT4gQm9vbGVhbihzdHJpcGUpKSxcbiAgICAgIHN3aXRjaE1hcChzID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaXBlID0gcyBhcyBTdHJpcGVKUztcblxuICAgICAgICByZXR1cm4gZnJvbShzdHJpcGUucmV0cmlldmVTb3VyY2Uoc291cmNlKSk7XG4gICAgICB9KSxcbiAgICAgIGZpcnN0KClcbiAgICApO1xuICB9XG5cbiAgcHVibGljIHBheW1lbnRSZXF1ZXN0KG9wdGlvbnM6IFBheW1lbnRSZXF1ZXN0T3B0aW9ucykge1xuICAgIGNvbnN0IHN0cmlwZSA9IHRoaXMuZ2V0SW5zdGFuY2UoKTtcbiAgICBpZiAoc3RyaXBlKSB7XG4gICAgICByZXR1cm4gc3RyaXBlLnBheW1lbnRSZXF1ZXN0KG9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZUNhcmRQYXltZW50KFxuICAgIGE6IHN0cmluZyxcbiAgICBiOiBFbGVtZW50IHwgSGFuZGxlQ2FyZFBheW1lbnRPcHRpb25zLFxuICAgIGM/OiBIYW5kbGVDYXJkUGF5bWVudE9wdGlvbnMgfCB1bmRlZmluZWRcbiAgKTogT2JzZXJ2YWJsZTxQYXltZW50SW50ZW50UmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlJC5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgZmlsdGVyKHN0cmlwZSA9PiBCb29sZWFuKHN0cmlwZSkpLFxuICAgICAgc3dpdGNoTWFwKHMgPT4ge1xuICAgICAgICBjb25zdCBzdHJpcGUgPSBzIGFzIFN0cmlwZUpTO1xuXG4gICAgICAgIGlmIChpc0hhbmRsZUNhcmRQYXltZW50T3B0aW9ucyhiKSkge1xuICAgICAgICAgIHJldHVybiBmcm9tKFxuICAgICAgICAgICAgc3RyaXBlLmhhbmRsZUNhcmRQYXltZW50KGEgYXMgc3RyaW5nLCBiIGFzIEhhbmRsZUNhcmRQYXltZW50T3B0aW9ucylcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZyb20oXG4gICAgICAgICAgc3RyaXBlLmhhbmRsZUNhcmRQYXltZW50KFxuICAgICAgICAgICAgYSBhcyBzdHJpbmcsXG4gICAgICAgICAgICBiIGFzIEVsZW1lbnQsXG4gICAgICAgICAgICBjIGFzIEhhbmRsZUNhcmRQYXltZW50T3B0aW9ucyB8IHVuZGVmaW5lZFxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVDYXJkQWN0aW9uKGE6IHN0cmluZyk6IE9ic2VydmFibGU8UGF5bWVudEludGVudFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZSQuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgIGZpbHRlcihzdHJpcGUgPT4gQm9vbGVhbihzdHJpcGUpKSxcbiAgICAgIHN3aXRjaE1hcChzID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaXBlID0gcyBhcyBTdHJpcGVKUztcblxuICAgICAgICByZXR1cm4gZnJvbShzdHJpcGUuaGFuZGxlQ2FyZEFjdGlvbihhIGFzIHN0cmluZykpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGNvbmZpcm1QYXltZW50SW50ZW50KFxuICAgIGE6IHN0cmluZyxcbiAgICBiPzogQ29uZmlybVBheW1lbnRJbnRlbnRPcHRpb25zXG4gICk6IE9ic2VydmFibGU8UGF5bWVudEludGVudFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZSQuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgIGZpbHRlcihzdHJpcGUgPT4gQm9vbGVhbihzdHJpcGUpKSxcbiAgICAgIHN3aXRjaE1hcChzID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaXBlID0gcyBhcyBTdHJpcGVKUztcblxuICAgICAgICByZXR1cm4gZnJvbShcbiAgICAgICAgICBzdHJpcGUuY29uZmlybVBheW1lbnRJbnRlbnQoXG4gICAgICAgICAgICBhIGFzIHN0cmluZyxcbiAgICAgICAgICAgIGIgYXMgQ29uZmlybVBheW1lbnRJbnRlbnRPcHRpb25zIHwgdW5kZWZpbmVkXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZVBheW1lbnRNZXRob2QoXG4gICAgYTogc3RyaW5nLFxuICAgIGI6IEVsZW1lbnQsXG4gICAgYz86IFBheW1lbnRNZXRob2REYXRhIHwgdW5kZWZpbmVkXG4gICk6IE9ic2VydmFibGU8UGF5bWVudE1ldGhvZFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZSQuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgIGZpbHRlcihzdHJpcGUgPT4gQm9vbGVhbihzdHJpcGUpKSxcbiAgICAgIHN3aXRjaE1hcChzID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaXBlID0gcyBhcyBTdHJpcGVKUztcblxuICAgICAgICByZXR1cm4gZnJvbShzdHJpcGUuY3JlYXRlUGF5bWVudE1ldGhvZChhLCBiLCBjKSk7XG4gICAgICB9KSxcbiAgICAgIGZpcnN0KClcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZUNhcmRTZXR1cChcbiAgICBhOiBzdHJpbmcsXG4gICAgYj86IEVsZW1lbnQgfCBzdHJpbmcgfCBQYXltZW50TWV0aG9kRGF0YSxcbiAgICBjPzogUGF5bWVudE1ldGhvZERhdGFcbiAgKTogT2JzZXJ2YWJsZTxDYXJkU2V0dXBSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUkLmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICBmaWx0ZXIoc3RyaXBlID0+IEJvb2xlYW4oc3RyaXBlKSksXG4gICAgICBzd2l0Y2hNYXAocyA9PiB7XG4gICAgICAgIGNvbnN0IHN0cmlwZSA9IHMgYXMgU3RyaXBlSlM7XG5cbiAgICAgICAgaWYgKGlzUGF5bWVudE1ldGhvZERhdGEoYykpIHtcbiAgICAgICAgICByZXR1cm4gZnJvbShcbiAgICAgICAgICAgIHN0cmlwZS5oYW5kbGVDYXJkU2V0dXAoXG4gICAgICAgICAgICAgIGEsXG4gICAgICAgICAgICAgIGIgYXMgRWxlbWVudCxcbiAgICAgICAgICAgICAgYyBhcyBQYXltZW50TWV0aG9kRGF0YSB8IHVuZGVmaW5lZFxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnJvbShcbiAgICAgICAgICBzdHJpcGUuaGFuZGxlQ2FyZFNldHVwKFxuICAgICAgICAgICAgYSxcbiAgICAgICAgICAgIGIgYXMgc3RyaW5nIHwgUGF5bWVudE1ldGhvZERhdGEgfCB1bmRlZmluZWRcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==