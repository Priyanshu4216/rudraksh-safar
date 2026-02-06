import { useRegisterSW } from 'virtual:pwa-register/react'
import { useEffect } from 'react'

/* 
  FORCE UPDATE CONTROLLER
  - Listens for new Service Worker versions.
  - Automatically reloads the page when a new version is ready.
  - No user interaction required (because registerType: 'autoUpdate' is set in vite config).
*/
const ReloadPrompt = () => {
    const {
        needRefresh: [needRefresh, setNeedRefresh],
        updateServiceWorker,
    } = useRegisterSW({
        onRegistered(r) {
            console.log('SW Registered: ' + r)
        },
        onRegisterError(error) {
            console.log('SW registration error', error)
        },
    })

    useEffect(() => {
        if (needRefresh) {
            console.log('New content available, forcing reload...')
            updateServiceWorker(true)
        }
    }, [needRefresh, updateServiceWorker])

    return null // Use invisible component just for logic
}

export default ReloadPrompt
