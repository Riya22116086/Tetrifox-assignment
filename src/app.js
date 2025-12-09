import { parseXML } from "./parser/xmlParser.js";
import { routeParcel } from "./services/router.js";

const run = async () => {
  const container = await parseXML("src/xml/Container_68465468.xml");

  const parcels = container.parcels.Parcel;

  parcels.forEach((parcel, index) => {
    parcel.id = `${container.Id}-${index+1}`;
    const result = routeParcel(parcel);

    console.log("Routing Result:", result);
  });
};

run();
