import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NgxImageGalleryModule} from "ngx-image-gallery";
import {
  MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatListModule,
  MatToolbarModule
} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import { KeysPipe } from './pipe/keys.pipe';
import { GalleryComponent } from './gallery/gallery.component';
import { routing }  from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    KeysPipe,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    NgxImageGalleryModule,
    FlexLayoutModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
