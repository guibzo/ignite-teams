import { ActivityIndicator, View } from 'react-native'

export const LoadingIndicator = () => {
	return (
		<View className='flex-1 justify-center items-center bg-background'>
			<ActivityIndicator color='#c9cfde' />
		</View>
	)
}
