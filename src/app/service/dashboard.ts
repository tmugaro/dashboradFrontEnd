import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-vitals',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class VitalsComponent {
  @Input() heartRate: any;
  @Input() bloodPressure: any;
  @Input() respiratoryRate: any;
  @Input() temperature: any;

  getHeartRateAlert(): string {
    if (this.heartRate < 60) {
      return 'Low heart rate detected. Please consult your doctor.';
    } else if (this.heartRate > 100) {
      return 'High heart rate detected. Please consult your doctor.';
    } else {
      return '';
    }
  }

  getBloodPressureAlert(): string {
    const [systolic, diastolic] = this.bloodPressure.split('/');
    if (systolic < 90 || diastolic < 60) {
      return 'Low blood pressure detected. Please consult your doctor.';
    } else if (systolic > 140 || diastolic > 90) {
      return 'High blood pressure detected. Please consult your doctor.';
    } else {
      return '';
    }
  }

  getRespiratoryRateAlert(): string {
    if (this.respiratoryRate < 12) {
      return 'Low respiratory rate detected. Please consult your doctor.';
    } else if (this.respiratoryRate > 20) {
      return 'High respiratory rate detected. Please consult your doctor.';
    } else {
      return '';
    }
  }

  getTemperatureAlert(): string {
    if (this.temperature < 36) {
      return 'Low temperature detected. Please consult your doctor.';
    } else if (this.temperature > 38) {
      return 'High temperature detected. Please consult your doctor.';
    } else {
      return '';
    }
  }
}