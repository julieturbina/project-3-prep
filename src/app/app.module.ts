import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
// import { AuthComponent } from './auth/auth.component';
// import { PostComponent } from './post/post.component';
// import { LoginComponent } from './auth/login/login.component';
// import { SignupComponent } from './auth/signup/signup.component';
// import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    // AuthComponent,
    // PostComponent,
    // LoginComponent,
    // SignupComponent,
    // ServicesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
