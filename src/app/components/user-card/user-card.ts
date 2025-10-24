import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserRolesEnum } from '../../models/userRole.model';
import { UserManagementService } from '../../services/user-management.service';
import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-user-card',
  imports: [ReactiveFormsModule],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
})
export class UserCard implements OnInit {
  roleSelector!: FormGroup;
  @Input() userCardInfo!: userCardModel;
  @Output() roleChanged = new EventEmitter<userCardModel>();

  constructor(
    private fb: FormBuilder,
    private userManagementService: UserManagementService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    // agora userCardInfo já foi definido pelo Angular
    this.roleSelector = this.fb.group({
      userRole: [this.userCardInfo?.role, [Validators.required]],
    });
  }

  setUserRole(): void {
    const newRole: number = this.roleSelector.value.userRole;
    this.userManagementService
      .setUserRole(this.userCardInfo.email, this.roleSelector.value.userRole)
      .subscribe({
        next: (promise) => {
          this.notificationService.show(
            `Cargo de ${this.userCardInfo.name} foi alterado com sucesso`,
            'success'
          );

          const updatedUser: userCardModel = {
            ...this.userCardInfo,
            role: newRole,
          };

          console.log(updatedUser);

          this.roleChanged.emit(updatedUser);
        },
        error: (promise) => {
          this.notificationService.show(
            `${promise}: Não foi possivel alterar o cargo ${this.userCardInfo.name}`,
            'error'
          );
        },
      });
  }
}

export interface userCardModel {
  id?: number;
  name: string;
  email: string;
  role: UserRolesEnum;
}
