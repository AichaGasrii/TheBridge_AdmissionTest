// index.component.ts
import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from 'src/app/Services/course-service.service';
import { Course } from 'src/app/Model/Course';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  courses: Course[] = [];
  // The CourseServiceService is injected to interact with course-related backend operations.
  constructor(private courseService: CourseServiceService) {}

  ngOnInit(): void {
        // Fetches all courses using the service when the component initializes.
    this.courseService.getAllCourses().subscribe(
      (data) => {
                // Assigns the fetched courses to the courses array for display.
        this.courses = data;
      },
      (error) => {
        console.error('Failed to get courses', error);
      }
    );
  }
  // Extracts the file name from a given path, used to display images for courses.
  getImageFileName(path: string): string {
    return path; // Retourne directement le nom du fichier car le chemin complet n'est plus stocké
  }
  // Initiates the deletion process for a specific course by its ID.
  deleteCourse(id: number): void {
        // Confirms with the user before proceeding with deletion.
    if(confirm('Are you sure you want to delete this course?')) {
      this.courseService.deleteCourse(id).subscribe(
        () => {
          console.log('Course deleted successfully');
          this.courses = this.courses.filter(course => course.id !== id);
        },
        (error) => {
                    // Logs an error message if there's a problem deleting the course.
          console.error('Failed to delete course', error);
        }
      );
    }
  }}