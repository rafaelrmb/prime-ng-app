import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { PatientService } from '../services/patient.service';
import { Patient } from './patient';

@Component({
  selector: 'app-patient-management',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    MultiSelectModule,
    DropdownModule,
    TagModule,
    SliderModule,
    FormsModule,
    ButtonModule,
    InputTextModule],
  templateUrl: './patient-management.component.html',
  styleUrls: ['./patient-management.component.scss']
})
export class PatientManagementComponent {
  patients: Patient[] = [];
  loading = false;
  severityLevels: string[] = ['low', 'medium', 'high', 'critical'];

  constructor(private patientService: PatientService) {
    this.patients = this.patientService.getPatients();
  }

  clear(table: Table) {
    table.clear();
  }

  getSeverity(status: string) {
    switch (status.toLowerCase()) {
      case 'low':
        return 'success';

      case 'medium':
        return 'info';

      case 'high':
        return 'warning';

      case 'critical':
        return 'danger';

      default:
        return 'N/A';
    }
  }
}
