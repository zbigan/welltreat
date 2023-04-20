import React, { useCallback } from "react"
import api from "../../api/api"
import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { RouteComponentProps } from "react-router-dom"
import { useQuery } from "../../hooks/useQuery"
import { Category } from "../../api/types"
import { capitalizeFirstLetter } from "../../utils"


const CategoryDetails: React.FC<RouteComponentProps<{category: Category}>> = ({match: {url, params: {category}}}) => {
  const getCategories = useCallback(() => api.getSaloonsList(category), [category])
  const [saloons=[]] = useQuery(getCategories)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle className="text-center">{capitalizeFirstLetter(category)}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1 className="text-center">Saloons List</h1>
        <IonList className="grid grid-cols-1 gap-4 p-2">
          {
            saloons.map(s => (
              <IonItem key={s.id} routerDirection="forward" routerLink={`${url}/saloons/${s.id}`}>
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
