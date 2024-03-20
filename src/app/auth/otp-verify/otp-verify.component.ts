import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-otp-verify',
  templateUrl: './otp-verify.component.html',
  styleUrls: ['./otp-verify.component.scss']
})
export class OtpVerifyComponent {
  // verification_code = new FormControl('', [Validators.required]);
  loginCrendentials = this.fb.group(
    {
      otp: ["", [Validators.required, Validators.minLength(6)]],
    }
  )
  constructor(private router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  routeTo() {
    this.router.navigate(['../../dashboard']);
  }

  backToLogin() {
    this.router.navigate(['auth/login']);
  }

  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 43) {
      return false;
    }
    return true;
  }
}
