import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, timer, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    const loadRoute = (delay, time = 10000) => delay
      ? timer(time).pipe(flatMap(_ => load()))
      : load();
    return route.data && route.data.preload
      ? loadRoute(route.data.delay, route.data.time)
      : of(null);
  }
}
