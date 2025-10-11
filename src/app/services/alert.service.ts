import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AlertPopUpModel } from '../components/assets/alert-pop-up/alert-pop-up';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private alertDataSubject = new BehaviorSubject<AlertPopUpModel | null>(null);
  alertData$ = this.alertDataSubject.asObservable();

  showAlert(data: AlertPopUpModel): void {
    this.alertDataSubject.next(data);
  }
  hideAlert(): void {
    this.alertDataSubject.next(null);
  }
}
