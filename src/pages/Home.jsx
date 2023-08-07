import Button from '../components/Button'
import Card from '../components/Card'
import PostCard from '../components/PostCard'
import { useState } from 'react'
import Select from 'react-select'
import ReactEcharts from 'echarts-for-react'

import s from './Home.module.css'
const defData = [
	{
		title: 'Зарплата',
		categories: {
			value: 'salary',
			label: 'Зарплата',
		},
		date: '7.7.\n    2023',
		price: '500',
		color: 'salary',
		type: {
			value: 'income',
			label: 'Доход',
		},
	},
	{
		title: 'Еда',
		categories: {
			value: 'food',
			label: 'Еда',
		},
		date: '7.7.\n    2023',
		price: '500',
		color: 'food',
		type: {
			value: 'income',
			label: 'Доход',
		},
	},
	{
		title: 'Еда',
		categories: {
			value: 'food',
			label: 'Еда',
		},
		date: '7.7.\n    2023',
		price: '500',
		color: 'food',
		type: {
			value: 'income',
			label: 'Доход',
		},
	},
]

const categories = [
	{ value: 'salary', label: 'Зарплата' },
	{ value: 'food', label: 'Еда' },
	{ value: 'deposit', label: 'Депозит' },
]

const fType = [
	{ value: 'income', label: 'Доход' },
	{ value: 'expenses', label: 'Расход' },
]

function Home() {
	const [selectType, setSelectType] = useState('chocolate')
	const [category, setCategory] = useState('')
	const [value, setValue] = useState('')

	const [data, setData] = useState(defData)

	const getDate = () => {
		const currentDate = new Date()
		return `${currentDate.getDate()}.${currentDate.getMonth()}.
    ${currentDate.getFullYear()}`
	}

	const changeTypeHandler = choise => {
		setSelectType(choise)
	}

	const changeCategoryHandler = choise => {
		setCategory(choise)
	}

	const saveHandler = () => {
		const newItem = {
			title: category.label,
			categories: category,
			date: getDate(),
			price: value,
			color: category.value,
			type: selectType,
		}
		if (value) {
			setData([...data, newItem])
		}
		setValue('')
	}

	const changeValueHandler = e => {
		setValue(e.currentTarget.value)
	}

	const clearHandler = () => {
		setValue('')
		setSelectType('')
		setCategory('')
	}

	console.log(data)
	const filterIncomeData = data
		.filter(item => item.type.value === 'income')
		.map(item => {
			return { name: item.title, value: item.price }
		})

	console.log(filterIncomeData)
	return (
		<div className={s.container}>
			<div className={s.sidebar}>
				<Card>
					<div className={s.lines}>
						<div className={s.lineCard}>
							<div className={s.lineTitle}>Дата:</div> {getDate()}
						</div>
						<div className={s.lineCard}>
							<div className={s.lineTitle}>Тип:</div>
							<Select
								options={fType}
								onChange={changeTypeHandler}
								className={s.dropdown}
								placeholder='Тип...'
							/>
						</div>
						<div className={s.lineCard}>
							<div className={s.lineTitle}>Категория:</div>
							<Select
								options={categories}
								onChange={changeCategoryHandler}
								className={s.dropdown}
								placeholder='Категория...'
							/>
						</div>
						<div className={s.lineCard}>
							<div className={s.lineTitle}>Сумма:</div>
							<input
								type='text'
								value={value}
								className={s.input}
								placeholder='Сумма...'
								onChange={changeValueHandler}
							/>
						</div>
					</div>
					<div className={s.footerForm}>
						<Button type='gray' onClick={clearHandler}>
							Очистить
						</Button>
						<Button type='blue' onClick={saveHandler}>
							Сохранить
						</Button>
					</div>
				</Card>

				<Card className={s.postCards}>
					{data.map(({ title, price, date, color }, index) => {
						return (
							<PostCard
								title={title}
								price={price}
								date={date}
								color={color}
								key={index}
							/>
						)
					})}
				</Card>
			</div>
			<ReactEcharts
				option={{
					tooltip: {
						trigger: 'item',
					},
					legend: {
						top: '5%',
						left: 'center',
					},
					series: [
						{
							name: 'Access From',
							type: 'pie',
							radius: ['40%', '70%'],
							avoidLabelOverlap: false,
							label: {
								show: false,
								position: 'center',
							},
							emphasis: {
								label: {
									show: true,
									fontSize: 40,
									fontWeight: 'bold',
								},
							},
							labelLine: {
								show: false,
							},
							data: filterIncomeData,
						},
					],
				}}
			/>
		</div>
	)
}

export default Home
