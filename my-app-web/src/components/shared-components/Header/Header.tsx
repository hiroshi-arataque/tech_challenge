import './Style.css';
import doubleArrow from '../../../assets/double-arrow.svg';
import sort from '../Sort/Sort';
import TableHeaderProps from '../../../interfaces/TableHeaderProps';

function Header({ headerColumns, rows, setSongList }: TableHeaderProps) {

    return (
        <div id="music-list-table-heading" className="Table-heading">
            {headerColumns.map((header, index) => (
                <div id={`header-${header}-${index}`} data-order={'double'} className="Table-column" key={`header-${header}-${index}`} onClick={e => sort(e, rows, setSongList)}>
                    <span>{header}</span>
                    <img id={`icon-${header}-${index}`} src={doubleArrow} className="Table-icon" alt="arrow" />
                </div>
            ))}
        </div>
    );
}

export default Header;
