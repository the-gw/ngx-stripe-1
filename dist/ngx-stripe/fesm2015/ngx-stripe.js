import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Injectable, Inject, PLATFORM_ID, InjectionToken, Component, Input, ViewChild, EventEmitter, Output, NgModule } from '@angular/core';
import { BehaviorSubject, from, combineLatest } from 'rxjs';
import { filter, first, map, switchMap } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/window-ref.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WindowRef {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        this.platformId = platformId;
    }
    /**
     * @return {?}
     */
    getNativeWindow() {
        if (isPlatformBrowser(this.platformId)) {
            return window;
        }
        return (/** @type {?} */ ({}));
    }
}
WindowRef.decorators = [
    { type: Injectable }
];
/** @nocollapse */
WindowRef.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/document-ref.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DocumentRef {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        this.platformId = platformId;
    }
    /**
     * @return {?}
     */
    getNativeDocument() {
        if (isPlatformBrowser(this.platformId)) {
            return document;
        }
        return (/** @type {?} */ ({}));
    }
}
DocumentRef.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DocumentRef.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/api-loader.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LazyStripeAPILoader {
    /**
     * @param {?} platformId
     * @param {?} window
     * @param {?} document
     */
    constructor(platformId, window, document) {
        this.platformId = platformId;
        this.window = window;
        this.document = document;
        this.status = new BehaviorSubject({
            error: false,
            loaded: false,
            loading: false
        });
    }
    /**
     * @return {?}
     */
    asStream() {
        this.load();
        return this.status.asObservable();
    }
    /**
     * @return {?}
     */
    isReady() {
        return this.status.getValue().loaded;
    }
    /**
     * @return {?}
     */
    load() {
        if (isPlatformServer(this.platformId)) {
            return;
        }
        /** @type {?} */
        const status = this.status.getValue();
        if (this.window.getNativeWindow().hasOwnProperty('Stripe')) {
            this.status.next({
                error: false,
                loaded: true,
                loading: false
            });
        }
        else if (!status.loaded && !status.loading) {
            this.status.next(Object.assign({}, status, { loading: true }));
            /** @type {?} */
            const script = this.document.getNativeDocument().createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.defer = true;
            script.src = 'https://js.stripe.com/v3/';
            script.onload = (/**
             * @return {?}
             */
            () => {
                this.status.next({
                    error: false,
                    loaded: true,
                    loading: false
                });
            });
            script.onerror = (/**
             * @return {?}
             */
            () => {
                this.status.next({
                    error: true,
                    loaded: false,
                    loading: false
                });
            });
            this.document.getNativeDocument().body.appendChild(script);
        }
    }
}
LazyStripeAPILoader.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LazyStripeAPILoader.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: WindowRef },
    { type: DocumentRef }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/stripe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const STRIPE_PUBLISHABLE_KEY = new InjectionToken('Stripe Publishable Key');
/** @type {?} */
const STRIPE_OPTIONS = new InjectionToken('Stripe Options');

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/sources.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} sourceData
 * @return {?}
 */
function isSourceData(sourceData) {
    return 'type' in sourceData;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/token.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} account
 * @return {?}
 */
function isAccount(account) {
    return account === 'account';
}
/**
 * @param {?} accountData
 * @return {?}
 */
function isAccountData(accountData) {
    return accountData.legal_entity || accountData.tos_shown_and_accepted;
}
/**
 * @param {?} account
 * @return {?}
 */
function isBankAccount(account) {
    return account === 'bank_account';
}
/**
 * @param {?} bankAccountData
 * @return {?}
 */
function isBankAccountData(bankAccountData) {
    return ('country' in bankAccountData &&
        'currency' in bankAccountData &&
        'routing_number' in bankAccountData &&
        'account_number' in bankAccountData &&
        (bankAccountData.account_holder_type === 'individual' ||
            bankAccountData.account_holder_type === 'company' ||
            bankAccountData.account_holder_type === undefined));
}
/**
 * @param {?} pii
 * @return {?}
 */
function isPii(pii) {
    return pii === 'pii';
}
/**
 * @param {?} piiData
 * @return {?}
 */
function isPiiData(piiData) {
    return 'personal_id_number' in piiData;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/payment-intent.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} handleCardPaymentOptions
 * @return {?}
 */
function isHandleCardPaymentOptions(handleCardPaymentOptions) {
    return 'type' in handleCardPaymentOptions;
}
/**
 * @param {?} paymentMethodData
 * @return {?}
 */
function isPaymentMethodData(paymentMethodData) {
    return paymentMethodData && 'type' in paymentMethodData;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/stripe-instance.class.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StripeInstance {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/stripe.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StripeService {
    /**
     * @param {?} key
     * @param {?} options
     * @param {?} loader
     * @param {?} window
     */
    constructor(key, options, loader, window) {
        this.key = key;
        this.options = options;
        this.loader = loader;
        this.window = window;
        if (key) {
            this.stripe = new StripeInstance(this.loader, this.window, key, options);
        }
    }
    /**
     * @return {?}
     */
    getStripeReference() {
        return this.loader.asStream().pipe(filter((/**
         * @param {?} status
         * @return {?}
         */
        (status) => status.loaded === true)), map((/**
         * @return {?}
         */
        () => ((/** @type {?} */ (this.window.getNativeWindow()))).Stripe)));
    }
    /**
     * @return {?}
     */
    getInstance() {
        return this.stripe.getInstance();
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    setKey(key, options) {
        return this.changeKey(key, options);
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    changeKey(key, options) {
        this.stripe = new StripeInstance(this.loader, this.window, key, options);
        return this.stripe;
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    elements(options) {
        return this.stripe.elements(options);
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    createToken(a, b) {
        return this.stripe.createToken(a, b);
    }
    /**
     * @param {?} a
     * @param {?=} b
     * @return {?}
     */
    createSource(a, b) {
        return this.stripe.createSource(a, b);
    }
    /**
     * @param {?} source
     * @return {?}
     */
    retrieveSource(source) {
        return this.stripe.retrieveSource(source);
    }
    /**
     * @param {?} options
     * @return {?}
     */
    paymentRequest(options) {
        return this.stripe.paymentRequest(options);
    }
    /**
     * @param {?} a
     * @param {?=} b
     * @param {?=} c
     * @return {?}
     */
    handleCardPayment(a, b, c) {
        return this.stripe.handleCardPayment(a, b, c);
    }
    /**
     * @param {?} a
     * @return {?}
     */
    handleCardAction(a) {
        return this.stripe.handleCardAction(a);
    }
    /**
     * @param {?} a
     * @param {?} b
     * @param {?=} c
     * @return {?}
     */
    createPaymentMethod(a, b, c) {
        return this.stripe.createPaymentMethod(a, b, c);
    }
    /**
     * @param {?} a
     * @param {?=} b
     * @return {?}
     */
    confirmPaymentIntent(a, b) {
        return this.stripe.confirmPaymentIntent(a, b);
    }
    /**
     * @param {?} a
     * @param {?=} b
     * @param {?=} c
     * @return {?}
     */
    handleCardSetup(a, b, c) {
        return this.stripe.handleCardSetup(a, b, c);
    }
}
StripeService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StripeService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [STRIPE_PUBLISHABLE_KEY,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [STRIPE_OPTIONS,] }] },
    { type: LazyStripeAPILoader },
    { type: WindowRef }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/stripe-factory.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StripeFactoryService {
    /**
     * @param {?} baseKey
     * @param {?} baseOptions
     * @param {?} loader
     * @param {?} window
     */
    constructor(baseKey, baseOptions, loader, window) {
        this.baseKey = baseKey;
        this.baseOptions = baseOptions;
        this.loader = loader;
        this.window = window;
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    create(key, options) {
        return new StripeInstance(this.loader, this.window, key, options);
    }
}
StripeFactoryService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StripeFactoryService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [STRIPE_PUBLISHABLE_KEY,] }] },
    { type: String, decorators: [{ type: Inject, args: [STRIPE_OPTIONS,] }] },
    { type: LazyStripeAPILoader },
    { type: WindowRef }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/stripe-card.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StripeCardComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-stripe.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxStripeModule {
    /**
     * @param {?=} publishableKey
     * @param {?=} options
     * @return {?}
     */
    static forRoot(publishableKey, options) {
        return {
            ngModule: NgxStripeModule,
            providers: [
                LazyStripeAPILoader,
                StripeService,
                StripeFactoryService,
                WindowRef,
                DocumentRef,
                {
                    provide: STRIPE_PUBLISHABLE_KEY,
                    useValue: publishableKey
                },
                {
                    provide: STRIPE_OPTIONS,
                    useValue: options
                }
            ]
        };
    }
    /**
     * @param {?=} publishableKey
     * @param {?=} options
     * @return {?}
     */
    static forChild(publishableKey, options) {
        return {
            ngModule: NgxStripeModule,
            providers: [
                LazyStripeAPILoader,
                StripeService,
                StripeFactoryService,
                WindowRef,
                DocumentRef,
                {
                    provide: STRIPE_PUBLISHABLE_KEY,
                    useValue: publishableKey
                },
                {
                    provide: STRIPE_OPTIONS,
                    useValue: options
                }
            ]
        };
    }
}
NgxStripeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StripeCardComponent],
                exports: [StripeCardComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-stripe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxStripeModule, StripeCardComponent, StripeService, StripeFactoryService, StripeInstance, LazyStripeAPILoader, WindowRef, DocumentRef, isSourceData, STRIPE_PUBLISHABLE_KEY, STRIPE_OPTIONS, isBankAccount, isBankAccountData, isPii, isPiiData };

//# sourceMappingURL=ngx-stripe.js.map