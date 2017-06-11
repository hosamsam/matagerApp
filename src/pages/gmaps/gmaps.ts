import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  CameraPosition,
  MarkerOptions
} from '@ionic-native/google-maps';
/**
 * Generated class for the GmapsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-gmaps',
  templateUrl: 'gmaps.html',
})
export class GmapsPage {

  constructor(private googleMaps: GoogleMaps,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GmapsPage');
    this.loadMap();
  }
  ngAfterViewInit() {
    this.loadMap();
  }
  ngOnInit() {
    this.loadMap()
  }
  addMarker() {
    console.log('add maker')
  }
  loadMap() {
    // make sure to create following structure in your view.html file
    // and add a height (for example 100%) to it, else the map won't be visible
    // <ion-content>
    //  <div #map id="map" style="height:100%;"></div>
    // </ion-content>

    // create a new map by passing HTMLElement
    let element: HTMLElement = document.getElementById('map');
    //console.log(element);
    let map: GoogleMap = this.googleMaps.create(element);

    // listen to MAP_READY event
    // You must wait for this event to fire before adding something to the map or modifying it in anyway
    map.one(GoogleMapsEvent.MAP_READY).then(
      () => {
        console.log('Map is ready!');
        // Now you can add elements to the map like the marker
        
//"30.986677600000004-30.0305972"
    // create LatLng object
    let ionic: LatLng = new LatLng(30.986677600000004,30.0305972);

    // create CameraPosition
    let position: CameraPosition = {
      target: ionic,
      zoom: 18,
      tilt: 30
    };

    // move the map's camera to position
    map.moveCamera(position);
    
    // create new marker
    let markerOptions: MarkerOptions = {
      position: ionic,
      title: 'Ionic'
    };
    /*
    const marker = map.addMarker(markerOptions)
      .then((marker) => {
        marker.showInfoWindow();
      });
    // move the map's camera to position
    map.moveCamera(position);
    */
      }
    ).catch(
      err=>{
        console.warn(err);
    });

  }


}