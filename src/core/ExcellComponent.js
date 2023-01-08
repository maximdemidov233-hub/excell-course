import { Domlistener } from './Domlistener';

export class ExcellComponent extends Domlistener {
    constructor($root, options={}) {
        super($root, options.listeners);
        this.$root = $root;
        this.options = options;
        
    }
    toHTML() {
        return '';
    }

    init() {
        this.addListener();
    }

    
    
}