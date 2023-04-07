import React from "react"
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { RouteComponentProps } from "react-router-dom"


const CategoryDetails: React.FC<RouteComponentProps<{categoryId: string}>> = ({match: {url, params: {categoryId}}}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="text-center">This is category {categoryId}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="p-2">
        <h1>Saloons List</h1>
        <IonList>
          <IonItem routerDirection="forward" routerLink={`${url}/saloons/1`}>
            <IonLabel>Saloon 1</IonLabel>
          </IonItem>
          <IonItem routerDirection="forward" routerLink={`${url}/saloons/2`}>
            <IonLabel>Saloon 2</IonLabel>
          </IonItem>
          <IonItem routerDirection="forward" routerLink={`${url}/saloons/3`}>
            <IonLabel>Saloon 3</IonLabel>
          </IonItem>
          <IonItem routerDirection="forward" routerLink={`${url}/saloons/4`}>
            <IonLabel>Saloon 4</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default CategoryDetails
