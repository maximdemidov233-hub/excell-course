import { ExcellComponent } from '../../core/ExcellComponent';

export class Formula extends ExcellComponent {
    static className = 'excell__formula';
    constructor($root) {
        super($root, {
            name: Formula.className,
            listeners: ['input']
        });

        console.log(this.options);
    }

    toHTML() {
        return `
            <div class="info">fx</div>
            <div class="input" contenteditable spellcheck="false"></div>        
        `;
    }

    onInput(e) {
        console.log('onInput', e.target.textContent);
    }

    // onClick() {
    //     console.log('onClick');
    // }

   
}