import { EmptyList } from '@/components/empty-list'
import { Header } from '@/components/header'
import { DefaultLayout } from '@/components/layouts/default'
import { Title } from '@/components/title'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { GroupCard } from './group-card'

export const GroupsScreen = () => {
	const [groups, setGroups] = useState<string[]>([])

	return (
		<DefaultLayout>
			<Header />

			<Title
				title='Grupos'
				subtitle='jogue com o seu grupo'
			/>

			<FlatList
				data={groups}
				className='w-full'
				keyExtractor={(_, index) => index.toString()}
				contentContainerClassName='flex-1'
				ListEmptyComponent={() => (
					<EmptyList
						title='Nenhum grupo encontrado...'
						description='Que tal cadastrar o primeiro grupo?'
					/>
				)}
				renderItem={({ item }) => <GroupCard title={item} />}
			/>
		</DefaultLayout>
	)
}
