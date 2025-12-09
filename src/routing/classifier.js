// src/routing/classifier.js
export function classifyParcelObj(parcelObj, id = null) {
  // parcelObj is one Parcel node from parsed JSON
  // robustly read weight/value (they might be strings)
  const weight = Number(parcelObj.Weight ?? 0);
  const value = Number(parcelObj.Value ?? 0);

  // determine department by weight
  let department;
  if (weight <= 1) department = "Mail";
  else if (weight <= 10) department = "Regular";
  else department = "Heavy";

  // insurance approval required if value > 1000
  const requiresInsurance = value > 1000;

  // build routing array (Insurance first if required)
  const routing = requiresInsurance ? ["Insurance", department] : [department];

  return {
    parcelId: id,
    recipientName: parcelObj.Receipient?.Name ?? parcelObj.Recipient?.Name ?? "",
    weight,
    value,
    requiresInsurance,
    department,
    routing
  };
}
