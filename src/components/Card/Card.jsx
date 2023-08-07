import s from "./Card.module.css";
import clsx from "clsx";

function Card({ title, children, className }) {
  return (
    <div className={clsx(className, s.card)}>
      {title && <div className={s.title}>{title}</div>}
      {children}
    </div>
  );
}

export default Card;
