import './Style.css';
import Music from '../../../interfaces/Music';
import Row from '../Row/Row';
import Header from '../Header/Header';
import TableHeaderProps from '../../../interfaces/TableHeaderProps';

function Table({ rows, headerColumns, setSongList }: TableHeaderProps) {

  return (
    <div className="Table-container">
      <Header headerColumns={headerColumns} rows={rows} setSongList={setSongList}/>
      {rows.map((row: Music, index: string | number) => (
        <Row row={row} index={index}/>
      ))}
    </div>
  );
}

export default Table;
