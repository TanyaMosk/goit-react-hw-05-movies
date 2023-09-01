import { getYear } from 'date-fns'

export const takeYear = (date) => {
    const result = getYear(new Date(date));
    return result;
}

export const fixedNumber = (number) => number.toFixed(1);
