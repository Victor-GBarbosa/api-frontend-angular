import { Component, Input, Output } from '@angular/core';
import { NotificationType, NotificationInterface } from './notification.model';
import { EventEmitter } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
import { NotificationWithID } from '../../../services/notification.service';

@Component({
  selector: 'app-notification',
  imports: [NgClass],
  templateUrl: './notification.html',
  styleUrl: './notification.scss',
})
export class Notification {
  @Input() notification!: NotificationWithID;
  @Output() close = new EventEmitter<number>();

  getNotificationClass(): string {
    if (!this.notification) {
      return '';
    }
    return `notification-card ${this.notification.type}`;
  }

  onClose(): void {
    this.close.emit(this.notification.id);
  }
}
