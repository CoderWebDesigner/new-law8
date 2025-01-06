import { Component, OnInit } from '@angular/core';
import { FormBaseClass } from 'src/app/@core/classes/form-base.class';
import { FormlyConfigModule } from 'src/app/@shared/modules/formly-config/formly-config.module';

@Component({
  selector: 'app-advanced-search',
  standalone: true,
  imports: [
    FormlyConfigModule
  ],
  templateUrl: './app-advanced-search.component.html',
  styleUrl: './app-advanced-search.component.scss'
})
export class AppAdvancedSearchComponent extends FormBaseClass implements OnInit{
  ngOnInit(): void {
    this.initForm()
  }
  override initForm(): void {
    this.formlyFields=[
      {
        fieldGroupClassName:'flex',
        fieldGroup:[
          {
            type:'input',
            key:'search',
            className:' text-grey400 border-grey200 w-[260px]',
            props:{
              placeholder:'topBar.search',
              icon:'icon-search',
            }
          },
          {
            type:'button',
            props:{
              label:'topBar.advancedSearch',
              class:'font-medium text-primary text-xs px-4 py-1.5'
            }
          }
        ]
      }
    ]
  }
  override onSubmit(): void {
    throw new Error('Method not implemented.');
  }

}
