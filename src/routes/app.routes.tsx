import { GroupsScreen } from '@/screens/groups'
import { NewGroupScreen } from '@/screens/new-group'
import { PlayersScreen } from '@/screens/players'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

export const AppRoutes = () => {
  return (
    <Navigator
      initialRouteName='groups'
      screenOptions={{ headerShown: false }}
    >
      <Screen
        name='groups'
        component={GroupsScreen}
      />

      <Screen
        name='newGroup'
        component={NewGroupScreen}
      />

      <Screen
        name='players'
        component={PlayersScreen}
      />
    </Navigator>
  )
}
