import { createReducer, on } from '@ngrx/store';
import * as TemperaturesActions from './temperature.actions';
import { Temperatures } from '../../models/temperatures';

export interface State {
  temperatures: Temperatures[];
  error: any;
}

export const initialState: State = {
  temperatures: [],
  error: null,
};

export const temperaturesReducer = createReducer(
  initialState,
  on(
    TemperaturesActions.loadTemperaturesSuccess,
    (state, { temperatures }) => ({
      ...state,
      temperatures,
      error: null,
    })
  ),
  on(TemperaturesActions.loadTemperaturesFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(TemperaturesActions.addTemperatureSuccess, (state, { temperature }) => {
    const updatedTemperatures = [...state.temperatures, temperature].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    return {
      ...state,
      temperatures: updatedTemperatures,
      error: null,
    };
  }),
  on(TemperaturesActions.addTemperatureFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
