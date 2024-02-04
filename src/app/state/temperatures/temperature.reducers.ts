import { createReducer, on } from '@ngrx/store';
import * as TemperaturesActions from './temperature.actions';
import { Temperatures } from '../../models/temperatures';
import { sortTemperaturesByDate } from 'src/app/utils/sorting.utilities';

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
      temperatures: sortTemperaturesByDate(temperatures),
      error: null,
    })
  ),
  on(TemperaturesActions.loadTemperaturesFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(TemperaturesActions.addTemperatureSuccess, (state, { temperature }) => ({
    ...state,
    temperatures: sortTemperaturesByDate([...state.temperatures, temperature]),
    error: null,
  })),
  on(TemperaturesActions.addTemperatureFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
