import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /***
   * 
   * Initial Form.
   */
  form = new FormGroup({
    name: new FormControl('Default Name', [Validators.nullValidator]),
    age: new FormControl(25, [Validators.nullValidator]),
    gender: new FormControl('Male', [Validators.nullValidator]),
    email: new FormControl('', [Validators.email])
  })

  initialFormValue = Object.assign({}, this.form.value);

  getUpdatedFields(): string[] {
    const currentFormValue = this.form.value;
    return Object.keys(currentFormValue).filter((key) => currentFormValue[key] != this.initialFormValue[key]);
  }
}
