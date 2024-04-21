import { AppError } from '@/utils/app-error'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION_KEY } from '../storage-config'
import { fetchAllGroups } from './fetch-all-groups'

export const createGroup = async (name: string) => {
  try {
    const currentGroupsStorage = await fetchAllGroups()

    const groupAlreadyExists = currentGroupsStorage.includes(name)
    if (groupAlreadyExists) {
      throw new AppError('Já existe um grupo cadastrado com esse nome.')
    }

    const newGroupsStorage = JSON.stringify([...currentGroupsStorage, name])

    await AsyncStorage.setItem(GROUP_COLLECTION_KEY, newGroupsStorage)
  } catch (err) {
    throw err
  }
}
