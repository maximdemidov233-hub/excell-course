import { Excell } from './components/excell/Excell';
import { Formula } from './components/formula/Formula';
import { Header } from './components/header/Header';
import { Table } from './components/table/Table';
import { Toolbar } from './components/toolbar/Toolbar';
import './css/index.scss';

const excell = new Excell('#app', {
    components: [Header, Toolbar, Formula, Table ],
});

excell.render();
