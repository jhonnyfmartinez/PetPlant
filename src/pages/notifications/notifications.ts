import { Component,ViewChild } from '@angular/core';
import { NavParams, AlertController, ToastController } from 'ionic-angular';

import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html'
})
export class NotificationsPage {

  temperatura = "Temperatura: Optima";
  humedad = "Optima";
  MensajeAlerta = "";
  MensajeAlertaHumedad = "";
  isConnected: boolean = false;

  btAttempt:string = "none";

  macAddress = "20:17:01:04:12:93";

  dataTemp = 0;
  dataHum = 0;

  //Variables de temperatura de plantas
  temperaturaLimiteRosa: number = 28;
  humedadLimiteRosa: number = 37;

  constructor(public toastCtrl: ToastController, public navParams: NavParams,
    public bluetoothSerial: BluetoothSerial, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
  }

  connectBT(){
    this.btAttempt = "block";
    this.bluetoothSerial.connect(this.macAddress).subscribe(data=>{
      this.btAttempt = "none";
      data == "OK" ? this.isConnected = true : this.isConnected = false;
      console.log("1",this.btAttempt);
    }, error => {
      console.log(error);
      this.btAttempt = "none";
      this.isConnected = false;
    });
    console.log("2",this.btAttempt);
  }

  disconnectBT(){
    this.btAttempt = "block";
    this.bluetoothSerial.disconnect().then(()=>{
      this.isConnected = false;
      this.btAttempt = "none";
      this.dataTemp = 0;
      this.dataHum = 0;
      this.MensajeAlerta = "";
    }).catch(err=>console.log(err));
  }

  refreshData(refresher){
    if(this.isConnected){
      this.bluetoothSerial.readUntil("\n").then(btData=>{
        console.log(btData);
        let raw_data = btData.split("-");
        this.dataTemp = raw_data[0];
        this.dataHum = Math.round((1-(raw_data[1]/1100))*100);
        this.btAttempt = "none";
        setTimeout(()=>{
          this.EstadoPlantaNoticacionTemperatura();
          this.EstadoPlantaNotificacionHumedad();
          this.bluetoothSerial.clear().then(()=>{
            refresher.complete();
          });
        },1000);
      }).catch(err=>console.log(err));
    }else{
      let toast = this.toastCtrl.create({
        duration: 2000,
        position: 'bottom',
        message: 'Primero debes sincronizar el dispositivo',
        showCloseButton: true,
        closeButtonText: 'Cerrar'
      });
      setTimeout(()=>{
        toast.present();
        this.isConnected = false;
        refresher.complete();
      },1000);
    }
  }

  EstadoPlantaNotificacionHumedad(){
      if(this.dataHum <= this.humedadLimiteRosa){
        this.humedad = "Seco";
        this.MensajeAlertaHumedad = "Debes darle agua a tu planta";
      } else if(this.dataHum > this.humedadLimiteRosa && this.dataHum < this.humedadLimiteRosa+20) {
        this.humedad = "Optima";
        this.MensajeAlertaHumedad = "";
      } else {
        this.humedad = "Alta";
        this.MensajeAlertaHumedad = "Debes poner al sol tu planta";
      }
  }

  EstadoPlantaNoticacionTemperatura() {
      if (this.dataTemp >= this.temperaturaLimiteRosa) {
        console.log(this.dataTemp);
        console.log(this.temperaturaLimiteRosa);
        this.temperatura = "Excesiva";
        this.MensajeAlerta = "Debes poner tu planta en sombra"
        this.showAlertTemperature();
      }
      if (this.dataTemp < this.temperaturaLimiteRosa) {
        this.temperatura = "Optima";
        this.MensajeAlerta = ""
      }
  }

  //revisar alerta de temp
  showAlertTemperature() {
    let alert = this.alertCtrl.create({
      title: 'Advertencia!',
      subTitle: 'Debes poner tu planta en la sombra (Temperatura muy alta)',
      buttons: ['OK']
    });
    alert.present();
  }

}
