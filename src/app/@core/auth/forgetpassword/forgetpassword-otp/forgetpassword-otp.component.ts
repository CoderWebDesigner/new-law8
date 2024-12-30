import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { finalize } from 'rxjs';
import { API_Config } from 'src/app/@core/api/api-config/api.config';
import { FormBaseClass } from 'src/app/@core/classes/form-base.class';
import { ApiRes } from 'src/app/@core/models/apiRes-model';
import { AuthService } from 'src/app/@core/services';
import { SharedButtonComponent } from 'src/app/@shared/components/shared-button/shared-button.component';
import { FormlyConfigModule } from 'src/app/@shared/modules/formly-config/formly-config.module';

@Component({
  selector: 'app-forgetpassword-otp',
  standalone: true,
  imports: [
    FormlyConfigModule,
    SharedButtonComponent,
    TranslateModule
  ],
  templateUrl: './forgetpassword-otp.component.html',
  styleUrl: './forgetpassword-otp.component.scss'
})
export class ForgetpasswordOtpComponent extends FormBaseClass implements OnInit {
  _authService = inject(AuthService);
  ngOnInit(): void {
    this.initForm();
    // if (!this._authService.user) this._router.navigate(['/auth/login'])

  }
  override initForm(): void {
    this.formlyFields = [
      {
        key: "otp",
        type: "otp",
        props: {
          required: true,
          length: 5
        }
      }
    ]
  }
  onSubmit() {
    if (this.formly.invalid) return;
    this.isLoading = true;
    this._apiService.post(API_Config.auth.forgetPasswordValidateOtp,{
      ...this.formlyModel,
      ...this._authService.user
    }).pipe(
      finalize(() => this.isLoading = false),
      this._unsubscribe.takeUntilDestroy()
    ).subscribe({
      next: (res: ApiRes) => {
        if (res?.isSuccess) {
          this._router.navigate(['/forget-password/change-password']);
        }else{
          this._toastrNotifiService.displayError(this._languageService.getTransValue('messages.userIdOrEmailWrong'));
        }
      },
      error: err => {
        this._toastrNotifiService.displayError(this._languageService.getTransValue('messages.signInError'));
      }
    })
  }

}
