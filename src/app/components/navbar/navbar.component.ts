import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenuModule,ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  public authService = inject(AuthenticationService);
  items: MenuItem[] | undefined;


  ngOnInit() {
    this.items = [
      {
        label: 'User',
        items: [
          {
            label: `Role ${this.authService.getUserRole() || ''}`,
            icon: 'pi pi-key',
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: ()=>{
              this.authService.logout()
            }
          },
        ],
      }
    ];
  }

}
