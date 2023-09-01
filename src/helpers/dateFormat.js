import { getYear } from 'date-fns'

export const takeYear = (date) => {
    const result = getYear(new Date(date));
    return result;
}


    
   
