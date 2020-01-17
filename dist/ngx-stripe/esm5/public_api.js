/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Public API Surface of ngx-stripe
 */
export { NgxStripeModule } from './lib/ngx-stripe.module';
export { StripeCardComponent } from './lib/components/stripe-card.component';
export { StripeService } from './lib/services/stripe.service';
export { StripeFactoryService } from './lib/services/stripe-factory.service';
export { StripeInstance } from './lib/services/stripe-instance.class';
export { LazyStripeAPILoader } from './lib/services/api-loader.service';
export { WindowRef } from './lib/services/window-ref.service';
export { DocumentRef } from './lib/services/document-ref.service';
export { isSourceData } from './lib/interfaces/sources';
export { STRIPE_PUBLISHABLE_KEY, STRIPE_OPTIONS } from './lib/interfaces/stripe';
export { isBankAccount, isBankAccountData, isPii, isPiiData } from './lib/interfaces/token';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zdHJpcGUvIiwic291cmNlcyI6WyJwdWJsaWNfYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRTdFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFJdEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFeEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQWdCbEUsT0FBTyxFQU1MLFlBQVksRUFFYixNQUFNLDBCQUEwQixDQUFDO0FBRWxDLE9BQU8sRUFDTCxzQkFBc0IsRUFDdEIsY0FBYyxFQUdmLE1BQU0seUJBQXlCLENBQUM7QUFFakMsT0FBTyxFQVdMLGFBQWEsRUFDYixpQkFBaUIsRUFDakIsS0FBSyxFQUNMLFNBQVMsRUFDVixNQUFNLHdCQUF3QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFB1YmxpYyBBUEkgU3VyZmFjZSBvZiBuZ3gtc3RyaXBlXG4gKi9cblxuZXhwb3J0IHsgTmd4U3RyaXBlTW9kdWxlIH0gZnJvbSAnLi9saWIvbmd4LXN0cmlwZS5tb2R1bGUnO1xuXG5leHBvcnQgeyBTdHJpcGVDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9saWIvY29tcG9uZW50cy9zdHJpcGUtY2FyZC5jb21wb25lbnQnO1xuXG5leHBvcnQgeyBTdHJpcGVTZXJ2aWNlIH0gZnJvbSAnLi9saWIvc2VydmljZXMvc3RyaXBlLnNlcnZpY2UnO1xuZXhwb3J0IHsgU3RyaXBlRmFjdG9yeVNlcnZpY2UgfSBmcm9tICcuL2xpYi9zZXJ2aWNlcy9zdHJpcGUtZmFjdG9yeS5zZXJ2aWNlJztcbmV4cG9ydCB7IFN0cmlwZUluc3RhbmNlIH0gZnJvbSAnLi9saWIvc2VydmljZXMvc3RyaXBlLWluc3RhbmNlLmNsYXNzJztcbmV4cG9ydCB7XG4gIFN0cmlwZVNlcnZpY2VJbnRlcmZhY2Vcbn0gZnJvbSAnLi9saWIvc2VydmljZXMvc3RyaXBlLWluc3RhbmNlLmludGVyZmFjZSc7XG5leHBvcnQgeyBMYXp5U3RyaXBlQVBJTG9hZGVyIH0gZnJvbSAnLi9saWIvc2VydmljZXMvYXBpLWxvYWRlci5zZXJ2aWNlJztcblxuZXhwb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi9saWIvc2VydmljZXMvd2luZG93LXJlZi5zZXJ2aWNlJztcbmV4cG9ydCB7IERvY3VtZW50UmVmIH0gZnJvbSAnLi9saWIvc2VydmljZXMvZG9jdW1lbnQtcmVmLnNlcnZpY2UnO1xuXG5leHBvcnQge1xuICBFbGVtZW50LFxuICBFbGVtZW50RXZlbnRUeXBlLFxuICBFbGVtZW50VHlwZSxcbiAgRWxlbWVudE9wdGlvbnMsXG4gIEVsZW1lbnRTdHlsZUF0dHJpYnV0ZXNcbn0gZnJvbSAnLi9saWIvaW50ZXJmYWNlcy9lbGVtZW50JztcblxuZXhwb3J0IHtcbiAgRWxlbWVudHMsXG4gIEVsZW1lbnRzT3B0aW9ucyxcbiAgRm9udEVsZW1lbnRcbn0gZnJvbSAnLi9saWIvaW50ZXJmYWNlcy9lbGVtZW50cyc7XG5cbmV4cG9ydCB7XG4gIFNvdXJjZSxcbiAgVXNhZ2VUeXBlcyxcbiAgRmxvd1R5cGVzLFxuICBTb3VyY2VQYXJhbXMsXG4gIFNvdXJjZURhdGEsXG4gIGlzU291cmNlRGF0YSxcbiAgU291cmNlUmVzdWx0XG59IGZyb20gJy4vbGliL2ludGVyZmFjZXMvc291cmNlcyc7XG5cbmV4cG9ydCB7XG4gIFNUUklQRV9QVUJMSVNIQUJMRV9LRVksXG4gIFNUUklQRV9PUFRJT05TLFxuICBTdHJpcGVKUyxcbiAgT3B0aW9uc1xufSBmcm9tICcuL2xpYi9pbnRlcmZhY2VzL3N0cmlwZSc7XG5cbmV4cG9ydCB7XG4gIFRva2VuLFxuICBGaWVsZENoZWNrLFxuICBDYXJkRGF0YU9wdGlvbnMsXG4gIFRva2VuUmVzdWx0LFxuICBBY2NvdW50LFxuICBBY2NvdW50RGF0YSxcbiAgQmFua0FjY291bnQsXG4gIEJhbmtBY2NvdW50RGF0YSxcbiAgUGlpLFxuICBQaWlEYXRhLFxuICBpc0JhbmtBY2NvdW50LFxuICBpc0JhbmtBY2NvdW50RGF0YSxcbiAgaXNQaWksXG4gIGlzUGlpRGF0YVxufSBmcm9tICcuL2xpYi9pbnRlcmZhY2VzL3Rva2VuJztcblxuZXhwb3J0IHtcbiAgSGFuZGxlQ2FyZFBheW1lbnRPcHRpb25zLFxuICBDb25maXJtUGF5bWVudEludGVudE9wdGlvbnMsXG4gIFBheW1lbnRJbnRlbnQsXG4gIFBheW1lbnRJbnRlbnRSZXN1bHRcbn0gZnJvbSAnLi9saWIvaW50ZXJmYWNlcy9wYXltZW50LWludGVudCc7XG5cbmV4cG9ydCB7XG4gIFNldHVwSW50ZW50LFxuICBDYXJkU2V0dXBSZXN1bHRcbn0gZnJvbSAnLi9saWIvaW50ZXJmYWNlcy9jYXJkLXNldHVwJztcblxuZXhwb3J0IHsgRXJyb3IsIEFkZHJlc3MgfSBmcm9tICcuL2xpYi9pbnRlcmZhY2VzL3V0aWxzJztcbiJdfQ==