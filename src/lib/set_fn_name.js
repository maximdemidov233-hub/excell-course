import { capitalize } from './capitalize';

export function setFnName(string) {
    if (typeof string !== 'string') {
        return '';
    }
    return 'on' + capitalize(string);

}