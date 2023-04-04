import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import CategorySelect from './pages/CategorySelect';
import SaloonsList from './pages/SaloonsList';
import LoginPage from './pages/LoginPage';
import SaloonDetails from './pages/SaloonDetails';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

const isAuthored = true

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/categories" render={() => isAuthored ? <CategorySelect /> : <LoginPage />}/>
        <Route exact path="/saloons" render={(props) => <SaloonsList {...props} />} />
        <Route exact path="/saloonDetails" render={(props) => <SaloonDetails {...props} />} />
        <Route exact path="/" render={() => <Redirect to="/categories" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App
