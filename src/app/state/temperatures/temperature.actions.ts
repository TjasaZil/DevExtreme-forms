import { createAction, props } from '@ngrx/store';
import { Temperatures } from '../../models/temperatures';

export const loadTemperatures = createAction(
  '[Temperatures] Load Temperatures'
);
export const loadTemperaturesSuccess = createAction(
  '[Temperatures] Load Temperatures Success',
  props<{ temperatures: Temperatures[] }>()
);
export const loadTemperaturesFailure = createAction(
  '[Temperatures] Load Temperatures Failure',
  props<{ error: any }>()
);

export const addTemperature = createAction(
  '[Temperatures] Add Temperature',
  props<{ temperature: Temperatures }>()
);
export const addTemperatureSuccess = createAction(
  '[Temperatures] Add Temperature Success',
  props<{ temperature: Temperatures }>()
);
export const addTemperatureFailure = createAction(
  '[Temperatures] Add Temperature Failure',
  props<{ error: any }>()
);
