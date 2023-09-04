import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';
import { IUser } from 'src/app/shared/model/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  errorMessage: string = ''
  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  onLoginSubmit(): void {
    if (!this.loginForm.invalid) {
      this.userService.userLogin(this.loginForm.value)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            let errMessage;
            if (error.error instanceof ErrorEvent)
              errMessage = "Something went wrong";
            else if (error.status === 400)
              errMessage = error.error.message
            return throwError(errMessage)
          })
        ).subscribe(
          res => {
            localStorage.setItem('token', res.token)
            this.router.navigate(['/user/blogs'])
          },
          err => this.toastr.error(err, 'Error')
        )
    }
  }
}