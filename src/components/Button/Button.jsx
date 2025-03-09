import s from './Button.module.css';

function Button({ text }) {
  return <button className={s.btn}>{text}</button>;
}

export default Button;
