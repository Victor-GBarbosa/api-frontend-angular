import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ɵInternalFormsSharedModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserRolesEnum } from '../../models/userRole.model';
import { UserManagementService } from '../../services/user-management.service';
import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-user-card',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
})
export class UserCard implements OnInit {
  roleSelector!: FormGroup;
  @Input() userCardInfo!: userCardModel;
  @Input() roleToSet!: number;

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

  //   setUserRole(): void {
  //     this.userManagementService.setUserRole(this.userCardInfo.email, this.roleToSet).subscribe({
  //       next: (promise) => {
  //         this.notificationService.show(
  //           `Cargo de ${this.userCardInfo.name} foi alterado com sucesso`,
  //           'success'
  //         );
  //       },
  //       error: (promise) => {
  //         this.notificationService.show(
  //           `${promise}: Não foi possivel alterar o cargo ${this.userCardInfo.name}`,
  //           'error'
  //         );
  //       },
  //     });
  //   }
  // }
}
export interface userCardModel {
  id?: number;
  name: string;
  email: string;
  role: UserRolesEnum;
}
