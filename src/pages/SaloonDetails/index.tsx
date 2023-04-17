import React, { useCallback } from "react"
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { RouteComponentProps } from "react-router-dom"
import { useQuery } from "../../hooks/useQuery";
import api from "../../api/api";

const SaloonDetails: React.FC<RouteComponentProps<{category: string; saloonId: string}>> = ({match: {params: {saloonId}}}) => {
  const getSaloonDetails = useCallback(() => api.getSaloon(saloonId), [saloonId])
  const [saloonDetails] = useQuery(getSaloonDetails)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="text-center">{saloonDetails?.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="p-4">
          <h3>Address: {saloonDetails?.address}</h3>
        </div>
        <div className="p-4">
          <h3>Description: {saloonDetails?.description}</h3>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default SaloonDetails
