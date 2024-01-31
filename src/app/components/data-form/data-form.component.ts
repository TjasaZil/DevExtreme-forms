import { Component } from '@angular/core';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
})
export class DataFormComponent {
  successMessage: string = '';
  temperatures = {
    date: new Date(),
    temperature: 0,
  };
  chartedData = [
    { date: new Date(2024, 0, 1), temperature: 10 },
    { date: new Date(2024, 0, 2), temperature: 12 },
    { date: new Date(2024, 0, 3), temperature: 11 },
    { date: new Date(2024, 0, 4), temperature: 13 },
    { date: new Date(2024, 0, 5), temperature: 15 },
    { date: new Date(2024, 0, 6), temperature: 7 },
    { date: new Date(2024, 0, 7), temperature: 2 },
    { date: new Date(2024, 0, 8), temperature: -1 },
    { date: new Date(2024, 0, 9), temperature: -3 },
    { date: new Date(2024, 0, 10), temperature: -5 },
    { date: new Date(2024, 0, 11), temperature: -3 },
    { date: new Date(2024, 0, 12), temperature: -2 },
    { date: new Date(2024, 0, 13), temperature: 1 },
    { date: new Date(2024, 0, 14), temperature: 3 },
    { date: new Date(2024, 0, 15), temperature: -5 },
    { date: new Date(2024, 0, 16), temperature: 5 },
    { date: new Date(2024, 0, 17), temperature: 6 },
    { date: new Date(2024, 0, 18), temperature: 3 },
    { date: new Date(2024, 0, 19), temperature: 6 },
    { date: new Date(2024, 0, 20), temperature: 10 },
  ];
  submitButtonOptions = {
    text: 'Submit the Data',
    useSubmitBehavior: true,
  };

  handleSubmit = (e: any) => {
    setTimeout(() => {
      this.successMessage = 'Successfully submitted';
      this.chartedData.push(this.temperatures);
      this.temperatures.temperature = 0;
      this.temperatures.date = new Date();
    }, 1000);

    e.preventDefault();
    setTimeout(() => {
      this.successMessage = '';
    }, 3000);
  };
}
