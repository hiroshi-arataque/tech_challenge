import './Style.css';

interface props {
    header : string,
    cell: string | number;
    index: string | number;
}

function Cell({ header, cell, index }: props) {

    return (
        <>
        <div className="Table-column" key={`cell-${header}-${index}`}>{cell}</div>
        </>
    );
}

export default Cell;
