import React from "react"
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react"
import { RouteComponentProps } from "react-router-dom"

const SaloonsList: React.FC<RouteComponentProps> = (props) => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Saloons List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <h1>Saloons List</h1>
        <IonButton routerLink="/saloonDetails" routerDirection="forward">Go to saloon details</IonButton>
      </IonContent>
    </>
  )
}

export default SaloonsList
