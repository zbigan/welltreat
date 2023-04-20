import React from "react"
import api from "../../api/api"
import { IonCard, IonCardContent, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { RouteComponentProps } from "react-router-dom"
import { useQuery } from "../../hooks/useQuery"
import { capitalizeFirstLetter } from "../../utils"

import "./style.css"

const CategorySelect: React.FC<RouteComponentProps> = ({match: {url}}) => {
  const [categories=[]] = useQuery(api.getCategoryColorsList)

  return (
    <IonPage>
      <IonHeader id="header">
        <IonToolbar>
          <IonTitle className="text-center">Category Select</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="content">
          {
            Object.entries(categories).map(([cat, col]) => (
              <IonCard
                key={cat}
                routerDirection="forward"
                routerLink={`${url}/categories/${cat}`}
                className="card"
                style={{
                  '--background': col,
                  '--color': 'black'
                }}
              >
                  <IonCardContent className="card-content">
                    {capitalizeFirstLetter(cat)}
                  </IonCardContent>
              </IonCard>
            ))
          }
        </div>
      </IonContent>
    </IonPage>
  )
}

export default CategorySelect
