import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn: boolean = false;

  ngOnInit(): void {
    this.isLoggedIn = !!localStorage.getItem('jwtToken'); // Adjust this based on how you check for logged-in status
  }

  logout() {
    // Implement your logout logic here, like clearing localStorage and navigating to login page
    localStorage.clear();
    window.location.reload(); // or navigate to login page
  }

}
