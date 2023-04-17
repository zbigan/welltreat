import React from "react"
import api from "../../api/api"
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { RouteComponentProps } from "react-router-dom"
import { useQuery } from "../../hooks/useQuery"

const CategorySelect: React.FC<RouteComponentProps> = ({match: {url}}) => {
  const [categories=[]] = useQuery(api.getCategoriesList)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="text-center">Category Select</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="grid grid-cols-2 gap-4 p-2">
          {
            categories.map(c => (
              <IonItem routerDirection="forward" routerLink={`${url}/categories/${c}`}>
                <IonLabel className="text-center">{c}</IonLabel>
              </IonItem>
            ))
          }
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default CategorySelect
