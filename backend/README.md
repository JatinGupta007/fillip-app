# App Marketing Backend

Node.js + Express + MongoDB (Mongoose) + Nodemailer backend for the **Free Audit** and **Custom Plan** marketing forms.

---

## Project Structure

```
app-marketing-backend/
├── config/
│   ├── db.js               # Mongoose connection
│   └── mailer.js           # Nodemailer transporter
├── controllers/
│   └── submissionController.js   # All business logic
├── middlewares/
│   └── validate.js         # Request validation
├── models/
│   └── Submission.js       # Unified Mongoose schema
├── routes/
│   └── submissionRoutes.js # Express router
├── services/
│   └── emailService.js     # HTML email builder & sender
├── .env                    # Environment variables (git-ignored)
├── .env.example            # Template for .env
├── app.js                  # Express app setup
├── server.js               # Entry point
└── package.json
```

---

## Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment
Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

Key variables:
| Variable | Description |
|---|---|
| `MONGO_URI` | MongoDB connection string |
| `MAIL_USER` | Gmail address (`rockjatin0748@gmail.com`) |
| `MAIL_PASS` | **Gmail App Password** (not your login password) |
| `MAIL_TO` | Recipient email for notifications |

> **Gmail App Password**: Go to [Google Account](https://myaccount.google.com) → Security → 2-Step Verification → App Passwords → Generate one for "Mail".

### 3. Start the server
```bash
# Development (auto-restart)
npm run dev

# Production
npm start
```

---

## API Reference

### Base URL
```
http://localhost:5000/api
```

---

### POST `/api/submissions/audit`
Submit a **Free Growth Audit** request.

**Request Body:**
```json
{
  "appLink":        "https://play.google.com/store/apps/...",
  "appName":        "MyApp",
  "platform":       "Android",
  "category":       "Finance",
  "downloads":      "50,000",
  "primaryGoal":    "Increase Installs",
  "monthlyBudget":  "$3,000",
  "currentChannels":"Meta, Google",
  "targetCountries":"US, India",
  "timeline":       "3 months",
  "fullName":       "John Doe",
  "email":          "john@company.com",
  "phone":          "+1 555 000 0000",
  "company":        "Acme Inc"
}
```

**Success Response `201`:**
```json
{
  "success": true,
  "message": "Audit request submitted successfully!",
  "data": { "id": "...", "formType": "FREE_AUDIT", "createdAt": "..." }
}
```

---

### POST `/api/submissions/custom-plan`
Submit a **Custom Marketing Plan** request.

**Request Body:**
```json
{
  "appName":      "MyApp",
  "appLink":      "https://apps.apple.com/...",
  "platform":     "Both",
  "category":     "Gaming",
  "downloads":    "100,000",
  "mau":          "20,000",
  "rating":       "4.5",
  "primaryGoal":  "Grow Revenue",
  "budget":       "$10,000",
  "channels":     "TikTok, Google",
  "targetGeo":    "US, UK",
  "services":     "ASO, Paid UA, UGC Ads",
  "startDate":    "ASAP",
  "fullName":     "Jane Smith",
  "email":        "jane@company.com",
  "phone":        "+44 7700 000000",
  "company":      "StartupXYZ"
}
```

---

### GET `/api/submissions`
Fetch all submissions (admin).

**Query Params:**
| Param | Values | Default |
|---|---|---|
| `formType` | `FREE_AUDIT` \| `CUSTOM_PLAN` | all |
| `status` | `PENDING` \| `REVIEWED` \| `CONTACTED` \| `CLOSED` | all |
| `page` | number | 1 |
| `limit` | number | 20 |

```
GET /api/submissions?formType=FREE_AUDIT&status=PENDING&page=1&limit=10
```

---

### GET `/api/submissions/:id`
Fetch a single submission by MongoDB `_id`.

---

### PATCH `/api/submissions/:id/status`
Update submission status (admin workflow).

**Body:**
```json
{ "status": "REVIEWED" }
```
Allowed values: `PENDING`, `REVIEWED`, `CONTACTED`, `CLOSED`

---

### DELETE `/api/submissions/:id`
Delete a submission permanently.

---

## Frontend Integration

Call the API from your React/Next.js forms:

```js
// Free Audit form — final step
const submitAudit = async (values) => {
  const res = await fetch("http://localhost:5000/api/submissions/audit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  const data = await res.json();
  if (!data.success) throw new Error(data.message);
  return data;
};

// Custom Plan form — final step
const submitCustomPlan = async (values) => {
  const res = await fetch("http://localhost:5000/api/submissions/custom-plan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  const data = await res.json();
  if (!data.success) throw new Error(data.message);
  return data;
};
```

---

## Data Model

Both forms share a **single `Submission` collection** with this shape:

```
Submission {
  formType:   "FREE_AUDIT" | "CUSTOM_PLAN"
  appDetails: { appName, appLink, platform, category, downloads, mau, rating }
  marketing:  { primaryGoal, budget, channels, targetGeo, services, startDate }
  contact:    { fullName, email, phone, company }
  status:     "PENDING" | "REVIEWED" | "CONTACTED" | "CLOSED"
  emailSent:  Boolean
  ipAddress:  String
  createdAt:  Date
  updatedAt:  Date
}
```
