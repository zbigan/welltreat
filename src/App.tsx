import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { IonApp, IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import LoginPage from './pages/LoginPage'
import { setupIonicReact } from '@ionic/react'
import ServiceFinder from './pages/ServiceFinder'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

setupIonicReact()

const isAuthored = true

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/serviceFinder" component={isAuthored ? ServiceFinder : LoginPage}/>
          <Redirect exact from="/" to="/serviceFinder" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
}

export default App
