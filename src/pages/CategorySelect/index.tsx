import React from "react"
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { RouteComponentProps } from "react-router-dom"


const CategorySelect: React.FC<RouteComponentProps> = ({match: {url}}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Category Select</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonList>
          <IonItem routerDirection="forward" routerLink={`${url}/categories/1`}>
            <IonLabel>Category 1</IonLabel>
          </IonItem>
          <IonItem routerDirection="forward" routerLink={`${url}/categories/2`}>
            <IonLabel>Category 2</IonLabel>
          </IonItem>
          <IonItem routerDirection="forward" routerLink={`${url}/categories/3`}>
            <IonLabel>Category 3</IonLabel>
          </IonItem>
          <IonItem routerDirection="forward" routerLink={`${url}/categories/4`}>
            <IonLabel>Category 4</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default CategorySelect
