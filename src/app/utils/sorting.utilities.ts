// In sorting.utilities.ts
import { Temperatures } from '../models/temperatures';

export function sortTemperaturesByDate(
  temperatures: Temperatures[]
): Temperatures[] {
  return [...temperatures].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}
