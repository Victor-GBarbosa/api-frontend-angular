import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ɵInternalFormsSharedModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';
import { RegisterCredentials } from '../../models/register.interface';
import { register } from 'module';

@Component({
  selector: 'app-register',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  registerForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private notificationService: NotificationService
  ) {
    this.registerForm = fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.min(5), Validators.required]],
      passwordConfirm: [''],
      cpf: ['', [Validators.min(11), Validators.required]],
      phoneNumber: ['', [Validators.min(11), Validators.required]],
    });
  }

  onSubmit() {
    const { passwordConfirm, ...regCred } = this.registerForm.value; //Usei 2 variaveis com o mesmo valor pois não foi possivel typar o objeto desconstruido
    const registerCredentials: RegisterCredentials = regCred;
    if (passwordConfirm != registerCredentials.password) {
      this.notificationService.show('As senhas não conferem', 'warning');
    } else {
      this.authService.register(registerCredentials);
    }
    console.log(passwordConfirm, registerCredentials);
  }
}
