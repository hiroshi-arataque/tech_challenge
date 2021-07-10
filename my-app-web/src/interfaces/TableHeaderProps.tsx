import { SetStateAction } from 'react';
import Music from '../interfaces/Music';

interface TableHeaderProps {
    rows: Array<Music>;
    headerColumns: Array<string>;
    setSongList: React.Dispatch<SetStateAction<never[]>>;
}

export default TableHeaderProps;