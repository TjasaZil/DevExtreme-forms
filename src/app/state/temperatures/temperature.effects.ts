import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import * as TemperaturesActions from './temperature.actions';

@Injectable()
export class TemperaturesEffects {
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
      mergeMap(({ temperature }) =>
        this.dataService.addTemperature(temperature).pipe(
          map((temperature) =>
            TemperaturesActions.addTemperatureSuccess({ temperature })
          ),
          catchError((error) =>
            of(TemperaturesActions.addTemperatureFailure({ error }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private dataService: DataService) {}
}
