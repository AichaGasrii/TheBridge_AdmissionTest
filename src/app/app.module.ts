import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './FrontOffice/public/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxCaptchaModule } from 'ngx-captcha';
import { IndexComponent } from './BackOffice/index/index.component';
import { IonicModule } from '@ionic/angular';
import { SidebarComponent } from './BackOffice/public/sidebar/sidebar.component';
import { TopHeaderComponent } from './BackOffice/public/top-header/top-header.component';
import { ListCoursesComponent } from './FrontOffice/list-courses/list-courses.component';
import { ContactUSComponent } from './FrontOffice/contact-us/contact-us.component';
import { AddCourseComponent } from './BackOffice/add-course/add-course.component';
import { UpdateCourseComponent } from './BackOffice/update-course/update-course.component';
import { DashboardComponent } from './BackOffice/dashboard/dashboard.component';
import { FooterComponent } from './BackOffice/public/footer/footer.component';
import { HomepagefrontComponent } from './FrontOffice/homepagefront/homepagefront.component';
import { CourseDetailsComponent } from './BackOffice/course-details/course-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepagefrontComponent,
    IndexComponent,
    SidebarComponent,
    TopHeaderComponent,
    ListCoursesComponent,
    ContactUSComponent,
    AddCourseComponent,
    UpdateCourseComponent,
    DashboardComponent,
    FooterComponent,
    CourseDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    IonicModule
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
