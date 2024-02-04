import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import * as TemperaturesActions from './temperature.actions';
import * as fromTemperaturesSelectors from './temperature.selectors';
import { Store, select } from '@ngrx/store';
import { formatDate } from '@angular/common';

@Injectable()
export class TemperaturesEffects {
  // At the top of your temperatures.effects.ts file

  loadTemperatures$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TemperaturesActions.loadTemperatures),
      mergeMap(() =>
        this.dataService.getTemperatures().pipe(
          map((temperatures) =>
            TemperaturesActions.loadTemperaturesSuccess({ temperatures })
          ),
          catchError((error) =>
            of(TemperaturesActions.loadTemperaturesFailure({ error }))
          )
        )
      )
    )
  );

  addTemperature$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TemperaturesActions.addTemperature),
      withLatestFrom(
        this.store.pipe(select(fromTemperaturesSelectors.selectAllTemperatures))
      ),
      mergeMap(([action, temperatures]) => {
        const formattedDate = formatDate(
          action.temperature.date,
          'MMM d',
          'en-US'
        );
        const dateExists = temperatures.some(
          (temp) => formatDate(temp.date, 'MMM d', 'en-US') === formattedDate
        );

        if (dateExists) {
          return of(
            TemperaturesActions.addTemperatureFailure({
              error: 'Temperature for this date already exists.',
            })
          );
        } else {
          const temperatureData = {
            ...action.temperature,
            date: formattedDate,
          };

          return this.dataService.addTemperature(temperatureData).pipe(
            map((newTemperature) => {
              return TemperaturesActions.addTemperatureSuccess({
                temperature: newTemperature,
              });
            }),
            catchError((error) =>
              of(
                TemperaturesActions.addTemperatureFailure({
                  error: 'Unable to add new data!',
                })
              )
            )
          );
        }
      })
    )
  );

  constructor(
    private actions$: Actions,
    private dataService: DataService,
    private store: Store
  ) {}
}
