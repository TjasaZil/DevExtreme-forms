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
    { date: new Date(2024, 1, 1), temperature: 12 },
    { date: new Date(2024, 2, 1), temperature: 11 },
    { date: new Date(2024, 3, 1), temperature: 13 },
    { date: new Date(2024, 4, 1), temperature: 15 },
    { date: new Date(2024, 5, 1), temperature: 7 },
    { date: new Date(2024, 6, 1), temperature: 2 },
    { date: new Date(2024, 7, 1), temperature: -1 },
    { date: new Date(2024, 8, 1), temperature: -3 },
    { date: new Date(2024, 9, 1), temperature: 5 },
  ];
  submitButtonOptions = {
    text: 'Submit the Data',
    useSubmitBehavior: true,
  };

  handleSubmit = (e: any) => {
    setTimeout(() => {
      this.successMessage = 'Successfully submitted';
      //alert('Submitted');
    }, 1000);

    e.preventDefault();
  };
}
