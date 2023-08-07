import s from './PostCard.module.css'
import clsx from 'clsx'

function PostCard({ title, date, price, className, color = 'salary' }) {
	return (
		<div
			className={clsx(className, s.card, {
				[s.blue]: color === 'salary',
				[s.yellow]: color === 'food',
				[s.orange]: color === 'orange',
			})}
		>
			<div className={s.title}>{title}</div>
			<div className={s.footer}>
				<div className={s.date}>{date}</div>
				<div className={s.price}>{price}$</div>
			</div>
		</div>
	)
}

export default PostCard
