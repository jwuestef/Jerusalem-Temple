import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { CalendarComponent } from './calendar/calendar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PastorComponent } from './pastor/pastor.component';
import { HistoryComponent } from './history/history.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'calendar',
    component: CalendarComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'pastor',
    component: PastorComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
  },
  {
    path: '**',
    redirectTo: '/home',
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
