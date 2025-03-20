import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-home',
  providers: [provideNativeDateAdapter()],
  imports: [
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatTimepickerModule,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
