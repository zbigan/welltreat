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
      <IonContent>
        <h1>Saloons List</h1>
        <IonList className="grid grid-cols-2 gap-4 p-2">
          <IonItem routerDirection="forward" routerLink={`${url}/saloons/1`}>
            <IonLabel className="text-center">Saloon 1</IonLabel>
          </IonItem>
          <IonItem routerDirection="forward" routerLink={`${url}/saloons/2`}>
            <IonLabel className="text-center">Saloon 2</IonLabel>
          </IonItem>
          <IonItem routerDirection="forward" routerLink={`${url}/saloons/3`}>
            <IonLabel className="text-center">Saloon 3</IonLabel>
          </IonItem>
          <IonItem routerDirection="forward" routerLink={`${url}/saloons/4`}>
            <IonLabel className="text-center">Saloon 4</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default CategoryDetails
