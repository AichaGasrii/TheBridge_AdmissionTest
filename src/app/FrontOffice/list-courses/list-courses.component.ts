import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Model/Course';
import { CourseServiceService } from 'src/app/Services/course-service.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {
  courses: Course[] = [];
    // Array to hold courses for the current page.
 
  constructor(private courseService: CourseServiceService) {}

  ngOnInit(): void {
        // Subscribe to the course service to get all courses.
    this.courseService.getAllCourses().subscribe(
      (courses) => {
        this.courses = courses;// Store fetched courses.
      },
      (error) => {
        console.error('Error fetching courses', error);
      }
    );
  }
  // Extracts the filename from a given file path.
  getImageFileName(path: string): string {
    const pathParts = path.split('/');
    const fileName = pathParts[pathParts.length - 1];
    return fileName;
  }
  // Slices the courses array for pagination based on currentPage and itemsPerPage.

}
