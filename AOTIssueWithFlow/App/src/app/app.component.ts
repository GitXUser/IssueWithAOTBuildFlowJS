import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showspinner: boolean = false;

  constructor(
    private router: Router,
    private _route:ActivatedRoute
  ) {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        this.showspinner = true;
      } else if (e instanceof NavigationEnd
        || e instanceof NavigationError
        || e instanceof NavigationCancel) {
        this.showspinner = false;
      }
    });
  }

  navigateToFeatureX(){
    this.router.navigate(['featurex'],{ relativeTo: this._route.parent })
  }
}
