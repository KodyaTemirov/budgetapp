import s from './Button.module.css'
import clsx from 'clsx'

function Button({ type = 'gray', onClick, className, children }) {
	return (
		<button
			onClick={onClick}
			className={clsx(className, s.button, {
				[s.gray]: type === 'gray',
				[s.blue]: type === 'blue',
			})}
		>
			{children}
		</button>
	)
}

export default Button
