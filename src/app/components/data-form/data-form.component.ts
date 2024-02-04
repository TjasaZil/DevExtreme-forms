import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Temperatures } from 'src/app/models/temperatures';
import { formatDate } from '@angular/common';
import * as TemperaturesActions from '../../state/temperatures/temperature.actions';
import * as fromTemperaturesSelectors from '../../state/temperatures/temperature.selectors';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
})
export class DataFormComponent implements OnInit {
  chartData$: Observable<Temperatures[]>;
  temperatures = {
    date: new Date(),
    temperature: 0,
  };
  submitButtonOptions = {
    text: 'Submit the Data',
    useSubmitBehavior: true,
  };

  constructor(private store: Store) {
    this.chartData$ = this.store.select(
      fromTemperaturesSelectors.selectAllTemperatures
    );
  }

  ngOnInit() {
    this.store.dispatch(TemperaturesActions.loadTemperatures());
  }

  formatDateForSubmission(date: Date): string {
    return formatDate(date, 'MMM d', 'en-US');
  }

  addTemperatures() {
    const formattedDate = this.formatDateForSubmission(this.temperatures.date);
    const temperatureData = {
      ...this.temperatures,
      date: formattedDate,
    };

    this.store.dispatch(
      TemperaturesActions.addTemperature({ temperature: temperatureData })
    );
  }
}
