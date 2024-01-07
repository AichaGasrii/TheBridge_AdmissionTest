// update-course.component.ts
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseServiceService } from 'src/app/Services/course-service.service';
import { Course } from 'src/app/Model/Course';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {
  course: Course = new Course();
  selectedFile: File | null = null;
  // Injecting dependencies for course service, route information, and navigation.
  constructor(
    private courseService: CourseServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  // ngOnInit is called after Angular initializes the component.
  ngOnInit(): void {
        // Retrieves the course ID from the route parameters.
    const courseId = Number(this.route.snapshot.paramMap.get('id'));
        // Fetches the course data if the ID is valid.
    if (courseId) {
      this.courseService.getCourseById(courseId).subscribe(
        (data) => {
                    // Assigns fetched data to the course object.
          this.course = data;
        },
        (error) => {
                    // Logs an error and can redirect or show an error notification.
          console.error('Failed to get course', error);
          // Handle not found course or show notification
        }
      );
    }
  }
  // Handles file input change events to update the selected file.
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }
  // Method triggered on form submission.
  onSubmit(form: NgForm) {
        // Checks if the form is valid and the course ID is present.
    if (form.valid && this.course.id) {
            // Calls the service to update the course with new data.
      this.courseService.updateCourse(this.course, this.selectedFile, this.course.id).subscribe(
        (response) => {
                    // Logs success and shows a success message.
          console.log('Course updated successfully!', response);
          alert('Course updated successfully!');

          // Redirect to course list or display success message
          this.router.navigate(['/Dashboard']); // Ensure this route is correct
        },
        (error) => {
                // Alerts if form validation fails.
          alert('Failed to update course.');
          console.error('Error updating course', error);
          // Display error notification if needed
        }
      );
    } else {
      alert('Please fill all the fields correctly.');
    }
  }
}
