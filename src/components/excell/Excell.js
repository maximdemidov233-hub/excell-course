import { $ } from '../../core/Domel';

export class Excell {
    static className = 'excell';
    constructor(selector, options) {
        this.$el = document.querySelector(selector);
        this.components = options.components || [];  
    }

    getRoot() {
        const $root = $.create('div', 'excell');  

        this.components= this.components.map(Component => {
            const $el = $.create('div', Component.className);
            const component = new Component($el);
            $el.innerHTML = `${component.toHTML()}`;
            $root.append($el);
            return component;
        });
       
        return $root;
    }

    render() {
        this.$el.append(this.getRoot());       
        this.components.forEach(component => component.init());
    }    
}