import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //ionicForm: FormGroup;

  //constructor(public formBuilder: FormBuilder) { }
  constructor(){}
  ngOnInit() {
  }

  getUser(user){
    // let us = this.ionicForm.get('email');
    // if(us == 'jorge.martinez2@live.u-tad.com' ){

    // }
  }

  login(form){
    //this.authService.login(form.value).subscribe((res)=>{
      //this.router.navigateByUrl('home');
    //});

  }

}

/*
import { Component, OnInit } from '@angular/core';
// import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
// import { AuthProvider } from '../../providers/auth/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //https://stalinmaza97.hashnode.dev/ionic-4-input-password-con-boton-para-mostrarocultar-texto
  //https://reviblog.net/2017/08/05/tutorial-de-ionic-firebase-parte-1-autenticacion-con-correo-y-contrasena/
  //https://www.youtube.com/watch?v=3xu7DAROZLo
  user= { email : '', password : ''};
  constructor(
    // public navCtrl: NavController,
    // public navParams: NavParams,
    // public auth : AuthProvider,
    // public alertCtrl : AlertController
  ) {}

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LoginPage');
    console.log(this.user);
  }

  ngOnInit() {
  }

  // Registro de usuario código del  archivo auth.ts
//   registerUser(email:string, password:string){
//     return this.afAuth.auth.createUserWithEmailAndPassword( email, password)
//     .then((res)=>{
//      // El usuario se ha creado correctamente.
//     })
//     .catch(err=>Promise.reject(err))
//  }

  // signin(){
  //   this.auth.registerUser(this.user.email,this.user.password)
  //   .then((user) => {
  //     // El usuario se ha creado correctamente
  //   })
  //   .catch(err=>{
  //     let alert = this.alertCtrl.create({
  //       title: 'Error',
  //       subTitle: err.message,
  //       buttons: ['Aceptar']
  //     });
  //     alert.present();
  //   })
  // }

}
*/
