// add-course.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/Model/Course';
import { CourseServiceService } from 'src/app/Services/course-service.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
    // The course model for data binding with the form.
  course: Course = new Course();
    // Holds the selected file from the file input, initialized to null.
  selectedFile: File | null = null;
  // Injects the CourseServiceService and Router services for handling course addition and navigation.
  constructor(
    private courseService: CourseServiceService,
    private router: Router
  ) {}

  // This method is called when the form is submitted.
  onSubmit(form: NgForm) {
        // Checks if the form is valid and a file has been selected.
    if (form.valid && this.selectedFile) {
            // Calls the addCourse method from the service, passing in the course data and selected file.
      this.courseService.addCourse(this.course, this.selectedFile).subscribe(
                  // Alerts the user of successful addition and navigates back to the admin course list view.
        response => {
          alert('Course added successfully!');
          this.router.navigate(['/Dashboard']);
                    // Resets the form for future use.
          form.reset();
        },
        error => {
          console.error('Error adding course', error);
          alert('Failed to add course.');
        }
      );
    } else {
            // Alerts the user to fill all fields if the form is not valid.
      alert('Please fill all the fields correctly.');
    }
  }
  // Triggered when the file input changes, i.e., when a file is selected.
  onFileChange(event: any) {
        // Checks if there is at least one file selected.
    if (event.target.files.length > 0) {
            // Assigns the first file to selectedFile.
      this.selectedFile = event.target.files[0];
    }
  }
}
