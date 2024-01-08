// add-course.component.ts

// Importation des modules et services nécessaires.
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/Model/Course';
import { CourseServiceService } from 'src/app/Services/course-service.service';

// Déclaration du composant avec son sélecteur, le chemin vers son HTML et son CSS.
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
    // Le modèle de cours pour la liaison de données avec le formulaire.
  course: Course = new Course();
    // Contient le fichier sélectionné à partir de l'entrée de fichier, initialisé à null.
  selectedFile: File | null = null;
  
  // Injection des services CourseServiceService et Router pour gérer l'ajout de cours et la navigation.
  constructor(
    private courseService: CourseServiceService,
    private router: Router
  ) {}

  // Cette méthode est appelée lors de la soumission du formulaire.
  onSubmit(form: NgForm) {
        // Vérifie si le formulaire est valide et si un fichier a été sélectionné.
    if (form.valid && this.selectedFile) {
            // Appelle la méthode addCourse du service en passant les données du cours et le fichier sélectionné.
      this.courseService.addCourse(this.course, this.selectedFile).subscribe(
        response => {
                    // Alertes l'utilisateur de l'ajout réussi et navigue vers la vue de la liste des cours de l'admin.
          alert('Cours ajouté avec succès !');
          this.router.navigate(['/Dashboard']);
                    // Réinitialise le formulaire pour une utilisation future.
          form.reset();
        },
        error => {
          console.error('Erreur lors de lajout du cours', error);
          alert('Échec de lajout du cours.');
        }
      );
    } else {
            // Alerte l'utilisateur de remplir tous les champs si le formulaire n'est pas valide.
      alert('Veuillez remplir tous les champs correctement.');
    }
  }
  
  // Déclenché lorsque l'entrée de fichier change, c'est-à-dire lorsqu'un fichier est sélectionné.
  onFileChange(event: any) {
        // Vérifie s'il y a au moins un fichier sélectionné.
    if (event.target.files.length > 0) {
            // Attribue le premier fichier à selectedFile.
      this.selectedFile = event.target.files[0];
    }
  }
}
