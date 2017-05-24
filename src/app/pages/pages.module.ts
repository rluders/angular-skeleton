import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';

import { WelcomePageComponent } from './welcome-page.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [
    WelcomePageComponent
  ]
})
export class PagesModule {}
