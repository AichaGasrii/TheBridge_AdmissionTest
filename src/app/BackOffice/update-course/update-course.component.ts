// update-course.component.ts// Importation des modules nécessaires depuis les packages Angular.
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseServiceService } from 'src/app/Services/course-service.service';
import { Course } from 'src/app/Model/Course';

// Décorateur qui identifie la classe comme un composant Angular et définit ses métadonnées.
@Component({
  selector: 'app-update-course', // Le sélecteur CSS pour l'élément HTML représentant le composant.
  templateUrl: './update-course.component.html', // Le chemin vers le fichier HTML du composant.
  styleUrls: ['./update-course.component.css'] // Le chemin vers le fichier CSS du composant.
})
export class UpdateCourseComponent implements OnInit {
  course: Course = new Course(); // Instance du modèle de cours pour la liaison de données.
  selectedFile: File | null = null; // Variable pour stocker le fichier sélectionné pour l'image du cours.

  // Injection des dépendances pour le service de cours, les informations de routage et la navigation.
  constructor(
    private courseService: CourseServiceService, // Service pour interagir avec les API de cours.
    private route: ActivatedRoute, // Service pour accéder aux paramètres de la route.
    private router: Router // Service pour la navigation programmatique.
  ) {}

  // Méthode ngOnInit appelée après l'initialisation du composant par Angular.
  ngOnInit(): void {
    // Récupération de l'ID du cours à partir des paramètres de la route.
    const courseId = Number(this.route.snapshot.paramMap.get('id'));
    // Récupération des données du cours si l'ID est valide.
    if (courseId) {
      this.courseService.getCourseById(courseId).subscribe(
        (data) => {
          // Affectation des données récupérées à l'objet course.
          this.course = data;
        },
        (error) => {
          // Log d'une erreur et possibilité de redirection ou d'affichage d'une notification d'erreur.
          console.error('Failed to get course', error);
          // Gestion du cas où le cours n'est pas trouvé ou affichage d'une notification.
        }
      );
    }
  }

  // Gestion des événements de changement de l'input fichier pour mettre à jour le fichier sélectionné.
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  // Méthode déclenchée lors de la soumission du formulaire.
  onSubmit(form: NgForm) {
    // Vérification de la validité du formulaire et de la présence de l'ID du cours.
    if (form.valid && this.course.id) {
      // Appel au service pour mettre à jour le cours avec les nouvelles données.
      this.courseService.updateCourse(this.course, this.selectedFile, this.course.id).subscribe(
        (response) => {
          // Log de la réussite et affichage d'un message de succès.
          console.log('Course updated successfully!', response);
          alert('Course updated successfully!');
          // Redirection vers la liste des cours ou affichage d'un message de succès.
          this.router.navigate(['/Dashboard']); // Assurez-vous que cette route est correcte.
        },
        (error) => {
          // Alertes si la validation du formulaire échoue.
          alert('Failed to update course.');
          console.error('Error updating course', error);
          // Affichage d'une notification d'erreur si nécessaire.
        }
      );
    } else {
      // Alertes si tous les champs ne sont pas correctement remplis.
      alert('Please fill all the fields correctly.');
    }
  }
}
