import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController, Platform  } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IonicPage } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

import { BarcodeScanner } from "@ionic-native/barcode-scanner";


import { ToastController } from 'ionic-angular'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})



export class ContactPage {


  private myForm: FormGroup;

  todo = {
    nombre: '',
    documento: '',
    email: '',
    factura: '',
    articulo: '',
  };

 


  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public fb: FormBuilder,private toastCtrl: ToastController,
                public platform   : Platform,    private _barcodeScanner: BarcodeScanner,private qrScanner: QRScanner) {
	
	 this.myForm = this.fb.group({
      nombre: ['', [Validators.required]],
      documento: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      factura: ['', [Validators.required,Validators.minLength(5)]],
      articulo: ['', [Validators.required,Validators.minLength(5)]],

    });


   

  		
  }

scanCode(){ 
this.qrScanner.prepare()
  .then((status: QRScannerStatus) => {
     if (status.authorized) {
       // camera permission was granted

       alert('authorized');
       // start scanning
       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
         alert('Scanned something' + text);

         this.todo.articulo = text;

         this.qrScanner.hide(); // hide camera preview
         scanSub.unsubscribe(); // stop scanning
       });

       // show camera preview
       this.qrScanner.show();

      

       // wait for user to scan something, then the observable callback will be called

     } else if (status.denied) {
           alert('denied');
     } else {
           alert('denied2');
     }
  })
  .catch((e: any) => alert(JSON.stringify(e)));
}






 presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Confirmacion',
    subTitle: 'Alta garantia exitosa.',
    buttons: [
    {
      text: 'Aceptar',
      handler: () => {
        this.limipiarForm();this.navCtrl.setRoot(this.navCtrl.getActive().component);
      }
    }
  ]
  });
  alert.present();
 
}


 
  limipiarForm(){
  this.todo = {
    nombre: '',
    documento: '',
    email: '',
    factura: '',
    articulo: '',
  };
  }


presentToast() {
  let toast = this.toastCtrl.create({
    message: 'En contrucción',
    duration: 3000,
    position: 'middle'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}
  


}
