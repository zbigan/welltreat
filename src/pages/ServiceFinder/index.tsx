import React from "react"
import CategorySelect from "../CategorySelect"
import { IonPage, IonRouterOutlet } from "@ionic/react"
import { Route, RouteComponentProps } from "react-router-dom"
import CategoryDetails from "../CategoryDetails"
import SaloonDetails from "../SaloonDetails"

const ServiceFinder: React.FC<RouteComponentProps> = ({match: {url}}) => {
  return (
    <IonPage>
      <IonRouterOutlet>
        <Route exact path={url} component={CategorySelect} />
        <Route exact path={`${url}/categories/:categoryId`} component={CategoryDetails} />
        <Route exact path={`${url}/categories/:categoryId/saloons/:saloonId`} component={SaloonDetails} />
      </IonRouterOutlet>
    </IonPage>
  )
}

export default ServiceFinder
