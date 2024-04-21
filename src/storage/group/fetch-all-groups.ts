import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION_KEY } from '../storage-config'

export const fetchAllGroups = async () => {
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION_KEY)

    const groups: string[] = storage ? JSON.parse(storage) : []

    return groups
  } catch (err) {
    throw err
  }
}
