import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  userDetailsForm!: FormGroup;

  constructor() {
    this.userDetailsForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      city: new FormControl(''),
      district: new FormControl(''),
      pincode: new FormControl(''),
      facebook: new FormControl(''),
      instagram: new FormControl(''),
      linkedin: new FormControl('')
    })
  }

  onUserDetailsSubmit(): void {
    console.log(this.userDetailsForm);
  }
}
