import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
})
export class DataFormComponent implements OnInit {
  successMessage: string = '';
  chartData?: any;
  dataArr?: [];

  constructor(private data: DataService) {}
  ngOnInit() {
    this.displayTemperatures();
  }

  displayTemperatures() {
    this.data.getTemperatures().subscribe((data) => {
      this.chartData = data;
    });
  }

  temperatures = {
    date: new Date(),
    temperature: 0,
  };

  submitButtonOptions = {
    text: 'Submit the Data',
    useSubmitBehavior: true,
  };

  handleSubmit = (e: any) => {
    setTimeout(() => {
      this.successMessage = 'Successfully submitted';
      //this.chartedData.push(this.temperatures);
      this.temperatures.temperature = 0;
      this.temperatures.date = new Date();
    }, 1000);

    e.preventDefault();
    setTimeout(() => {
      this.successMessage = '';
    }, 3000);
  };
}
