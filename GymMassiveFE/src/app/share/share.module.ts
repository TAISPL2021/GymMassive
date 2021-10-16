import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ExpansionItemComponent } from './nav-bar/expansion-item/expansion-item.component';
import { ExpansionPanelNavComponent } from './nav-bar/expansion-panel-nav/expansion-panel-nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [ NavBarComponent, ExpansionPanelNavComponent, ExpansionItemComponent ],
	imports: [
		CommonModule,
		MatToolbarModule,
		MatIconModule,
		MatMenuModule,
		MatButtonModule,
		MatExpansionModule,
		MatListModule,
		MatIconModule,
		RouterModule,
		MatSidenavModule
	],
	exports: [ NavBarComponent, ExpansionPanelNavComponent, ExpansionItemComponent ]
})
export class ShareModule {}
