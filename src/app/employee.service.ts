import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: any[] = []; // Tableau local pour stocker les employés temporairement

  constructor() {}

  addEmployee(data: any): Observable<any> {
    this.employees.push(data); // Ajouter l'employé au tableau local
    return of({ success: true }); // Simuler une réponse de succès
  }

  updateEmployee(id: number, data: any): Observable<any> {
    const index = this.employees.findIndex((emp) => emp.id === id);
    if (index !== -1) {
      this.employees[index] = { ...this.employees[index], ...data }; // Mettre à jour les détails de l'employé
      return of({ success: true }); // Simuler une réponse de succès
    }
    return of({ success: false, error: 'Employee not found' }); // Simuler une réponse d'échec
  }

  getEmployeeList(): Observable<any[]> {
    return of(this.employees); // Renvoyer la liste des employés stockés localement
  }

  deleteEmployee(id: number): Observable<any> {
    const index = this.employees.findIndex((emp) => emp.id === id);
    if (index !== -1) {
      this.employees.splice(index, 1); // Supprimer l'employé du tableau local
      return of({ success: true }); // Simuler une réponse de succès
    }
    return of({ success: false, error: 'Employee not found' }); // Simuler une réponse d'échec
  }
}
