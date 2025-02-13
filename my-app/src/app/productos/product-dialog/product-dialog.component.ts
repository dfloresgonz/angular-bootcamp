import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-product-dialog',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './product-dialog.component.html',
  styleUrl: './product-dialog.component.css',
})
export class ProductDialogComponent {
  data = inject(MAT_DIALOG_DATA);
}
