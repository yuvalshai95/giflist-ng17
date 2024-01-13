import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, MatToolbarModule, MatIconModule, MatFormFieldModule, MatInputModule],
  selector: 'app-search-bar',
  template: `
    <mat-toolbar>
      <mat-form-field appearance="outline">
        <input
          matInput
          placeholder="Enter subreddit text here e.g: funny"
          type="text"
          [formControl]="subredditFormControl"
        />
        <mat-icon matSuffix>search</mat-icon>
      </mat-form-field>
    </mat-toolbar>
  `,
  styles: [
    `
      mat-toolbar {
        height: 80px;
      }

      mat-form-field {
        width: 100%;
        padding-top: 20px;
      }
    `,
  ],
})
export class SearchBarComponent {
  @Input({ required: true }) subredditFormControl!: FormControl;
}
