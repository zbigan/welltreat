import React from "react"
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { RouteComponentProps } from "react-router-dom"


const CategorySelect: React.FC<RouteComponentProps> = ({match: {url}}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="text-center">Category Select</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="grid grid-cols-2 gap-4 p-2">
          <IonItem routerDirection="forward" routerLink={`${url}/categories/1`}>
            <IonLabel className="text-center">Category 1</IonLabel>
          </IonItem>
          <IonItem routerDirection="forward" routerLink={`${url}/categories/2`}>
            <IonLabel className="text-center">Category 2</IonLabel>
          </IonItem>
          <IonItem routerDirection="forward" routerLink={`${url}/categories/3`}>
            <IonLabel className="text-center">Category 3</IonLabel>
          </IonItem>
          <IonItem routerDirection="forward" routerLink={`${url}/categories/4`}>
            <IonLabel className="text-center">Category 4</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default CategorySelect
