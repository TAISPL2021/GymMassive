import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { ExpansionItemComponent } from './nav-bar/expansion-item/expansion-item.component';
import { ExpansionPanelNavComponent } from './nav-bar/expansion-panel-nav/expansion-panel-nav.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
	declarations: [ NavBarComponent, ExpansionPanelNavComponent, ExpansionItemComponent, ImageUploaderComponent ],
	imports: [
		ReactiveFormsModule,
		FormsModule,
		CommonModule,
		MatToolbarModule,
		MatIconModule,
		MatMenuModule,
		MatButtonModule,
		MatExpansionModule,
		MatListModule,
		MatInputModule,
		MatFormFieldModule,
		MatIconModule,
		RouterModule,
		MatSidenavModule
	],
	exports: [ ImageUploaderComponent, NavBarComponent, ExpansionPanelNavComponent, ExpansionItemComponent ]
})
export class ShareModule {}
