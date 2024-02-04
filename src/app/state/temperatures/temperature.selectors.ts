import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from './temperature.reducers';

export const selectTemperaturesState =
  createFeatureSelector<State>('temperatures');

export const selectAllTemperatures = createSelector(
  selectTemperaturesState,
  (state: State) => state.temperatures
);

export const selectTemperaturesError = createSelector(
  selectTemperaturesState,
  (state: State) => state.error
);
