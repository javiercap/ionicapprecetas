import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleRecetaPage } from './detalle-receta';
import { NavController, Platform } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    DetalleRecetaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleRecetaPage),
  ],
})


export class DetalleRecetaPageModule {
	
  

	 constructor(public navCtrl    : NavController,
                public platform   : Platform, private socialSharing: SocialSharing) {
     
               
 	 }



  




}
