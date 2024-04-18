import { LucideUser, LucideX } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Text, View } from 'react-native'

type PlayerCardProps = {
	name: string
}

export const PlayerCard = ({ name }: PlayerCardProps) => {
	return (
		<Card className='w-full bg-secondary rounded-md flex flex-row items-center'>
			<CardContent className='w-full flex flex-row justify-between items-center px-3 py-2 gap-3'>
				<View className='flex-1 flex-row gap-3 items-center'>
					<LucideUser
						className='size-6 text-secondary-foreground fill-secondary-foreground'
						width={24}
						height={24}
					/>

					<Text className='text-secondary-foreground text-base'>{name}</Text>
				</View>

				<Button
					variant='ghost'
					className='p-0'
					size='icon'
				>
					<LucideX className='text-destructive' />
				</Button>
			</CardContent>
		</Card>
	)
}
