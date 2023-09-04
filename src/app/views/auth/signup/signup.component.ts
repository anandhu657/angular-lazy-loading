import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';
import { IUser } from 'src/app/shared/model/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm!: FormGroup;
  errorMessage: string = ""

  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.signupForm = new FormGroup(
      {
        username: new FormControl('', [Validators.required, this.noSpaceAllowed]),
        email: new FormControl('', [Validators.required, Validators.email, this.noSpaceAllowed]),
        password: new FormControl('', [Validators.required, this.noSpaceAllowed]),
        confirmPassword:
          new FormControl(
            '',
            [Validators.required, this.noSpaceAllowed, this.checkPassword.bind(this)]
          )
      }
    )
  }

  noSpaceAllowed(control: FormControl): { [key: string]: boolean } | null {
    if (control.value !== null && control.value.indexOf(' ') != -1)
      return { noSpaceAllowed: true }
    return null
  }

  checkPassword(control: FormControl): { [key: string]: boolean } | null {
    const password = this.signupForm?.get('password')?.value
    if (control.value !== null && control.value !== password)
      return { passwordMismatch: true }
    return null
  }

  onSignupSubmit(): void {
    const userData = {
      username: this.signupForm.get('username')?.value,
      email: this.signupForm.get('email')?.value,
      password: this.signupForm.get('password')?.value
    }
    if (!this.signupForm.invalid) {
      this.userService.userSignup(userData)
        .pipe(
          catchError((err: HttpErrorResponse) => {
            let errMessage;
            if (err.error instanceof ErrorEvent)
              errMessage = err.error.message
            else if (err.status === 409)
              errMessage = err.error.message
            else if (err.status === 400)
              errMessage = err.error.message
            return throwError(errMessage)
          })
        )
        .subscribe(
          (data: IUser) => this.router.navigate(['/login']),
          (err: string) => this.toastr.error(err, 'Error')
        )
    }
  }
}
