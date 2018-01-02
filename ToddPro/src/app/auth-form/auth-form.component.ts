import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent {
  environmentName = environment.count;
  test = function () {
    var k = 1;
    return console.log(k);
  }
  count: 0;
  ngOnInit() {
    var count = 1;
    console.log(count);
  }
}
