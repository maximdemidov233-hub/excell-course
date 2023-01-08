import { ExcellComponent } from '@core/ExcellComponent';
import { createTable } from '@/components/table/table.template';

export class Table extends ExcellComponent {
    static className = 'excell__table';

    toHTML() {
        return createTable(20);
    }
}
