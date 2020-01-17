/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-stripe.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { LazyStripeAPILoader } from './services/api-loader.service';
import { StripeService } from './services/stripe.service';
import { StripeFactoryService } from './services/stripe-factory.service';
import { WindowRef } from './services/window-ref.service';
import { DocumentRef } from './services/document-ref.service';
import { STRIPE_OPTIONS, STRIPE_PUBLISHABLE_KEY } from './interfaces/stripe';
import { StripeCardComponent } from './components/stripe-card.component';
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
export { NgxStripeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXN0cmlwZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc3RyaXBlLyIsInNvdXJjZXMiOlsibGliL25neC1zdHJpcGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFOUQsT0FBTyxFQUVMLGNBQWMsRUFDZCxzQkFBc0IsRUFDdkIsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUV6RTtJQUFBO0lBb0RBLENBQUM7Ozs7OztJQS9DZSx1QkFBTzs7Ozs7SUFBckIsVUFDRSxjQUF1QixFQUN2QixPQUFpQjtRQUVqQixPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFO2dCQUNULG1CQUFtQjtnQkFDbkIsYUFBYTtnQkFDYixvQkFBb0I7Z0JBQ3BCLFNBQVM7Z0JBQ1QsV0FBVztnQkFDWDtvQkFDRSxPQUFPLEVBQUUsc0JBQXNCO29CQUMvQixRQUFRLEVBQUUsY0FBYztpQkFDekI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLFFBQVEsRUFBRSxPQUFPO2lCQUNsQjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVhLHdCQUFROzs7OztJQUF0QixVQUNFLGNBQXVCLEVBQ3ZCLE9BQWlCO1FBRWpCLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1QsbUJBQW1CO2dCQUNuQixhQUFhO2dCQUNiLG9CQUFvQjtnQkFDcEIsU0FBUztnQkFDVCxXQUFXO2dCQUNYO29CQUNFLE9BQU8sRUFBRSxzQkFBc0I7b0JBQy9CLFFBQVEsRUFBRSxjQUFjO2lCQUN6QjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsY0FBYztvQkFDdkIsUUFBUSxFQUFFLE9BQU87aUJBQ2xCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBbkRGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztvQkFDbkMsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7aUJBQy9COztJQWlERCxzQkFBQztDQUFBLEFBcERELElBb0RDO1NBaERZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMYXp5U3RyaXBlQVBJTG9hZGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9hcGktbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RyaXBlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc3RyaXBlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RyaXBlRmFjdG9yeVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3N0cmlwZS1mYWN0b3J5LnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuL3NlcnZpY2VzL3dpbmRvdy1yZWYuc2VydmljZSc7XG5pbXBvcnQgeyBEb2N1bWVudFJlZiB9IGZyb20gJy4vc2VydmljZXMvZG9jdW1lbnQtcmVmLnNlcnZpY2UnO1xuXG5pbXBvcnQge1xuICBPcHRpb25zLFxuICBTVFJJUEVfT1BUSU9OUyxcbiAgU1RSSVBFX1BVQkxJU0hBQkxFX0tFWVxufSBmcm9tICcuL2ludGVyZmFjZXMvc3RyaXBlJztcbmltcG9ydCB7IFN0cmlwZUNhcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RyaXBlLWNhcmQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU3RyaXBlQ2FyZENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTdHJpcGVDYXJkQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hTdHJpcGVNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoXG4gICAgcHVibGlzaGFibGVLZXk/OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IE9wdGlvbnNcbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hTdHJpcGVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgTGF6eVN0cmlwZUFQSUxvYWRlcixcbiAgICAgICAgU3RyaXBlU2VydmljZSxcbiAgICAgICAgU3RyaXBlRmFjdG9yeVNlcnZpY2UsXG4gICAgICAgIFdpbmRvd1JlZixcbiAgICAgICAgRG9jdW1lbnRSZWYsXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBTVFJJUEVfUFVCTElTSEFCTEVfS0VZLFxuICAgICAgICAgIHVzZVZhbHVlOiBwdWJsaXNoYWJsZUtleVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogU1RSSVBFX09QVElPTlMsXG4gICAgICAgICAgdXNlVmFsdWU6IG9wdGlvbnNcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGZvckNoaWxkKFxuICAgIHB1Ymxpc2hhYmxlS2V5Pzogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiBPcHRpb25zXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmd4U3RyaXBlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIExhenlTdHJpcGVBUElMb2FkZXIsXG4gICAgICAgIFN0cmlwZVNlcnZpY2UsXG4gICAgICAgIFN0cmlwZUZhY3RvcnlTZXJ2aWNlLFxuICAgICAgICBXaW5kb3dSZWYsXG4gICAgICAgIERvY3VtZW50UmVmLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogU1RSSVBFX1BVQkxJU0hBQkxFX0tFWSxcbiAgICAgICAgICB1c2VWYWx1ZTogcHVibGlzaGFibGVLZXlcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFNUUklQRV9PUFRJT05TLFxuICAgICAgICAgIHVzZVZhbHVlOiBvcHRpb25zXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=