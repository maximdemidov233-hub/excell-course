import { ExcellComponent } from '../../core/ExcellComponent';

export class Header extends ExcellComponent {
    static className = 'excell__header';

    toHTML() {
        return `
            <input type="text" class="title" value="Новая таблица">
            <div class="icons">
                <div class="icons-button">
                    <i class="material-icons">
                        exit_to_app
                    </i>
                </div>
                <div class="icons-button">
                    <i class="material-icons">
                        delete
                    </i>
                </div>
            </div>     
        `;
    }
}