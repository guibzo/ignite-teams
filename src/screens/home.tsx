import { DefaultLayout } from '@/components/layouts/default'
import { Input } from '@/components/ui/input'
import { Text } from 'react-native'

export const Home = () => {
	return (
		<DefaultLayout>
			<Text className='text-primary-foreground'>
				<Text className='text-3xl'>Home</Text>
			</Text>

			<Input placeholder={`Digite seu nome aqui`} />
		</DefaultLayout>
	)
}
