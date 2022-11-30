import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // variables
  newForm: FormGroup;
  projectStatus: ["Stable", "Critical", "Finished"];
  forbiddenNames = ["test"];

  // lifecycle hooks
  ngOnInit() {
    this.setUpNewForm();
  };

  // functions
  setUpNewForm() {
    this.newForm = new FormGroup({
      'projectName': new FormControl(null, [(Validators.required)], this.forbiddenProjectNames),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl(null)
    })
  }

  onSubmit() {
    console.log(this.newForm.value);

  }

  // Validators
  // forbiddenProjectNames(control: FormControl): { [s: string]: boolean } {
  //   if (this.forbiddenNames.indexOf(control.value) !== -1) {
  //     return { 'projectNameIsForbidden': true }
  //   }
  //   else {
  //     return null;
  //   }
  // }

  forbiddenProjectNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test") {
          resolve({ 'projectNameIsForbidden': true });
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }
}
