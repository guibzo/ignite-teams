import { ReactNode } from 'react'
import { StatusBar, View } from 'react-native'
import { LoadingIndicator } from '../loading-indicator'

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
	const loading = false

	return (
		<>
			{loading ? (
				<LoadingIndicator />
			) : (
				<View className='w-full antialiased border border-border bg-background text-primary-foreground  px-4 py-12 flex-1 h-full gap-y-3 flex items-center'>
					<StatusBar
						barStyle={'light-content'}
						backgroundColor={'transparent'}
						translucent
					/>

					{children}
				</View>
			)}
		</>
	)
}
