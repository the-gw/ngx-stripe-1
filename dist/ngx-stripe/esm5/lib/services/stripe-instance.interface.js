/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/stripe-instance.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function StripeServiceInterface() { }
if (false) {
    /**
     * @return {?}
     */
    StripeServiceInterface.prototype.getInstance = function () { };
    /**
     * @param {?=} options
     * @return {?}
     */
    StripeServiceInterface.prototype.elements = function (options) { };
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    StripeServiceInterface.prototype.createToken = function (a, b) { };
    /**
     * @param {?} a
     * @param {?=} b
     * @return {?}
     */
    StripeServiceInterface.prototype.createSource = function (a, b) { };
    /**
     * @param {?} source
     * @return {?}
     */
    StripeServiceInterface.prototype.retrieveSource = function (source) { };
    /**
     * @param {?} options
     * @return {?}
     */
    StripeServiceInterface.prototype.paymentRequest = function (options) { };
    /**
     * @param {?} a
     * @return {?}
     */
    StripeServiceInterface.prototype.handleCardAction = function (a) { };
    /**
     * @param {?} a
     * @param {?=} b
     * @param {?=} c
     * @return {?}
     */
    StripeServiceInterface.prototype.handleCardPayment = function (a, b, c) { };
    /**
     * @param {?} a
     * @param {?=} b
     * @return {?}
     */
    StripeServiceInterface.prototype.confirmPaymentIntent = function (a, b) { };
    /**
     * @param {?} a
     * @param {?} b
     * @param {?=} c
     * @return {?}
     */
    StripeServiceInterface.prototype.createPaymentMethod = function (a, b, c) { };
    /**
     * @param {?} a
     * @param {?=} b
     * @param {?=} c
     * @return {?}
     */
    StripeServiceInterface.prototype.handleCardSetup = function (a, b, c) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaXBlLWluc3RhbmNlLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zdHJpcGUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc3RyaXBlLWluc3RhbmNlLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQXdCQSw0Q0FpQ0M7Ozs7O0lBaENDLCtEQUFvQzs7Ozs7SUFDcEMsbUVBQTBEOzs7Ozs7SUFDMUQsbUVBRzJCOzs7Ozs7SUFDM0Isb0VBRzRCOzs7OztJQUM1Qix3RUFBK0Q7Ozs7O0lBQy9ELHlFQUFvRDs7Ozs7SUFDcEQscUVBQTZEOzs7Ozs7O0lBQzdELDRFQUltQzs7Ozs7O0lBQ25DLDRFQUdtQzs7Ozs7OztJQUNuQyw4RUFJbUM7Ozs7Ozs7SUFDbkMsMEVBSStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9lbGVtZW50JztcbmltcG9ydCB7IEVsZW1lbnRzT3B0aW9ucywgRWxlbWVudHMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2VsZW1lbnRzJztcbmltcG9ydCB7XG4gIEJhbmtBY2NvdW50LFxuICBQaWksXG4gIENhcmREYXRhT3B0aW9ucyxcbiAgQmFua0FjY291bnREYXRhLFxuICBQaWlEYXRhLFxuICBUb2tlblJlc3VsdFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL3Rva2VuJztcbmltcG9ydCB7IFNvdXJjZURhdGEsIFNvdXJjZVJlc3VsdCwgU291cmNlUGFyYW1zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zb3VyY2VzJztcbmltcG9ydCB7IFBheW1lbnRSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGF5bWVudC1yZXF1ZXN0JztcbmltcG9ydCB7XG4gIEhhbmRsZUNhcmRQYXltZW50T3B0aW9ucyxcbiAgUGF5bWVudEludGVudFJlc3VsdCxcbiAgQ29uZmlybVBheW1lbnRJbnRlbnRPcHRpb25zLFxuICBQYXltZW50TWV0aG9kRGF0YSxcbiAgUGF5bWVudE1ldGhvZFJlc3VsdFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL3BheW1lbnQtaW50ZW50JztcbmltcG9ydCB7IFN0cmlwZUpTIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zdHJpcGUnO1xuaW1wb3J0IHsgQ2FyZFNldHVwUmVzdWx0IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9jYXJkLXNldHVwJztcblxuZXhwb3J0IGludGVyZmFjZSBTdHJpcGVTZXJ2aWNlSW50ZXJmYWNlIHtcbiAgZ2V0SW5zdGFuY2UoKTogU3RyaXBlSlMgfCB1bmRlZmluZWQ7XG4gIGVsZW1lbnRzKG9wdGlvbnM/OiBFbGVtZW50c09wdGlvbnMpOiBPYnNlcnZhYmxlPEVsZW1lbnRzPjtcbiAgY3JlYXRlVG9rZW4oXG4gICAgYTogRWxlbWVudCB8IEJhbmtBY2NvdW50IHwgUGlpLFxuICAgIGI6IENhcmREYXRhT3B0aW9ucyB8IEJhbmtBY2NvdW50RGF0YSB8IFBpaURhdGEgfCB1bmRlZmluZWRcbiAgKTogT2JzZXJ2YWJsZTxUb2tlblJlc3VsdD47XG4gIGNyZWF0ZVNvdXJjZShcbiAgICBhOiBFbGVtZW50IHwgU291cmNlRGF0YSxcbiAgICBiPzogU291cmNlRGF0YSB8IHVuZGVmaW5lZFxuICApOiBPYnNlcnZhYmxlPFNvdXJjZVJlc3VsdD47XG4gIHJldHJpZXZlU291cmNlKHNvdXJjZTogU291cmNlUGFyYW1zKTogT2JzZXJ2YWJsZTxTb3VyY2VSZXN1bHQ+O1xuICBwYXltZW50UmVxdWVzdChvcHRpb25zOiBQYXltZW50UmVxdWVzdE9wdGlvbnMpOiBhbnk7XG4gIGhhbmRsZUNhcmRBY3Rpb24oYTogc3RyaW5nKTogT2JzZXJ2YWJsZTxQYXltZW50SW50ZW50UmVzdWx0PjtcbiAgaGFuZGxlQ2FyZFBheW1lbnQoXG4gICAgYTogc3RyaW5nLFxuICAgIGI/OiBFbGVtZW50IHwgSGFuZGxlQ2FyZFBheW1lbnRPcHRpb25zLFxuICAgIGM/OiBIYW5kbGVDYXJkUGF5bWVudE9wdGlvbnMgfCB1bmRlZmluZWRcbiAgKTogT2JzZXJ2YWJsZTxQYXltZW50SW50ZW50UmVzdWx0PjtcbiAgY29uZmlybVBheW1lbnRJbnRlbnQoXG4gICAgYTogc3RyaW5nLFxuICAgIGI/OiBDb25maXJtUGF5bWVudEludGVudE9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxQYXltZW50SW50ZW50UmVzdWx0PjtcbiAgY3JlYXRlUGF5bWVudE1ldGhvZChcbiAgICBhOiBzdHJpbmcsXG4gICAgYjogRWxlbWVudCxcbiAgICBjPzogUGF5bWVudE1ldGhvZERhdGFcbiAgKTogT2JzZXJ2YWJsZTxQYXltZW50TWV0aG9kUmVzdWx0PjtcbiAgaGFuZGxlQ2FyZFNldHVwKFxuICAgIGE6IHN0cmluZyxcbiAgICBiPzogRWxlbWVudCB8IHN0cmluZyB8IFBheW1lbnRNZXRob2REYXRhLFxuICAgIGM/OiBQYXltZW50TWV0aG9kRGF0YVxuICApOiBPYnNlcnZhYmxlPENhcmRTZXR1cFJlc3VsdD47XG59XG4iXX0=