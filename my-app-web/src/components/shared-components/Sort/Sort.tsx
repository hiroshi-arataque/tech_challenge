import Music from '../../../interfaces/Music';
import doubleArrow from '../../../assets/double-arrow.svg';
import upArrow from '../../../assets/up-arrow.svg';
import downArrow from '../../../assets/down-arrow.svg';

const orderColumn = (eventTarget: React.MouseEvent<HTMLDivElement, MouseEvent>, rows: Array<Music>, setSongList: React.Dispatch<any>) => {
    const order: string = eventTarget.currentTarget.getAttribute('data-order') as string;
    const key: keyof Music = eventTarget.currentTarget.getAttribute('id')?.split('-')[1].replaceAll(" ","") as keyof Music;
    const list = Array.from(rows as []);
    console.log(key);
    if (order === 'double') {
      eventTarget.currentTarget.children[1].setAttribute('src', upArrow);
      eventTarget.currentTarget.setAttribute('data-order', 'asc');
      list.sort(compareValues(key, 'asc'));
    };
    if (order === 'asc') {
      eventTarget.currentTarget.children[1].setAttribute('src', downArrow);
      eventTarget.currentTarget.setAttribute('data-order', 'desc');
      list.sort(compareValues(key, 'desc'));
    };
    if (order === 'desc') {
      eventTarget.currentTarget.children[1].setAttribute('src', upArrow);
      eventTarget.currentTarget.setAttribute('data-order', 'asc');
      list.sort(compareValues(key, 'asc'));
    };
    const imageElements: HTMLImageElement[] = Array.from(window.document.getElementById('music-list-table-heading')?.getElementsByTagName('img') as HTMLCollectionOf<HTMLImageElement>);
    imageElements.forEach(element => {
      if (eventTarget.currentTarget.children[1].getAttribute('id') !== element.getAttribute('id')) {
        element.setAttribute('src', doubleArrow);
        element.parentElement?.setAttribute('data-order', 'double');
      }
    });
    setSongList(list);
  }

  function compareValues(key: keyof Music, order : string = 'asc') {
    return function innerSort(a: Music, b: Music) {
      if (!a.hasOwnProperty(key as string) || !b.hasOwnProperty(key as string)) {
        return 0;
      }
  
      const varA: string | number = a[key];
      const varB: string | number = b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }

  export default orderColumn;