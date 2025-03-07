# Life Insurance AI Agent - README

## Table of Contents
1. [Introduction](#introduction)
2. [Overview](#overview)
3. [Functions/Capabilities](#functionscapabilities)
   - [insurance_info](#function-insurance_info)
   - [store_lead_info](#function-store_lead_info)
   - [transfer_lead](#function-transfer_lead)
4. [Environment Variables](#environment-variables)
5. [Sample Prompt for the AI Agent](#sample-prompt-for-the-ai-agent)
6. [Sample User Queries and AI Agent Responses](#sample-user-queries-and-ai-agent-responses)
7. [Conclusion](#conclusion)
8. [Appendix](#appendix)

---

## Introduction
The **Life Insurance AI Agent** is a virtual assistant powered by **SignalWire AI Gateway (SWAIG)** and a **Node.js server**. Its primary function is to generate leads for a life insurance company by interacting with inbound callers, providing information about insurance products, capturing caller details, and seamlessly transferring calls to live representatives.

---

## Overview
This AI Agent is designed to:
- Greet inbound callers professionally.
- Provide relevant information about available life insurance policies.
- Collect and store caller details along with their insurance preferences.
- Transfer qualified leads to human agents for further assistance.

### Technology Stack
- **SignalWire AI Gateway (SWAIG)** for telephony AI handling.
- **Node.js** server for backend processing.
- **REST APIs** for lead management and information retrieval.

### Workflow
1. **Caller initiates contact** → AI greets the caller.
2. **AI provides insurance information** → Responds to inquiries.
3. **AI collects user details** → Stores caller information.
4. **AI transfers the call** → Routes the caller to a live agent.

---

## Functions/Capabilities

### Function: `insurance_info`
**Purpose:** Provides details about various life insurance policies.

#### OpenAI Tool Specification:
```json
{
  "function": "insurance_info",
  "description": "Retrieve details of available life insurance policies.",
  "parameters": {
    "type": "object",
    "properties": {
      "policy_type": {
        "type": "string",
        "description": "Type of life insurance policy the caller is interested in (e.g., term, whole, universal)."
      }
    }
  }
}
```

#### Node.js Implementation:
```javascript
app.get("/insurance-info", (req, res) => {
    const { policy_type } = req.query;
    
    const policies = {
        "term": "Term life insurance provides coverage for a fixed period.",
        "whole": "Whole life insurance offers lifelong coverage and cash value.",
        "universal": "Universal life insurance combines flexibility and investment opportunities."
    };
    
    res.json({ message: policies[policy_type] || "Policy type not found." });
});
```

---

### Function: `store_lead_info`
**Purpose:** Captures and stores the caller’s personal details and insurance interests.

#### OpenAI Tool Specification:
```json
{
  "function": "store_lead_info",
  "description": "Stores lead details, including name, contact information, and insurance interest.",
  "parameters": {
    "type": "object",
    "properties": {
      "name": { "type": "string", "description": "Caller's name." },
      "phone": { "type": "string", "description": "Caller's phone number." },
      "policy_interest": { "type": "string", "description": "Type of insurance the caller is interested in." }
    }
  }
}
```

#### Node.js Implementation:
```javascript
app.post("/store-lead", (req, res) => {
    const { name, phone, policy_interest } = req.body;
    
    // Simulate storing lead information
    console.log(`New lead: ${name}, ${phone}, interested in ${policy_interest}`);
    
    res.json({ message: "Lead information stored successfully." });
});
```

---

### Function: `transfer_lead`
**Purpose:** Transfers the caller to a live representative.

#### OpenAI Tool Specification:
```json
{
  "function": "transfer_lead",
  "description": "Transfers the call to a human agent.",
  "parameters": {}
}
```

#### Node.js Implementation:
```javascript
app.post("/transfer-lead", (req, res) => {
    console.log("Transferring caller to live representative...");
    res.json({ message: "Call transferred successfully." });
});
```

---

## Environment Variables
Ensure the following environment variables are configured:
- `SIGNALWIRE_PROJECT_ID` - SignalWire Project ID.
- `SIGNALWIRE_API_TOKEN` - SignalWire API token.
- `SIGNALWIRE_SPACE_DOMAIN` - SignalWire Space Domain.
- `NODE_ENV` - Environment mode (development/production).

---

## Sample Prompt for the AI Agent
```
You are a virtual assistant for a life insurance company. Your job is to greet callers, provide accurate information about life insurance products, collect their details, and transfer them to a live representative when necessary.
```

---

## Sample User Queries and AI Agent Responses
**User:** "Can you tell me about your life insurance options?"

**AI Response:** "Sure! We offer term, whole, and universal life insurance policies. Would you like more details on a specific type?"

**User:** "I’d like to sign up for a policy."

**AI Response:** "That’s great! I’ll need some details first. Can you provide your name and phone number?"

**User:** "Yes, my name is John Doe, and my phone number is 555-1234."

**AI Response:** "Thank you, John! I’ve recorded your details. Let me transfer you to a specialist who can assist you further."

---

## Conclusion
This AI Agent enhances the customer experience by efficiently handling insurance inquiries, collecting lead information, and ensuring smooth call transfers to human representatives. By leveraging **SignalWire AI Gateway** and **Node.js**, it provides a seamless and intelligent interface for prospective customers.

---

## Appendix
- **API Compliance:** Ensure secure handling of customer data.
- **Error Handling:** AI Agent gracefully manages errors and fallback responses.
- **Rate Limiting:** Implement request limits to prevent abuse.
