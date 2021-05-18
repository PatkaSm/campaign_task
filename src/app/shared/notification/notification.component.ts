import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit, OnDestroy {
  /**
   * Notification stte
   */
  public state: any;

  /**
   * Subscription
   */
  public sub: Subscription = new Subscription();

  /**
   * Success observable
   */
  public success$: Observable<any>;

  /**
   * Errors observable
   */
  public error$: Observable<any>;

  /**
   * Notification component constructor
   * @param uiErrorMessengerService Notification service
   */
  constructor(private uiErrorMessengerService: NotificationService) {
    this.success$ = this.uiErrorMessengerService.success;
    this.error$ = this.uiErrorMessengerService.error;
  }

  /**
   * On init add subsctiption to subscribe
   */
  ngOnInit() {
    this.sub.add(
      this.success$.subscribe((msg) => {
        this.state = {
          type: 'success',
          message: msg,
        };
        setTimeout(() => {
          this.onCancel();
        }, 6000);
      })
    );

    this.sub.add(
      this.error$.subscribe((msg) => {
        this.state = {
          type: 'alert',
          message: msg,
        };
        setTimeout(() => {
          this.onCancel();
        }, 6000);
      })
    );
  }

  /**
   * On destroy unsubscribe subscribtions
   */
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /**
   * Close notification
   */
  public onCancel(): void {
    this.state = null;
    this.uiErrorMessengerService.cancel.next({ cancel: true });
  }
}
