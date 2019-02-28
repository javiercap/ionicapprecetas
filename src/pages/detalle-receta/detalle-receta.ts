import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NavController, Platform } from 'ionic-angular';


import { RecetasServicesProvider } from '../../providers/recetas-services/recetas-services';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-detalle-receta',
  templateUrl: 'detalle-receta.html',
  providers: [RecetasServicesProvider]
})
export class DetalleRecetaPage {

   public item:any;
   public ingredientes:any;
   public titulo:string;
   public procedimiento:string;

   public sendTo   : any; 
   public subject  : string = 'Mensaje desde Peabody App';
   public message  : string = 'Peabody comparte contigo';
   public image    : string	= '';
   public uri      : string	= '';
   public seleccion:string = 'ingredientes';

  constructor(public navCtrl: NavController, public platform :Platform,public navParams: NavParams,private socialSharing: SocialSharing,public servicios: RecetasServicesProvider) {
  	
  		
  		 this.titulo = navParams.data.receta.titulo;
  		 this.item = navParams.data;
  		
  		// this.image = "https://s3.amazonaws.com/nv-almadechef/recetas/"+navParams.data.receta.zona+"/"+navParams.data.receta.imagen + navParams.data.receta.extension ;

       this.image = 'src/asset/Recetas-Maxi_01.jpg';

  		 this.uri = "http://www.almadechef.com/receta/rec_"+navParams.data.receta.id+"/";

  		// this.socialSharing.share(this.message, this.subject, this.image , this.uri );

  		 this.servicios.getIng(navParams.data.receta.id)
          .then(
            data => {
         

         		// alert(JSON.stringify(data));
              this.ingredientes = data;
             
            }
          )
          .catch(
            error => {
              alert(error);
            }
          )

          this.servicios.getPro(navParams.data.receta.id)
          .then(
            data => {

         	
              this.procedimiento = data[0].texto.replace(/<{1}[^<>]{1,}>{1}/g," ");
             
            }
          )
          .catch(
            error => {
              alert(error);
            }
          )




  }


   sharePicker()
   {
      this.platform.ready()
      .then(() => 
      {		  		

         this.socialSharing.share(this.message, this.subject, this.image, this.uri)
         .then((data) =>
         {
       //     alert('Shared via SharePicker');
         })
         .catch((err) =>
         {
            alert('Was not shared via SharePicker');
         });

      });
   }


}
