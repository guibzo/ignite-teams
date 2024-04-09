import logoImg from '@/assets/logo.png'
import { LucideChevronLeft } from '@/components/icons'
import { Image, TouchableOpacity, View } from 'react-native'

type HeaderProps = {
	showBackButton?: boolean
}

export const Header = ({ showBackButton = false }: HeaderProps) => {
	return (
		<View className='w-full flex-row items-center justify-center'>
			{showBackButton && (
				<TouchableOpacity className='flex-1'>
					<LucideChevronLeft className='size-8 text-primary' />
				</TouchableOpacity>
			)}

			<Image
				width={46}
				height={55}
				source={logoImg}
			/>
		</View>
	)
}
