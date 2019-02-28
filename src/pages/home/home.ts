import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';

import { DetalleRecetaPage } from "../detalle-receta/detalle-receta"

import { SocialSharing } from '@ionic-native/social-sharing';

import { RecetasServicesProvider } from '../../providers/recetas-services/recetas-services';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [RecetasServicesProvider]
})
export class HomePage {


   public sendTo   : any; 
   public subject  : string = 'Mensaje desde Peabody App';
   public message  : string = 'Peabody comparte contigo';
   public image    : string = 'src/asset/Recetas-Maxi_01.jpg';
   public uri      : string = 'http://www.almadechef.com/ensalada-de-pollo-con-crocantes-y-tomates-secos/rec_262/';

   recetas : any = '';

  constructor(public navCtrl: NavController, public platform   : Platform, public  socialSharing: SocialSharing, public servicios: RecetasServicesProvider  ) {


        if (this.recetas == '') {
          this.servicios.getAll()
          .then(
            data => {
            
              this.recetas = data;
             
            }
          )
          .catch(
            error => {
              alert(error);
            }
          )
      }



  }


irDetalle(receta){

	this.navCtrl.push(DetalleRecetaPage,{receta:receta});
}
sharePicker()
   {
      this.platform.ready()
      .then(() => 
      {         

         this.socialSharing.share(this.message, this.subject, this.image, this.uri)
         .then((data) =>
         {
           // alert('Shared via SharePicker');
         })
         .catch((err) =>
         {
            alert('Was not shared via SharePicker');
         });

      });
      return false;
   }


}

