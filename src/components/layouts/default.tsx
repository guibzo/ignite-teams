import { ReactNode } from 'react'
import { View } from 'react-native'

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
	return (
		<View className='w-full border border-border bg-background text-primary-foreground  px-4 py-12 min-h-screen h-full gap-y-3 flex items-center'>
			{children}
		</View>
	)
}
