import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/Model/Course';
import { CourseServiceService } from 'src/app/Services/course-service.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  courseId!: number;
  course!: Course;
  courseList : Course[] = [];
  constructor(
    private route: ActivatedRoute, 
    private courseService: CourseServiceService , 
    private http: HttpClient, private router: Router) {
}

ngOnInit(): void {
  // Extract the courseId from the URL
  this.courseId = this.route.snapshot.params['id'];
    this.getCourseDetails(this.courseId);
  
}

getCourseDetails(courseId: number): void {
  this.courseService.getCourseById(courseId).subscribe(
    (data) => {
      this.course = data;
      console.log(data);
    },
    (error) => {
      console.log(error);
    }
  );
}

getImageFileName(path?: string): string {
  if (path) {
    // Path is defined, return it directly since you store only the file name in the database.
    return path;
  } else {
    // Path is undefined, return a default image filename.
    return 'default-image.jpg'; // Replace with your actual default image name if you have one.
  }
}

 
}
