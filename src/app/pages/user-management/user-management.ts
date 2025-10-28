import { Component, OnInit } from '@angular/core';
import { UserCard, userCardModel } from '../../components/user-card/user-card';
import { Header } from '../../components/header/header';
import { UserManagementService } from '../../services/user-management.service';
import { NotificationService } from '../../services/notification.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-management',
  imports: [Header, UserCard],
  templateUrl: './user-management.html',
  styleUrl: './user-management.scss',
})
export class UserManagement implements OnInit {
  users: userCardModel[] = [];
  token: string;

  userInfo: userCardModel = {
    name: 'coiso',
    email: 'coiso@gmail.com',
    role: 4,
  };

  constructor(
    private userMgService: UserManagementService,
    private notificationService: NotificationService,
    private cookieService: CookieService,
    private router: Router
  ) {
    this.token = cookieService.get('auth_token');
  }

  ngOnInit(): void {
    console.log('aoia');
    console.log(this.cookieService.get('auth_token'));
    if (this.cookieService.check('auth_token')) {
      this.userMgService.getUsers(this.token).subscribe({
        next: (response) => {
          this.notificationService.show('Usuarios carregados com sucesso', 'success');
          console.log('i');
          this.users.push(...response);
        },
        error: (error) => {
          this.notificationService.show('Erro ao carregar usuarios', 'error');
          console.error(error.message);
        },
      });
    } else {
      this.router.navigate(['/login']);
    }
  }

  onRoleChange(updatedUser: userCardModel): void {
    const index = this.users.findIndex((u) => u.id === updatedUser.id);

    if (index !== -1) {
      this.users[index] = updatedUser;
      this.users = [...this.users];
      console.log(`Usuário ${updatedUser.name} atualizado para o cargo ${updatedUser.role}.`);
    }
  }
}
