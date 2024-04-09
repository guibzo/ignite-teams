import { Text, View } from 'react-native'

export const Title = ({ title, subtitle }: { title: string; subtitle: string }) => {
	return (
		<View className='w-full items-center my-8'>
			<Text className='text-2xl font-bold text-foreground'>{title}</Text>

			<Text className='text-base text-muted-foreground'>{subtitle}</Text>
		</View>
	)
}
