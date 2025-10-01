import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { AsyncPipe } from '@angular/common';
import { Notification } from '../assets/notification/notification';

@Component({
  selector: 'app-notification-container',
  imports: [AsyncPipe, Notification],
  templateUrl: './notification-container.html',
  styleUrl: './notification-container.scss',
})
export class NotificationContainer {
  constructor(public notificationService: NotificationService) {}

  onClose(id: number) {
    this.notificationService.remove(id);
  }
}
