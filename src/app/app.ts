import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationContainer } from './components/notification-container/notification-container';
import { AlertPopUp } from './components/assets/alert-pop-up/alert-pop-up';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NotificationContainer, AlertPopUp],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('api-frontend-angular');
}
