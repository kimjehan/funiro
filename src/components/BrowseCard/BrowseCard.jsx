import s from './BrowseCard.module.css';

function BrowseCard({ name, img }) {
  return (
    <div className={s.container}>
      <img src={img} alt={name} className={s.img} />
      <h3 className={s.text}>{name}</h3>
    </div>
  );
}

export default BrowseCard;
