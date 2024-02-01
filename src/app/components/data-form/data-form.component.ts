import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Temperatures } from 'src/app/models/temperatures';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
})
export class DataFormComponent implements OnInit {
  successMessage: string = '';
  chartData?: any;
  dataArr?: Temperatures[] = [];

  constructor(private data: DataService) {}
  ngOnInit() {
    this.displayTemperatures();
    this.dataArr = [];
  }

  formatDateForSubmission(date: Date): string {
    return formatDate(date, 'MMM d', 'en-US');
  }
  displayTemperatures() {
    this.data.getTemperatures().subscribe(
      (response) => {
        this.chartData = response;
      },
      (error) => {
        alert('Unable to get the data');
        console.log(error);
      }
    );
  }

  addTemperatures() {
    const formattedDate = this.formatDateForSubmission(this.temperatures.date);
    const temperatureData = {
      ...this.temperatures,
      date: formattedDate, // Use the formatted date
    };
    this.data.addTemperature(temperatureData).subscribe(
      (response) => {
        this.dataArr?.push(response);
      },
      (error) => {
        alert('Unable to add new data!');
        console.log(error);
      }
    );
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
