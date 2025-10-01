export interface NotificationInterface {
  message: string;
  type: NotificationType;
}

export type NotificationType = 'success' | 'error' | 'warning' | 'info';
