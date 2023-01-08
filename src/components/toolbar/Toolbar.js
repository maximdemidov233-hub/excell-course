import { ExcellComponent } from '../../core/ExcellComponent';

export class Toolbar extends ExcellComponent {
    static className = 'excell__toolbar';
    toHTML() {
        return `
        <div class="icons-button">
                    <i class="material-icons">
                        format_bold
                    </i>
        </div>
        <div class="icons-button">
            <i class="material-icons">
                format_italic
            </i>
        </div>
        <div class="icons-button">
            <i class="material-icons">
                format_underlined
            </i>
        </div>
        <div class="icons-button">
            <i class="material-icons">
                format_align_left
            </i>
        </div>
        <div class="icons-button">
            <i class="material-icons">
                format_align_center
            </i>
        </div>
        <div class="icons-button">
            <i class="material-icons">
                format_align_right
            </i>
        </div>
        `;
    }
}