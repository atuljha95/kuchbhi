import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { GalleryComponent } from './gallery/gallery.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
   

    {  path: 'pics', component: GalleryComponent },
]

export const routing = RouterModule.forRoot(appRoutes);