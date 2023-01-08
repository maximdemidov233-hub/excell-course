import { setFnName } from '../lib/set_fn_name';

export class Domlistener {
    constructor($root, listeners) {
        this.$root = $root;
        this.listeners = listeners || [];
    }

    addListener() {
        this.listeners.forEach(metod => {
            const callback = setFnName(metod);
            if (!this[callback]) {
                const name = this.options.name || 'component';
                throw new Error(`                
                In the ${name} missing metod ${callback}
                
                `);
            }
            this[callback] = this[callback].bind(this);
            console.log(callback);
            this.$root.addEventListener(`${metod}`, this[callback]);
        });
    }

    removeListener() {
        this.$root.removeEventListener();
    }

}