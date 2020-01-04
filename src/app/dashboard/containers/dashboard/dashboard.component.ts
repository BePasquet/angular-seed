import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserModel } from 'src/app/core/models/user.model';
import { AutheticationService } from '../../../core/services/authetication.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit, OnDestroy {
  /**
   * Exposes user observable state to view
   */
  public user$: Observable<UserModel | null> = this.authenticationService.user$;

  /**
   * Maintain component subscriptions
   */
  private componentSubscriptions: Subscription = new Subscription();

  constructor(private readonly authenticationService: AutheticationService) {}

  /**
   * Lifecycle hook will run once component its initalized
   */
  public ngOnInit(): void {
    this.componentSubscriptions.add(
      this.authenticationService.getUser().subscribe()
    );
  }

  /**
   * Lifecycle hook will run when component its destroyed
   */
  public ngOnDestroy() {
    this.componentSubscriptions.unsubscribe();
  }
}
