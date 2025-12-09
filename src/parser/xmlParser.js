import fs from "fs";
import xml2js from "xml2js";

export const parseXML = async (filePath) => {
  const xmlData = fs.readFileSync(filePath, "utf8");
  return new Promise((resolve, reject) => {
    xml2js.parseString(
      xmlData,
      { explicitArray: false, trim: true },
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};
