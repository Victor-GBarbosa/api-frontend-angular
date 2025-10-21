import { Component, OnInit } from '@angular/core';
import { UserCard, userCardModel } from '../../components/user-card/user-card';
import { Header } from '../../components/header/header';
import { UserRolesEnum } from '../../models/userRole.model';
import { UserManagementService } from '../../services/user-management.service';
import { response } from 'express';
import { UserModel } from '../../models/user.model';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-user-management',
  imports: [Header, UserCard],
  templateUrl: './user-management.html',
  styleUrl: './user-management.scss',
})
export class UserManagement implements OnInit {
  users: userCardModel[] = [];

  userInfo: userCardModel = {
    name: 'coiso',
    email: 'coiso@gmail.com',
    role: 4,
  };

  constructor(
    private userMgService: UserManagementService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.userMgService.getUsers().subscribe({
      next: (response) => {
        this.notificationService.show('Usuarios carregados com sucesso', 'success');
        this.users.push(...response);
      },
      error: (response) => {
        // console.log(response);
        this.notificationService.show('não foi possivel carregar os usuarios', 'error');
      },
    });
  }
}
