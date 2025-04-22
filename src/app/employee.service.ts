import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employees: { name: string, email: string, position: string }[] = [];

  constructor() {}

  // সকল এমপ্লয়ি ফেরত দেয় (কপি করে যাতে সরাসরি মিউট না হয়)
  getEmployees() {
    return [...this.employees];
  }

  // নতুন এমপ্লয়ি যোগ করে
  addEmployee(employee: { name: string, email: string, position: string }) {
    this.employees.push(employee);
  }

  // নির্দিষ্ট ইনডেক্স থেকে এমপ্লয়ি মুছে ফেলে
  deleteEmployee(index: number) {
    this.employees.splice(index, 1);
  }

  // নির্দিষ্ট ইনডেক্সে এমপ্লয়ি আপডেট করে
  updateEmployee(index: number, updatedEmployee: { name: string, email: string, position: string }) {
    if (index >= 0 && index < this.employees.length) {
      this.employees[index] = { ...updatedEmployee };
    }
  }
}
