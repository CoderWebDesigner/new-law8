import { Component, inject } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { LanguageService } from 'src/app/@core/services';

@Component({
  selector: 'app-formly-input-field',
  templateUrl: './formly-input-field.component.html',
  styleUrls: ['./formly-input-field.component.scss'],
})
export class FormlyInputFieldComponent extends FieldType<FieldTypeConfig> {
  _languageService = inject(LanguageService);
  isRtl = false;

  onClickInputBtn() {
    if (this.props["inputActionBtn"]) {
      this.props['inputActionBtn'].onClick()
    }
  }
}
