import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { Message } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';




@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule,InputTextModule,ButtonModule,MessagesModule,InputIconModule,IconFieldModule,DialogModule,TableModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  public authService = inject(AuthenticationService);
  private _router = inject(Router);
  
  errorMessage: Message[] | undefined;
  visible: boolean = false;

  // Method to handle form submission
  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    
    const { email, password } = form.value;
    const success = this.authService.login(email, password);

    if (success) {
      this._router.navigate(['/home']);
    } else {
      this.errorMessage = [{ severity: 'error', detail: 'Invalid email or password' }];
    }
  }

  showDialog() {
    this.visible = true;
  }

}
