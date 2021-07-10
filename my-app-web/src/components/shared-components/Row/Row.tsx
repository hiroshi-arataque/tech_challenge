import './Style.css';
import Music from '../../../interfaces/Music';
import Cell from '../Cell/Cell';

interface props {
    row: Music;
    index: string | number;
}

function Row({ row, index }: props) {

    return (
        <div className="Table-row" key={`row-${index}`}>
            <Cell index={index} header={'song'} cell={row.song} />
            <Cell index={index} header={'artist'} cell={row.artist} />
            <Cell index={index} header={'song-release-date'} cell={row.songReleaseDate} />
            <Cell index={index} header={'play-count'} cell={row.playCount} />
            <Cell index={index} header={'metric-A'} cell={row.metricA} />
            <Cell index={index} header={'metric-B'} cell={row.metricB} />
            <Cell index={index} header={'metric-C'} cell={row.metricC} />
            <Cell index={index} header={'metric-D'} cell={row.metricD} />
            <Cell index={index} header={'metric-E'} cell={row.metricE} />
            <Cell index={index} header={'metric-F'} cell={row.metricF} />
            <Cell index={index} header={'metric-G'} cell={row.metricG} />
            <Cell index={index} header={'metric-H'} cell={row.metricH} />
            <Cell index={index} header={'metric-I'} cell={row.metricI} />
            <Cell index={index} header={'metric-J'} cell={row.metricJ} />
            <Cell index={index} header={'metric-K'} cell={row.metricK} />
            <Cell index={index} header={'metric-L'} cell={row.metricL} />
            <Cell index={index} header={'metric-M'} cell={row.metricM} />
            <Cell index={index} header={'metric-N'} cell={row.metricN} />
            <Cell index={index} header={'metric-O'} cell={row.metricO} />
            <Cell index={index} header={'metric-P'} cell={row.metricP} />
        </div>
    );
}

export default Row;
