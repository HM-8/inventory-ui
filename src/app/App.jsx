//import '../fake-db'
import React from 'react'
import store from './redux/Store'
import { Provider } from 'react-redux'
import { AllPages } from './routes/routes'
import { MatxTheme } from 'app/components'
import { useRoutes } from 'react-router-dom'
import { SettingsProvider } from 'app/contexts/SettingsContext'
import { AuthProvider } from './contexts/JWTAuthContext'
// import {setItem, getItem } from './services/localStorageService'


const App = () => {
    const all_pages = useRoutes(AllPages())

    return (
        <Provider store={store}>
            <SettingsProvider>
                <MatxTheme>
                <AuthProvider>{all_pages}</AuthProvider>
                </MatxTheme>
            </SettingsProvider>
        </Provider>
    )
}

export default App
