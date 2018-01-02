import { Component } from '@angular/core';

import { IAuthForm } from './auth-form/auth-form.interface';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  environmentName = environment.count;
}
