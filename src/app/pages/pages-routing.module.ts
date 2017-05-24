import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { WelcomePageComponent } from './welcome-page.component';

// Routes
const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomePageComponent,
    data: {
      title: 'Welcome'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
