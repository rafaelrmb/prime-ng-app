import { Injectable } from '@angular/core';
import { Patient } from '../patient-management/patient';

const patients: Patient[] = [
  {
    id: 1,
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    address: '123 Main St',
    photoURL: 'https://thispersondoesnotexist.xyz/img/3458.jpg',
    phone: '123-456-7890',
    email: 'johndoe@example.com',
    emergencyContact: 'Jane Doe',
    disease: 'Diabetes',
    checkedInAt: new Date('2023-05-29T09:00:00Z'),
    checkedOutAt: new Date('2023-05-29T16:30:00Z'),
    createdAt: new Date('2023-05-01T08:00:00Z'),
    updatedAt: new Date('2023-05-28T15:45:00Z'),
    riskFactor: 'High',
    healthPlan: 'SUS'
  },
  {
    id: 2,
    name: 'Alice Smith',
    age: 35,
    gender: 'Female',
    address: '456 Elm St',
    photoURL: 'https://thispersondoesnotexist.xyz/img/3605.jpg',
    phone: '987-654-3210',
    email: 'alice.smith@example.com',
    emergencyContact: 'Bob Smith',
    disease: 'Hypertension',
    checkedInAt: new Date('2023-05-29T10:30:00Z'),
    createdAt: new Date('2023-05-05T13:15:00Z'),
    updatedAt: new Date('2023-05-29T08:20:00Z'),
    riskFactor: 'Moderate',
    healthPlan: 'Private'
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    age: 28,
    gender: 'Female',
    address: '789 Oak St',
    photoURL: 'https://thispersondoesnotexist.xyz/img/3917.jpg',
    phone: '555-123-4567',
    email: 'sarah.johnson@example.com',
    emergencyContact: 'David Johnson',
    disease: 'Asthma',
    createdAt: new Date('2023-05-10T17:30:00Z'),
    updatedAt: new Date('2023-05-28T09:10:00Z'),
    riskFactor: 'Low',
    healthPlan: 'Private'
  },
  {
    id: 4,
    name: 'Jane Doe',
    age: 23,
    gender: 'Female',
    address: '321 Oak St',
    photoURL: 'https://thispersondoesnotexist.xyz/img/3344.jpg',
    phone: '123-456-7890',
    email: 'johndoe@example.com',
    emergencyContact: 'Jane Doe',
    disease: 'Diabetes',
    createdAt: new Date('2023-05-01T08:00:00Z'),
    updatedAt: new Date('2023-05-28T15:45:00Z'),
    riskFactor: 'Critical',
    healthPlan: 'SUS'
  }
];

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor() { }

  getPatients(): Patient[] {
    return patients;
  }
}
