import { LucideSearchX } from '@/components/icons'
import { Text, View } from 'react-native'

type EmptyListProps = {
	title: string
	description: string
}

export const EmptyList = ({ title, description }: EmptyListProps) => {
	return (
		<View className='flex-1 justify-center items-center'>
			<LucideSearchX
				className='size-8 text-primary'
				width={32}
				height={32}
			/>

			<View className='w-full items-center mt-4'>
				<Text className='text-xl font-bold text-foreground'>{title}</Text>

				<Text className='text-base text-muted-foreground'>{description}</Text>
			</View>
		</View>
	)
}
