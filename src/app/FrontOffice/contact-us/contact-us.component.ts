// contact-us.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUSComponent {
  // Method triggered when the contact form is submitted.
  onSubmit(form: any) {
        // Destructuring to extract name, email, and message from the form values.
    const { name, email, message } = form.value;
        // Preparing the email subject using the sender's name.
    const subject = `Message from ${name}`;
        // Creating a mailto link with subject and message, encoding the values for URL compatibility.
    const mailtoLink = `mailto:aicha.gasri@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    // Redirecting the browser to the mailto link, which opens the default mail client.
    window.location.href = mailtoLink;
  }
}
