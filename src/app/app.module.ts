import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { CatagoryNavbarComponent } from './layout/catagory-navbar/catagory-navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCatagoryComponent } from './pages/single-catagory/single-catagory.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsAndCondtionsComponent } from './pages/terms-and-condtions/terms-and-condtions.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { CommentsFormComponent } from './comments/comments-form/comments-form.component';
import { CommentsListComponent } from './comments/comments-list/comments-list.component';
import { PostcardComponent } from './layout/postcard/postcard.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatagoryNavbarComponent,
    FooterComponent,
    HomeComponent,
    SingleCatagoryComponent,
    SinglePostComponent,
    TermsAndCondtionsComponent,
    ContactUsComponent,
    SubscribeComponent,
    CommentsFormComponent,
    CommentsListComponent,
    PostcardComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
