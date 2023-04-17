import React, { useCallback } from "react"
import api from "../../api/api"
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { RouteComponentProps } from "react-router-dom"
import { useQuery } from "../../hooks/useQuery"
import { Category } from "../../api/types"


const CategoryDetails: React.FC<RouteComponentProps<{category: Category}>> = ({match: {url, params: {category}}}) => {
  const getCategories = useCallback(() => api.getSaloonsList(category), [category])
  const [saloons=[]] = useQuery(getCategories)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="text-center">This is category {category}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1 className="text-center">Saloons List</h1>
        <IonList className="grid grid-cols-2 gap-4 p-2">
          {
            saloons.map(s => (
              <IonItem routerDirection="forward" routerLink={`${url}/saloons/${s.id}`}>
                <IonLabel className="text-center">{s.name}</IonLabel>
              </IonItem>
            ))
          }
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default CategoryDetails
