import logoImg from '@/assets/logo.png'
import { LucideChevronLeft } from '@/components/icons'
import { useNavigation } from '@react-navigation/native'
import { Image, TouchableOpacity, View } from 'react-native'

type HeaderProps = {
  showBackButton?: boolean
}

export const Header = ({ showBackButton = false }: HeaderProps) => {
  const { navigate } = useNavigation()

  return (
    <View className='w-full flex-row items-center justify-center'>
      {showBackButton && (
        <TouchableOpacity
          onPress={() => navigate('groups')}
          className='flex-1'
        >
          <LucideChevronLeft className='size-8 text-foreground' />
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
