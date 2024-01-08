// Importation des modules Angular et des services personnalisés nécessaires.
import { Component } from '@angular/core';
import { Course } from 'src/app/Model/Course';
import { CourseServiceService } from 'src/app/Services/course-service.service';

// Décoration du composant avec le sélecteur 'app-dashboard', le chemin vers le fichier HTML associé
// et le chemin vers le fichier CSS pour le style du composant.
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // Initialisation d'un tableau vide pour stocker les cours récupérés depuis le backend.
  courses: Course[] = [];
  
  // Variables pour un cours spécifique et la liste de tous les cours.
  // Elles ne semblent pas être utilisées et pourraient être des vestiges d'une implémentation antérieure.
  course!: Course;
  courseList!: Course[];
  
  // Injection du service CourseServiceService pour interagir avec les opérations liées aux cours côté backend.
  constructor(private courseService: CourseServiceService) {}

  // La méthode ngOnInit est un hook de cycle de vie appelé après la création du composant.
  ngOnInit(): void {
    // Récupération de tous les cours en utilisant le service lors de l'initialisation du composant.
    this.courseService.getAllCourses().subscribe(
      (data) => {
        // Attribution des cours récupérés au tableau 'courses' pour l'affichage.
        this.courses = data;
      },
      (error) => {
        // Enregistrement d'un message d'erreur en cas d'échec de récupération des cours.
        console.error('Failed to get courses', error);
      }
    );
  }

  // Extraction du nom de fichier à partir d'un chemin donné, utilisée pour afficher les images des cours.
  // Cette fonction retourne simplement le chemin car le chemin complet n'est plus stocké.
  getImageFileName(path: string): string {
    return path;
  }

  // Initie le processus de suppression pour un cours spécifique par son ID.
  deleteCourse(id: number): void {
    // Confirmation avec l'utilisateur avant de procéder à la suppression.
    if(confirm('Are you sure you want to delete this course?')) {
      this.courseService.deleteCourse(id).subscribe(
        () => {
          // Message de log si le cours est supprimé avec succès.
          console.log('Course deleted successfully');
          // Mise à jour du tableau 'courses' pour enlever le cours supprimé.
          this.courses = this.courses.filter(course => course.id !== id);
        },
        (error) => {
          // Enregistrement d'un message d'erreur si un problème survient lors de la suppression du cours.
          console.error('Failed to delete course', error);
        }
      );
    }
  }
}
