// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// AngularFire
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


// Configuration
import { AppRoutingModule } from './app-routing.module';
import { firebaseConfig } from '../environments/firebase.config';
import { AppComponent } from './app/app.component';


// Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TexteditorComponent } from './services/texteditor.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { CalendarComponent } from './calendar/calendar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PastorComponent } from './pastor/pastor.component';
import { HistoryComponent } from './history/history.component';


// Services
import { ContentService } from './services/content.service';
import { ScrollingService } from './services/scrolling.service';


// 3rd Party Modules & Libraries
import * as $ from 'jquery';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgxGalleryModule } from 'ngx-gallery';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TexteditorComponent,
    HomeComponent,
    AdminComponent,
    CalendarComponent,
    GalleryComponent,
    PastorComponent,
    HistoryComponent
  ],
  imports: [
    // Angular Modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // Firebase
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    // Routing
    AppRoutingModule,
    // Other
    AngularFontAwesomeModule,
    ScrollToModule.forRoot(),
    NgxGalleryModule
  ],
  providers: [
    ContentService,
    ScrollingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
