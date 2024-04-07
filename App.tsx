import { Home } from '@/screens/home'
import { StatusBar } from 'react-native'
import './global.css'

export default function App() {
	return (
		<>
			<StatusBar
				barStyle='light-content'
				backgroundColor='transparent'
				translucent
			/>
			<Home />
		</>
	)
}
