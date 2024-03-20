import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide: any = true;
  loginCrendentials = this.fb.group(
    {
      email: ["", Validators.required],
    }
  )
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  routeTo() {
    this.router.navigate(['auth/otp']);
  }

}
