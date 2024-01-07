import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { IndexComponent } from './BackOffice/index/index.component';
import { AddCourseComponent } from './BackOffice/add-course/add-course.component';
import { UpdateCourseComponent } from './BackOffice/update-course/update-course.component';
import { DashboardComponent } from './BackOffice/dashboard/dashboard.component';
import { CourseDetailsComponent } from './BackOffice/course-details/course-details.component';
import { HomepagefrontComponent } from './FrontOffice/homepagefront/homepagefront.component';
const routes: Routes = [
   
            // Route for the homepage.
        {
          path:'home',
          component:HomepagefrontComponent
        }
            // Route for the admin page.
        ,{
          path:'admin',
          component:IndexComponent
        },
        {
          path:'Dashboard',
          component:DashboardComponent
        },
            // Route for adding a course.
        {
          path:'addCourse',
          component:AddCourseComponent
        },
            // Route for updating a course. ':id' is a route parameter.
        {
          path:'updateCourse/:id',
          component:UpdateCourseComponent
        },
        {path:'courseDetails/:id',
 component:CourseDetailsComponent
},
            // Default route. Redirects to '/home' if no other paths match.
        {
        path: "",
        redirectTo: "/home",
          pathMatch: "full",
        }
   
  
  
  
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
