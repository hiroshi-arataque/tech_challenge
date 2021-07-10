import {useEffect, useState} from 'react';
import './Style.css';
import Table from '../../shared-components/Table/Table';
import SongListService from '../../../services/songListService';

function SongList() {
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    SongListService.getSongList()
        .then(songList => {
          if (songList) {
            setSongList(songList.data);
          }
        })
        .catch(error => {
          console.log(error);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Song List</h1>
      <Table
        rows={songList}
        headerColumns={['song','artist','song Release Date','play Count','metric A','metric B','metric C','metric D','metric E','metric F','metric G','metric H','metric I','metric J','metric K','metric L','metric M','metric N','metric O','metric P']} 
        setSongList={setSongList}
      />
    </div>
  );
}

export default SongList;
