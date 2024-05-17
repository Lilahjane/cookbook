import { Component, inject } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import { AssignmentformComponent } from '../assignmentform/assignmentform.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';







@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrl: './school.component.scss',
  standalone: true,
  imports: [
    MatTabsModule,
    AsyncPipe,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatExpansionModule,
    MatDialogModule

  ]
})
export class SchoolComponent {
  constructor(private dialog: MatDialog) {}

  openAssignmentForm() {
    const dialogRef =this.dialog.open(AssignmentformComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  }


