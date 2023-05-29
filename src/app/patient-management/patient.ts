export interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  address: string;
  photoURL: string;
  phone?: string;
  email?: string;
  emergencyContact: string;
  disease: string;
  checkedInAt: Date;
  checkedOutAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  riskFactor: string;
  healthPlan: string | 'SUS';
}
