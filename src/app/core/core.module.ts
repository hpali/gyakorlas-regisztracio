import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent
  ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule
    ],
  exports: [
    HomeComponent,
    MenuComponent
  ]
})
export class CoreModule { }
