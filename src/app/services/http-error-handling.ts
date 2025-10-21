import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorHandling {
  constructor(private notificationService: NotificationService) {}

  public showErrorNotification(response: HttpErrorResponse, message?: string) {
    switch (response.status) {
      case 0:
        this.notificationService.show(
          'Error to conect with server' + (message ? ' ' + message : ''),
          'error'
        );
        break;

      case 500:
        this.notificationService.show(
          "500: Server can't processes this request" + (message ? ' ' + message : ''),
          'error'
        );
        break;
    }
  }
}
