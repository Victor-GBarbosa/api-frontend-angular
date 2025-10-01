import { Injectable } from '@angular/core';
import {
  NotificationInterface,
  NotificationType,
} from '../components/assets/notification/notification.model';
import { BehaviorSubject } from 'rxjs';

export interface NotificationWithID extends NotificationInterface {
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationsSource = new BehaviorSubject<NotificationWithID[]>([]);

  public notifications$ = this.notificationsSource.asObservable();

  private defaultTimeout = 5000; // 5 segundos

  constructor() {}

  show(message: string, type: NotificationType = 'info', duration: number = this.defaultTimeout) {
    const id = new Date().getTime();

    const newNotification: NotificationWithID = { id, message, type };

    const currentNotifications = this.notificationsSource.getValue();
    this.notificationsSource.next([...currentNotifications, newNotification]);

    setTimeout(() => {
      this.remove(id);
    }, duration);
  }

  remove(id: number): void {
    const currentNotifications = this.notificationsSource.getValue();
    const updatedNotifications = currentNotifications.filter(
      (notification) => notification.id !== id
    );
    this.notificationsSource.next(updatedNotifications);
  }
}
