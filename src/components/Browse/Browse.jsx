import BrowseCard from '../BrowseCard/BrowseCard';
import Button from '../Button/Button';
import s from './Browse.module.css';
import img_diving from '/assets/images/browse-card-1.png';
import img_living from '/assets/images/browse-card-2.png';
import img_bedroom from '/assets/images/browse-card-3.png';

function Browse() {
  return (
    <section>
      <div className={s.tema}>
        <h1>Browse The Range</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className={s.cards}>
        <BrowseCard name='Diving' img={img_diving} />
        <BrowseCard name='Living' img={img_living} />
        <BrowseCard name='Bedroom' img={img_bedroom} />
      </div>
      <Button text={'Add to cart'} />
      <Button text={'Hello world'} />
      <Button text={'Hi!'} />
    </section>
  );
}
export default Browse;
