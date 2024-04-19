import { ReactNode } from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LoadingIndicator } from '../loading-indicator'
import { styles } from './style'
import './style.ts'

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  const loading = false

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <SafeAreaView style={styles.safeArea}>
          <StatusBar
            barStyle={'light-content'}
            backgroundColor={'transparent'}
            translucent
          />

          {children}
        </SafeAreaView>
      )}
    </>
  )
}
