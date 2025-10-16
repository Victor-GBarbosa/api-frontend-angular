import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ɵInternalFormsSharedModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserRolesEnum } from '../../models/userRole.model';

@Component({
  selector: 'app-user-card',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
})
export class UserCard implements OnInit {
  roleSelector!: FormGroup;
  @Input() userCardInfo!: userCardModel;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // agora userCardInfo já foi definido pelo Angular
    this.roleSelector = this.fb.group({
      userRole: [this.userCardInfo?.role, [Validators.required]],
    });
  }
}

export interface userCardModel {
  id?: number;
  name: string;
  email: string;
  role: UserRolesEnum;
}
