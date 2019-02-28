import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DetalleRecetaPage } from '../pages/detalle-receta/detalle-receta';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

import { SocialSharing } from '@ionic-native/social-sharing';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { RecetasServicesProvider } from '../providers/recetas-services/recetas-services';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,DetalleRecetaPage,
    TabsPage
  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,DetalleRecetaPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,SocialSharing,QRScanner, BarcodeScanner,HttpModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},GoogleMaps,Geolocation,
    RecetasServicesProvider 
  ]
})
export class AppModule {}
