import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Firebase -> importamos herrramientas de la base de datos

import { environment } from 'src/environments/environment';
import{AngularFireModule} from '@angular/fire/compat'
import{AngularFireAuthModule} from '@angular/fire/compat/auth'
import{AngularFireStorageModule} from '@angular/fire/compat/storage'


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,

    //vinculacion con BD
    AngularFireModule.initializeApp(environment.firebaseConfig), //inicializar FireBase dentro del proyecto
    AngularFireAuthModule,
    AngularFireStorageModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
