import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import{ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RegisterModule } from './auth/register/register.module';
import { LoginModule } from './auth/login/login.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { NgxCaptchaModule } from 'ngx-captcha';
import { CardComponent } from './card/card.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { ServicioFavoritosService } from './services/servicio-favoritos.service';
import { VideoComponent } from './video/video.component';


const appRoutes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'favorite', component:FavoriteComponent},
  {path:'profile', component:ProfileComponent },
  {path:'video', component:VideoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
  HomeComponent,
  HeaderComponent,
  FooterComponent,
  LoginComponent,
  RegisterComponent,
  CardComponent,
  FavoriteComponent,
  ProfileComponent,
  VideoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    RegisterModule,
    LoginModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ServicioFavoritosService],
  bootstrap: [AppComponent,HomeComponent,LoginComponent,RegisterComponent]
})
export class AppModule { }
