import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import CategorySelect from './pages/CategorySelect';
import SaloonsList from './pages/SaloonsList';
import LoginPage from './pages/LoginPage';
import SaloonDetails from './pages/SaloonDetails';
import { setupIonicReact } from '@ionic/react'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

setupIonicReact()

const isAuthored = true

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/categories" component={CategorySelect}/>
          <Route exact path="/saloons" render={(props) => <SaloonsList {...props} />} />
          <Route exact path="/saloonDetails" render={(props) => <SaloonDetails {...props} />} />
          <Route exact path="/" render={() => <Redirect to="/categories" />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
}

export default App
