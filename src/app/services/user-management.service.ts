import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { enviroment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { userCardModel } from '../components/user-card/user-card';

@Injectable({
  providedIn: 'root',
})
export class UserManagementService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getUsers(): Observable<userCardModel[]> {
    console.log(`URL: ${enviroment.apiUrl + 'users'}
                  Token: ${this.cookieService.get('auth_token')}`);
    return this.http.get<userCardModel[]>(enviroment.apiUrl + 'users', {
      headers: {
        Authorization: this.cookieService.get('auth_token'),
      },
    });
  }

  setUserRole(userEmail: string, roleToSet: number): Observable<UserModel> {
    return this.http.patch<UserModel>(
      enviroment.apiUrl + 'users/' + userEmail,
      {
        role: roleToSet,
      },
      {
        headers: {
          Authorization: this.cookieService.get('auth_token'),
        },
      }
    );
  }
}
