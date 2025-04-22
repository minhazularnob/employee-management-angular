import { Component, ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms'; // নতুন যুক্ত
import { MatDialog } from '@angular/material/dialog';

import { EmployeeService } from '../employee.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, FormsModule], // FormsModule যোগ করলাম
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
  encapsulation: ViewEncapsulation.None 
})
export class EmployeeListComponent {
  employees: { name: string; email: string; position: string }[] = [];
  displayedColumns: string[] = ['name', 'email', 'position', 'actions'];

  editIndex: number | null = null;

  constructor(private employeeService: EmployeeService, private dialog: MatDialog) {}

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }

  deleteEmployee(index: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // If user confirmed, delete the employee
        this.employeeService.deleteEmployee(index);
        this.employees = this.employeeService.getEmployees();
      }
    });
  }

  editEmployee(index: number) {
    this.editIndex = index;
  }

  saveEdit() {
    if (this.editIndex !== null) {
      const updatedEmployee = this.employees[this.editIndex];
      this.employeeService.updateEmployee(this.editIndex, updatedEmployee);
      this.employees = this.employeeService.getEmployees();
      this.editIndex = null;
    }
  }

  cancelEdit() {
    this.employees = this.employeeService.getEmployees(); // আগের ডেটা রিস্টোর
    this.editIndex = null;
  }
}
