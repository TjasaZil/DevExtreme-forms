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
  chartData?: any;
  dataArr?: Temperatures[] = [];
  temperatures = {
    date: new Date(),
    temperature: 0,
  };

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

    this.data.getTemperatures().subscribe(
      (allTemperatures: Temperatures[]) => {
        const dateExists = allTemperatures.some(
          (temp) => formatDate(temp.date, 'MMM d', 'en-US') === formattedDate
        );

        if (!dateExists) {
          const temperatureData = {
            ...this.temperatures,
            date: formattedDate,
          };

          this.data.addTemperature(temperatureData).subscribe(
            (response) => {
              this.dataArr?.push(response);
              this.displayTemperatures();
            },
            (error) => {
              alert('Unable to add new data!');
              console.log(error);
            }
          );
        } else {
          alert('Temperature for this date already exists.');
        }
      },
      (error) => {
        alert('Unable to check existing dates');
        console.log(error);
      }
    );
  }

  submitButtonOptions = {
    text: 'Submit the Data',
    useSubmitBehavior: true,
  };
}
