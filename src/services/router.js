import { dijkstra } from "../routing/dijkstra.js";
import { hubs } from "../data/hubs.js";

export const routeParcel = (parcel) => {
  
  const startHub = "Mumbai";  // Or from XML
  const destination = parcel.Recipient.DeliveryAddress;

  const { path, distance } = dijkstra(hubs, startHub, destination);

  return {
    parcelId: parcel.id,
    route: path,
    distance,
    eta: Math.ceil(distance / 500) + " days"
  };
};
