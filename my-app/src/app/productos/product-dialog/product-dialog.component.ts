import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { NgIf } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-product-dialog',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    NgIf,
    MatButton,
    ReactiveFormsModule,
  ],
  templateUrl: './product-dialog.component.html',
  styleUrl: './product-dialog.component.css',
})
export class ProductDialogComponent {
  data = inject(MAT_DIALOG_DATA);
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProductDialogComponent>,
    private productoService: ProductoService
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.minLength(4)],
      imgUrl: [''],
      isOferta: [false],
      porcentajeOferta: [0],
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const newProduct = {
        id: Date.now(),
        ...this.productForm.value,
      };
      this.productoService.addProduct(newProduct);
      this.dialogRef.close(newProduct);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
