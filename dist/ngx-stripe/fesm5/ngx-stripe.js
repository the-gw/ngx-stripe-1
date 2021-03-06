import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { __read, __assign } from 'tslib';
import { Injectable, Inject, PLATFORM_ID, InjectionToken, Component, Input, ViewChild, EventEmitter, Output, NgModule } from '@angular/core';
import { BehaviorSubject, from, combineLatest } from 'rxjs';
import { filter, first, map, switchMap } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/window-ref.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WindowRef = /** @class */ (function () {
    function WindowRef(platformId) {
        this.platformId = platformId;
    }
    /**
     * @return {?}
     */
    WindowRef.prototype.getNativeWindow = /**
     * @return {?}
     */
    function () {
        if (isPlatformBrowser(this.platformId)) {
            return window;
        }
        return (/** @type {?} */ ({}));
    };
    WindowRef.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    WindowRef.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    return WindowRef;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/document-ref.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DocumentRef = /** @class */ (function () {
    function DocumentRef(platformId) {
        this.platformId = platformId;
    }
    /**
     * @return {?}
     */
    DocumentRef.prototype.getNativeDocument = /**
     * @return {?}
     */
    function () {
        if (isPlatformBrowser(this.platformId)) {
            return document;
        }
        return (/** @type {?} */ ({}));
    };
    DocumentRef.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DocumentRef.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    return DocumentRef;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/api-loader.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LazyStripeAPILoader = /** @class */ (function () {
    function LazyStripeAPILoader(platformId, window, document) {
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
    LazyStripeAPILoader.prototype.asStream = /**
     * @return {?}
     */
    function () {
        this.load();
        return this.status.asObservable();
    };
    /**
     * @return {?}
     */
    LazyStripeAPILoader.prototype.isReady = /**
     * @return {?}
     */
    function () {
        return this.status.getValue().loaded;
    };
    /**
     * @return {?}
     */
    LazyStripeAPILoader.prototype.load = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (isPlatformServer(this.platformId)) {
            return;
        }
        /** @type {?} */
        var status = this.status.getValue();
        if (this.window.getNativeWindow().hasOwnProperty('Stripe')) {
            this.status.next({
                error: false,
                loaded: true,
                loading: false
            });
        }
        else if (!status.loaded && !status.loading) {
            this.status.next(__assign({}, status, { loading: true }));
            /** @type {?} */
            var script = this.document.getNativeDocument().createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.defer = true;
            script.src = 'https://js.stripe.com/v3/';
            script.onload = (/**
             * @return {?}
             */
            function () {
                _this.status.next({
                    error: false,
                    loaded: true,
                    loading: false
                });
            });
            script.onerror = (/**
             * @return {?}
             */
            function () {
                _this.status.next({
                    error: true,
                    loaded: false,
                    loading: false
                });
            });
            this.document.getNativeDocument().body.appendChild(script);
        }
    };
    LazyStripeAPILoader.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LazyStripeAPILoader.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: WindowRef },
        { type: DocumentRef }
    ]; };
    return LazyStripeAPILoader;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/stripe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var STRIPE_PUBLISHABLE_KEY = new InjectionToken('Stripe Publishable Key');
/** @type {?} */
var STRIPE_OPTIONS = new InjectionToken('Stripe Options');

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
var StripeInstance = /** @class */ (function () {
    function StripeInstance(loader, window, key, options) {
        var _this = this;
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
        function (status) { return status.loaded === true; })), first(), map((/**
         * @return {?}
         */
        function () { return ((/** @type {?} */ (_this.window.getNativeWindow()))).Stripe; })))
            .subscribe((/**
         * @param {?} Stripe
         * @return {?}
         */
        function (Stripe) {
            /** @type {?} */
            var stripe = _this.options
                ? ((/** @type {?} */ (Stripe(_this.key, _this.options))))
                : ((/** @type {?} */ (Stripe(_this.key))));
            _this.stripe$.next(stripe);
        }));
    }
    /**
     * @return {?}
     */
    StripeInstance.prototype.getInstance = /**
     * @return {?}
     */
    function () {
        return this.stripe$.getValue();
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    StripeInstance.prototype.elements = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return this.stripe$.asObservable().pipe(filter((/**
         * @param {?} stripe
         * @return {?}
         */
        function (stripe) { return Boolean(stripe); })), map((/**
         * @param {?} stripe
         * @return {?}
         */
        function (stripe) { return ((/** @type {?} */ (stripe))).elements(options); })), first());
    };
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    StripeInstance.prototype.createToken = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        return this.stripe$.asObservable().pipe(filter((/**
         * @param {?} stripe
         * @return {?}
         */
        function (stripe) { return Boolean(stripe); })), switchMap((/**
         * @param {?} s
         * @return {?}
         */
        function (s) {
            /** @type {?} */
            var stripe = (/** @type {?} */ (s));
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
    };
    /**
     * @param {?} a
     * @param {?=} b
     * @return {?}
     */
    StripeInstance.prototype.createSource = /**
     * @param {?} a
     * @param {?=} b
     * @return {?}
     */
    function (a, b) {
        return this.stripe$.asObservable().pipe(filter((/**
         * @param {?} stripe
         * @return {?}
         */
        function (stripe) { return Boolean(stripe); })), switchMap((/**
         * @param {?} s
         * @return {?}
         */
        function (s) {
            /** @type {?} */
            var stripe = (/** @type {?} */ (s));
            if (isSourceData(a)) {
                return from(stripe.createSource((/** @type {?} */ (a))));
            }
            return from(stripe.createSource((/** @type {?} */ (a)), b));
        })), first());
    };
    /**
     * @param {?} source
     * @return {?}
     */
    StripeInstance.prototype.retrieveSource = /**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        return this.stripe$.asObservable().pipe(filter((/**
         * @param {?} stripe
         * @return {?}
         */
        function (stripe) { return Boolean(stripe); })), switchMap((/**
         * @param {?} s
         * @return {?}
         */
        function (s) {
            /** @type {?} */
            var stripe = (/** @type {?} */ (s));
            return from(stripe.retrieveSource(source));
        })), first());
    };
    /**
     * @param {?} options
     * @return {?}
     */
    StripeInstance.prototype.paymentRequest = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var stripe = this.getInstance();
        if (stripe) {
            return stripe.paymentRequest(options);
        }
        return undefined;
    };
    /**
     * @param {?} a
     * @param {?} b
     * @param {?=} c
     * @return {?}
     */
    StripeInstance.prototype.handleCardPayment = /**
     * @param {?} a
     * @param {?} b
     * @param {?=} c
     * @return {?}
     */
    function (a, b, c) {
        return this.stripe$.asObservable().pipe(filter((/**
         * @param {?} stripe
         * @return {?}
         */
        function (stripe) { return Boolean(stripe); })), switchMap((/**
         * @param {?} s
         * @return {?}
         */
        function (s) {
            /** @type {?} */
            var stripe = (/** @type {?} */ (s));
            if (isHandleCardPaymentOptions(b)) {
                return from(stripe.handleCardPayment((/** @type {?} */ (a)), (/** @type {?} */ (b))));
            }
            return from(stripe.handleCardPayment((/** @type {?} */ (a)), (/** @type {?} */ (b)), (/** @type {?} */ (c))));
        })));
    };
    /**
     * @param {?} a
     * @return {?}
     */
    StripeInstance.prototype.handleCardAction = /**
     * @param {?} a
     * @return {?}
     */
    function (a) {
        return this.stripe$.asObservable().pipe(filter((/**
         * @param {?} stripe
         * @return {?}
         */
        function (stripe) { return Boolean(stripe); })), switchMap((/**
         * @param {?} s
         * @return {?}
         */
        function (s) {
            /** @type {?} */
            var stripe = (/** @type {?} */ (s));
            return from(stripe.handleCardAction((/** @type {?} */ (a))));
        })));
    };
    /**
     * @param {?} a
     * @param {?=} b
     * @return {?}
     */
    StripeInstance.prototype.confirmPaymentIntent = /**
     * @param {?} a
     * @param {?=} b
     * @return {?}
     */
    function (a, b) {
        return this.stripe$.asObservable().pipe(filter((/**
         * @param {?} stripe
         * @return {?}
         */
        function (stripe) { return Boolean(stripe); })), switchMap((/**
         * @param {?} s
         * @return {?}
         */
        function (s) {
            /** @type {?} */
            var stripe = (/** @type {?} */ (s));
            return from(stripe.confirmPaymentIntent((/** @type {?} */ (a)), (/** @type {?} */ (b))));
        })));
    };
    /**
     * @param {?} a
     * @param {?} b
     * @param {?=} c
     * @return {?}
     */
    StripeInstance.prototype.createPaymentMethod = /**
     * @param {?} a
     * @param {?} b
     * @param {?=} c
     * @return {?}
     */
    function (a, b, c) {
        return this.stripe$.asObservable().pipe(filter((/**
         * @param {?} stripe
         * @return {?}
         */
        function (stripe) { return Boolean(stripe); })), switchMap((/**
         * @param {?} s
         * @return {?}
         */
        function (s) {
            /** @type {?} */
            var stripe = (/** @type {?} */ (s));
            return from(stripe.createPaymentMethod(a, b, c));
        })), first());
    };
    /**
     * @param {?} a
     * @param {?=} b
     * @param {?=} c
     * @return {?}
     */
    StripeInstance.prototype.handleCardSetup = /**
     * @param {?} a
     * @param {?=} b
     * @param {?=} c
     * @return {?}
     */
    function (a, b, c) {
        return this.stripe$.asObservable().pipe(filter((/**
         * @param {?} stripe
         * @return {?}
         */
        function (stripe) { return Boolean(stripe); })), switchMap((/**
         * @param {?} s
         * @return {?}
         */
        function (s) {
            /** @type {?} */
            var stripe = (/** @type {?} */ (s));
            if (isPaymentMethodData(c)) {
                return from(stripe.handleCardSetup(a, (/** @type {?} */ (b)), (/** @type {?} */ (c))));
            }
            return from(stripe.handleCardSetup(a, (/** @type {?} */ (b))));
        })));
    };
    return StripeInstance;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/stripe.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StripeService = /** @class */ (function () {
    function StripeService(key, options, loader, window) {
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
    StripeService.prototype.getStripeReference = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.loader.asStream().pipe(filter((/**
         * @param {?} status
         * @return {?}
         */
        function (status) { return status.loaded === true; })), map((/**
         * @return {?}
         */
        function () { return ((/** @type {?} */ (_this.window.getNativeWindow()))).Stripe; })));
    };
    /**
     * @return {?}
     */
    StripeService.prototype.getInstance = /**
     * @return {?}
     */
    function () {
        return this.stripe.getInstance();
    };
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    StripeService.prototype.setKey = /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    function (key, options) {
        return this.changeKey(key, options);
    };
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    StripeService.prototype.changeKey = /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    function (key, options) {
        this.stripe = new StripeInstance(this.loader, this.window, key, options);
        return this.stripe;
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    StripeService.prototype.elements = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return this.stripe.elements(options);
    };
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    StripeService.prototype.createToken = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        return this.stripe.createToken(a, b);
    };
    /**
     * @param {?} a
     * @param {?=} b
     * @return {?}
     */
    StripeService.prototype.createSource = /**
     * @param {?} a
     * @param {?=} b
     * @return {?}
     */
    function (a, b) {
        return this.stripe.createSource(a, b);
    };
    /**
     * @param {?} source
     * @return {?}
     */
    StripeService.prototype.retrieveSource = /**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        return this.stripe.retrieveSource(source);
    };
    /**
     * @param {?} options
     * @return {?}
     */
    StripeService.prototype.paymentRequest = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return this.stripe.paymentRequest(options);
    };
    /**
     * @param {?} a
     * @param {?=} b
     * @param {?=} c
     * @return {?}
     */
    StripeService.prototype.handleCardPayment = /**
     * @param {?} a
     * @param {?=} b
     * @param {?=} c
     * @return {?}
     */
    function (a, b, c) {
        return this.stripe.handleCardPayment(a, b, c);
    };
    /**
     * @param {?} a
     * @return {?}
     */
    StripeService.prototype.handleCardAction = /**
     * @param {?} a
     * @return {?}
     */
    function (a) {
        return this.stripe.handleCardAction(a);
    };
    /**
     * @param {?} a
     * @param {?} b
     * @param {?=} c
     * @return {?}
     */
    StripeService.prototype.createPaymentMethod = /**
     * @param {?} a
     * @param {?} b
     * @param {?=} c
     * @return {?}
     */
    function (a, b, c) {
        return this.stripe.createPaymentMethod(a, b, c);
    };
    /**
     * @param {?} a
     * @param {?=} b
     * @return {?}
     */
    StripeService.prototype.confirmPaymentIntent = /**
     * @param {?} a
     * @param {?=} b
     * @return {?}
     */
    function (a, b) {
        return this.stripe.confirmPaymentIntent(a, b);
    };
    /**
     * @param {?} a
     * @param {?=} b
     * @param {?=} c
     * @return {?}
     */
    StripeService.prototype.handleCardSetup = /**
     * @param {?} a
     * @param {?=} b
     * @param {?=} c
     * @return {?}
     */
    function (a, b, c) {
        return this.stripe.handleCardSetup(a, b, c);
    };
    StripeService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StripeService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [STRIPE_PUBLISHABLE_KEY,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [STRIPE_OPTIONS,] }] },
        { type: LazyStripeAPILoader },
        { type: WindowRef }
    ]; };
    return StripeService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/stripe-factory.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StripeFactoryService = /** @class */ (function () {
    function StripeFactoryService(baseKey, baseOptions, loader, window) {
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
    StripeFactoryService.prototype.create = /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    function (key, options) {
        return new StripeInstance(this.loader, this.window, key, options);
    };
    StripeFactoryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StripeFactoryService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [STRIPE_PUBLISHABLE_KEY,] }] },
        { type: String, decorators: [{ type: Inject, args: [STRIPE_OPTIONS,] }] },
        { type: LazyStripeAPILoader },
        { type: WindowRef }
    ]; };
    return StripeFactoryService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/stripe-card.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            var _b = __read(_a, 2), options = _b[0], stripe = _b[1];
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
            var _b = __read(_a, 2), elements = _b[0], options = _b[1];
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-stripe.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxStripeModule = /** @class */ (function () {
    function NgxStripeModule() {
    }
    /**
     * @param {?=} publishableKey
     * @param {?=} options
     * @return {?}
     */
    NgxStripeModule.forRoot = /**
     * @param {?=} publishableKey
     * @param {?=} options
     * @return {?}
     */
    function (publishableKey, options) {
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
    };
    /**
     * @param {?=} publishableKey
     * @param {?=} options
     * @return {?}
     */
    NgxStripeModule.forChild = /**
     * @param {?=} publishableKey
     * @param {?=} options
     * @return {?}
     */
    function (publishableKey, options) {
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
    };
    NgxStripeModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [StripeCardComponent],
                    exports: [StripeCardComponent]
                },] }
    ];
    return NgxStripeModule;
}());

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