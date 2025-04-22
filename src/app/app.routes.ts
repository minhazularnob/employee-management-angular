import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

export const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: AddEmployeeComponent },
  { path: '', component: EmployeeListComponent}, // default route
  { path: '**',  component: EmployeeListComponent } // wildcard route
];
