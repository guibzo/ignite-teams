import { EmptyList } from '@/components/empty-list'
import { Header } from '@/components/header'
import { DefaultLayout } from '@/components/layouts/default'
import { Title } from '@/components/title'
import { Button } from '@/components/ui/button'
import { fetchAllGroups } from '@/storage/group/fetch-all-groups'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useCallback, useState } from 'react'
import { FlatList, Text } from 'react-native'
import { GroupCard } from './group-card'

export const GroupsScreen = () => {
  const [groups, setGroups] = useState<string[]>([])

  const { navigate } = useNavigation()

  useFocusEffect(
    useCallback(() => {
      const fetchGroups = async () => {
        try {
          await fetchAllGroups().then((data) => setGroups(data))
        } catch (err) {
          console.error(err)
        }
      }

      fetchGroups()
    }, [groups])
  )

  return (
    <DefaultLayout>
      <Header />

      <Title
        title='Grupos'
        subtitle='jogue com o seu grupo'
      />

      <FlatList
        data={groups}
        className='w-full mb-3'
        keyExtractor={(_, index) => index.toString()}
        contentContainerClassName=''
        ListEmptyComponent={() => (
          <EmptyList
            title='Nenhum grupo encontrado...'
            description='Que tal cadastrar o primeiro grupo?'
          />
        )}
        renderItem={({ item, index }) => (
          <GroupCard
            key={index}
            title={item}
          />
        )}
      />

      <Button
        variant='outline'
        onPress={() => navigate('newGroup')}
      >
        <Text className='uppercase text-foreground text-sm'>Criar novo grupo</Text>
      </Button>
    </DefaultLayout>
  )
}
