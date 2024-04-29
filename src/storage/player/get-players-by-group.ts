import AsyncStorage from '@react-native-async-storage/async-storage'
import { PLAYER_COLLECTION_KEY } from '../storage-config'
import { PlayerStorageDTO } from './player-storage-dto'

export const getPlayersByGroup = async (group: string) => {
  try {
    const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION_KEY}-${group}`)

    const players: PlayerStorageDTO[] = storage ? JSON.parse(storage) : []

    return players
  } catch (err) {
    throw err
  }
}
