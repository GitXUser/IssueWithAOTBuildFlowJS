import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanLoad{

  constructor(
  ){}

  async canLoad(route:Route){
    console.log('RouteGuardService canLoad', route);


    //Future usecase for permission check
    return true;
  }

}
