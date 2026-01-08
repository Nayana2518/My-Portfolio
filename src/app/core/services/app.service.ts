import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  getAppName() {
    return 'My Portfolio App';
  }

  constructor() { }
}
