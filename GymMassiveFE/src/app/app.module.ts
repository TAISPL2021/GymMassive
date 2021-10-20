import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { Services } from './services/services.service';
import { CoreModule } from './interceptors/core.module';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [AppComponent],
	imports:
		[
			CoreModule,
			FormsModule,
			HttpClientModule,
			MatNativeDateModule,
			BrowserModule,
			AppRoutingModule,
			BrowserAnimationsModule
		],
	providers: [
		Services
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
