import { LucideUsers } from '@/components/icons'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

type GroupCardProps = TouchableOpacityProps & {
  title: string
}

export const GroupCard = ({ title, ...props }: GroupCardProps) => {
  return (
    <TouchableOpacity
      {...props}
      className='w-full h-[92px] bg-secondary rounded-md flex-row items-center p-6 mb-3'
    >
      <LucideUsers
        className='size-8 text-secondary-foreground mr-5 fill-secondary-foreground'
        width={24}
        height={24}
      />

      <Text className='text-secondary-foreground text-base'>{title}</Text>
    </TouchableOpacity>
  )
}
