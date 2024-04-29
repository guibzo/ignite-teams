import { AppError } from '@/utils/app-error'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { PLAYER_COLLECTION_KEY } from '../storage-config'
import { getPlayersByGroup } from './get-players-by-group'
import { PlayerStorageDTO } from './player-storage-dto'

type Params = {
  newPlayer: PlayerStorageDTO
  group: string
}

export const addPlayerByGroup = async ({ group, newPlayer }: Params) => {
  try {
    const currentPlayersOnGroupStorage = await getPlayersByGroup(group)

    const playerAlreadyExists = currentPlayersOnGroupStorage.filter(
      (player) => player.name === newPlayer.name
    )

    if (playerAlreadyExists.length > 0) {
      throw new AppError('Já existe um jogador com esse nome em um time.')
    }

    const updatedGroupStorage = JSON.stringify([...currentPlayersOnGroupStorage, newPlayer])

    await AsyncStorage.setItem(`${PLAYER_COLLECTION_KEY}-${group}`, updatedGroupStorage)
  } catch (err) {
    throw err
  }
}
