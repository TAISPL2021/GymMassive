import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import { ResponseInterceptorService } from './response-interceptor.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ResponseInterceptorService,
            multi: true,
        }
    ]
})
export class CoreModule { }