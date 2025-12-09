🌐📦 **Parcel Routing & Classification System**

A smart XML-based parcel analysis tool that classifies parcels, detects insurance needs, and provides automated routing recommendations.
Built with Node.js, Express, and a clean web interface for file uploads and report downloads.
**Link to run the website**
https://tetrifox-assignment-1.onrender.com

✨ **Features**
🔍 Smart Classification

Automatically analyzes parcel XML data

Detects high-value parcels (auto-highlighted)

Determines proper routing department

Generates unique Parcel IDs

📤 **XML Upload Interface**
<img width="988" height="840" alt="image" src="https://github.com/user-attachments/assets/3f0c088a-c69f-4870-9f6c-fc744f7de6f6" />


Simple and clean front-end UI

One-click XML upload

Instant table preview

<------**📑 PDF Export**----->

Export full routing table as a professional PDF report

⚙️ Backend Processing

Uses xml2js to convert XML → JSON

Classifies parcel objects using custom logic

Secure file handling with multer

<------**🌐 API-Ready**----->

Can be integrated with other logistics tools

Deployed endpoint available on Render 
| Layer           | Technologies             |
| --------------- | ------------------------ |
| **Frontend**    | HTML, CSS, Vanilla JS    |
| **Backend**     | Node.js, Express, Multer |
| **XML Parsing** | xml2js                   |
| **Utilities**   | jsPDF, AutoTable         |
| **Deployment**  | Render                   |

🚀 **How It Works**
1️⃣ Upload XML

User selects an XML file containing parcels (with recipient, weight, value, etc.).

2️⃣ Parse & Validate

Backend converts XML → JSON and extracts parcel details.

3️⃣ Classification

Each parcel is evaluated to determine:

Department

Routing path

Insurance requirement

Unique Parcel ID

4️⃣ Display

Results are shown in a responsive table with highlighted insurance parcels.

5️⃣ PDF Export

User downloads a clean PDF report summarizing all parcel routes.
