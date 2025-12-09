import { parseXML } from "./parser/xmlParser.js";

const run = async () => {
  const json = await parseXML("src/xml/Container_68465468.xml");
  console.log(JSON.stringify(json, null, 2)); // pretty print
};

run();
