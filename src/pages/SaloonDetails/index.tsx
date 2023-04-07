import React from "react"
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { RouteComponentProps } from "react-router-dom"

const SaloonDetails: React.FC<RouteComponentProps<{categoryId: string; saloonId: string}>> = ({match: {params: {saloonId}}}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Saloon {saloonId}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <h1>Saloon {saloonId}</h1>
        Some details ahead!
      </IonContent>
    </IonPage>
  )
}

export default SaloonDetails
