import React from "react"
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import { RouteComponentProps } from "react-router-dom"

const CategorySelect: React.FC<Partial<RouteComponentProps>> = () => {
  return (
    <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonTitle>Category Selecttt</IonTitle>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonToolbar>
        </IonHeader>
        <IonContent class="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol>
                <h1>Category Select</h1>
                <IonButton routerLink="/saloons" routerDirection="forward">Go to Page Two</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
    </IonPage>
  )
}

export default CategorySelect
