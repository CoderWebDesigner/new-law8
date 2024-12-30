import { Component, inject } from '@angular/core';
import { SharedButtonComponent } from '../shared-button/shared-button.component';
import { NgOptimizedImage } from '@angular/common';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-shared-confirm-dialog',
  standalone: true,
  imports: [
    SharedButtonComponent,
    NgOptimizedImage
  ],
  templateUrl: './shared-confirm-dialog.component.html',
  styleUrl: './shared-confirm-dialog.component.scss'
})
export class SharedConfirmDialogComponent {
  _dynamicDialogConfig=inject(DynamicDialogConfig);
  _dynamicDialogRef=inject(DynamicDialogRef);
}
