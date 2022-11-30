import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // variables
  newForm: FormGroup;
  projectStatus: ["Stable", "Critical", "Finished"]

  // lifecycle hooks
  ngOnInit() {
    this.setUpNewForm();
  };

  // functions
  setUpNewForm() {
    this.newForm = new FormGroup({
      'projectName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl(null)
    })
  }

  onSubmit() {
    console.log(this.newForm.value);
  }
}
