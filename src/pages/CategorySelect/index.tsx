import React from "react"
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import { RouteComponentProps } from "react-router-dom"

const CategorySelect: React.FC<Partial<RouteComponentProps>> = () => {
  return (
    <IonGrid>
      <IonHeader>
        <IonToolbar>
          <IonRow>
            <IonCol>
              <IonTitle>Category Select</IonTitle>
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <h1>Category Select h1</h1>
        <IonButton routerLink="/saloons" routerDirection="forward">Go to Page Two</IonButton>
      </IonContent>
    </IonGrid>
  )
}

export default CategorySelect
