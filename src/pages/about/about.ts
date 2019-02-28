import { Component,ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';

import { Platform } from 'ionic-angular';



import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
 CameraPosition,LatLng,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  myPosition: any = {};
  @ViewChild('map') element;
  map: GoogleMap;
  mapElement: HTMLElement;



markers: any[] = [
    {
      position:{
        latitude: -34.5793905,
        longitude:-58.5619737,
      },
      title:'Ags Servicio tecnico',
      icon: 'assets/imgs/marcadorpos2png'
    },
    {
      position:{
        latitude: -35.4454177,
        longitude: -60.89238,
      },
      title:'MC Electrónica',
      icon: 'assets/imgs/marcadorpos2png'
    },
    {
      position:{
        latitude: -34.562448,
        longitude: -59.1173045,
      },
      title:'Electrohogar (Luján, Buenos Aires)',
      icon: 'assets/imgs/marcadorpos2png'
    },
    {
      position:{
        latitude: -33.343255,
        longitude: -60.2406659,
      },
      title:'Elektroservice',
      icon: 'assets/imgs/marcadorpos2png'
    },
  ];


  constructor(public navCtrl: NavController,private googleMaps: GoogleMaps,public plt: Platform) {

    plt.ready().then(() => {
       this.initMap();
     });

  }


  ionViewDidLoad() {
    this.plt.ready().then(() => {
    //	this.initMap(); 
    });
  }





initMap(){
  /*AIzaSyD4hWHhpI0lCEfvZJ8Q3nk-_V6WL2pNfjc*/

 let coordinates: LatLng = new LatLng(-34.159653, -58.9574357);



    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: -34.159653,
          lng: -58.9574357
        },
        zoom: 18,
        tilt: 30
      }
    };



    var mapProp = {

            'controls': {
                'compass': true,
                'myLocarionButton': true,
                'indoorPicker': true,
                'zoom': true
            },
            'gestures': {
                'scroll': true,
                'tilt': true,
                'rotate': true,
                'zoom': true
            }
  };






    let map: GoogleMap = GoogleMaps.create(this.element.nativeElement, {
        
        'controls': {
          'compass': true,
          'myLocationButton': true,
          'indoorPicker': true,
          'zoom': true
        },
        'gestures': {
          'scroll': true,
          'tilt': true ,
          'rotate': true,
          'zoom': true
        }
       } );
    
    map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {

     
      map.setAllGesturesEnabled(true)
      map.setClickable(true);
      map.setMyLocationEnabled(true);
      map.setCompassEnabled(true);

      

    

      //map.setMapTypeId("MAP_TYPE_SATELLITE");

  


     let position = {
        target: coordinates,
        zoom: 5
      };

      map.animateCamera(position);

      let markerOptions: MarkerOptions = {
        position: coordinates,
        icon: "assets/imgs/marcadorpos.png",
        title: 'Emisor Electrónica'
      };

      const marker = map.addMarker(markerOptions)
        .then((marker: Marker) => {
          marker.showInfoWindow();
         


      });


         

      this.markers.forEach(marker=>{
           let markerOptions: MarkerOptions = {
            position: new LatLng(marker.position.latitude, marker.position.longitude),
            title: marker.title
        };
        map.addMarker(markerOptions);
      });

    })
  }


  addMarker(options){
   let markerOptions: MarkerOptions = {
     position: new LatLng(options.position.latitude, options.position.longitude),
     title: options.title
   };
   this.map.addMarker(markerOptions);
  }


}
