import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { parseXML } from "./src/parser/xmlParser.js";
import { classifyParcelObj } from "./src/routing/classifier.js";
import cors from "cors";


const app = express();
app.use(express.static("public"));
app.use(cors());
const PORT = process.env.PORT || 3000;

// Setup multer to store uploaded files temporarily
const upload = multer({ dest: "uploads/" });
app.get("/", (req, res) => {
  res.send("Parcel Routing API is running. Use POST /upload to send XML.");
});

// POST endpoint to upload XML
app.post("/upload", upload.single("xmlfile"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send("No file uploaded.");

    const xmlPath = path.resolve(req.file.path);
    const data = await parseXML(xmlPath);

    const parcelsNode = data?.Container?.parcels?.Parcel;
    if (!parcelsNode) return res.status(400).send("No parcels found.");

    const parcelsArray = Array.isArray(parcelsNode) ? parcelsNode : [parcelsNode];

    const results = parcelsArray.map((p, idx) => {
      const id = `${data.Container.Id}-${idx + 1}`;
      return classifyParcelObj(p, id);
    });

    // Delete uploaded file
    fs.unlinkSync(xmlPath);

    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error processing XML.");
  }
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

