import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-alert-pop-up',
  imports: [],
  templateUrl: './alert-pop-up.html',
  styleUrl: './alert-pop-up.scss',
})
export class AlertPopUp implements OnInit, OnDestroy {
  @Input() alertPopUpData!: AlertPopUpModel;
  showAlertBool: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.subscription = this.alertService.alertData$.subscribe((data) => {
      if (data) {
        this.alertPopUpData = data;
        this.showAlertBool = true;
      } else {
        this.showAlertBool = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

export interface AlertPopUpModel {
  title: string;
  description?: string;
  possitiveActionName: string;
  negativeActionName: string;

  possitiveAction: () => void;
  negativeAction: () => void;
}
