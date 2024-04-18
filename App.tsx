import { MainRouter } from '@/routes/router'
import * as ScreenOrientation from 'expo-screen-orientation'
import { useEffect, useState } from 'react'
import './global.css'

export default function App() {
  const [orientation, setOrientation] = useState(1)

  useEffect(() => {
    lockOrientation()
  }, [])

  const lockOrientation = async () => {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
    const o = await ScreenOrientation.getOrientationAsync()
    setOrientation(o)
  }

  return (
    <>
      <MainRouter />
    </>
  )
}
