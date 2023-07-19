import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCatagoryComponent } from './pages/single-catagory/single-catagory.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsAndCondtionsComponent } from './pages/terms-and-condtions/terms-and-condtions.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

const routes: Routes = [
    {path: '', component:HomeComponent },
    {path: 'catagory', component:SingleCatagoryComponent },
    {path: 'post', component:SinglePostComponent },
    {path: 'about', component:AboutUsComponent },
    {path: 'terms-and-conditions', component:TermsAndCondtionsComponent },
    {path: 'contact', component:ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
