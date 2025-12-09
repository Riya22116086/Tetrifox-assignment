// src/runRouting.js
import path from "path";
import { parseXML } from "./parser/xmlParser.js";
import { classifyParcelObj } from "./routing/classifier.js";
import fs from "fs";

const XML_PATH = path.resolve("src", "xml", "Container_68465468.xml");

async function run() {
  try {
    const data = await parseXML(XML_PATH);

    // path to parcels in parsed JSON
    const parcelsNode = data?.Container?.parcels?.Parcel;
    if (!parcelsNode) {
      console.log("No parcels found in XML.");
      return;
    }

    const parcelsArray = Array.isArray(parcelsNode) ? parcelsNode : [parcelsNode];

    const results = parcelsArray.map((p, idx) => {
      const id = `${data.Container.Id}-${idx + 1}`;
      return classifyParcelObj(p, id);
    });

    // print a readable table-like output
    console.log("\n=== Parcel Routing Results ===\n");
    results.forEach(r => {
      console.log(`ID: ${r.parcelId}`);
      console.log(`Name: ${r.recipientName}`);
      console.log(`Weight(kg): ${r.weight}`);
      console.log(`Value(€): ${r.value}`);
      console.log(`Requires Insurance: ${r.requiresInsurance}`);
      console.log(`Department: ${r.department}`);
      console.log(`Routing: ${r.routing.join(" -> ")}`);
      console.log("-------------------------------");
    });

    // Optional: write results to JSON file
    const outPath = path.resolve("output", `routes_${data.Container.Id}.json`);
    // ensure output folder exists
    if (!fs.existsSync(path.dirname(outPath))) fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, JSON.stringify(results, null, 2), "utf8");
    console.log(`\nSaved results to ${outPath}\n`);
  } catch (err) {
    console.error("Error during routing:", err);
  }
}

if (import.meta.url === `file://${process.cwd().replace(/\\/g, "/")}/src/runRouting.js`) {
  // noop — this check is unreliable on Windows; instead just run
}

run();
