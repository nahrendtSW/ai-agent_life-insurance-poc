# Life Insurance AI Agent - README

## Table of Contents
1. [Introduction](#introduction)
2. [Overview](#overview)
3. [Functions/Capabilities](#functionscapabilities)
   - [fetch_insurance_info](#function-fetch_insurance_info)
   - [create_lead_record](#function-create_lead_record)
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
- **SignalWire Markup Language (SWML)** for call flow instructions expressed in JSON.
- **SignalWire AI Gateway (SWAIG)** for telephony AI function handling.
- **Datasphere API** for Retrieval-Augmented Generation (RAG) of insurance info.
- **Node.js** server for backend processing of lead records.

### Workflow
1. **Caller initiates contact** → AI greets the caller.
2. **AI provides insurance information** → Responds to inquiries.
3. **AI collects user details** → Stores caller information.
4. **AI transfers the call** → Routes the caller to a live agent.

---

## Functions/Capabilities

### Function: `fetch_insurance_info`
**Purpose:** Provides details about various life insurance policies.

#### OpenAI Tool Specification:
```json
{
  "function": "fetch_insurance_info",
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

---

### Function: `create_lead_record`
**Purpose:** Captures and stores the caller’s personal details and insurance interests.

#### OpenAI Tool Specification:
```json
{
  "function": "create_lead_record",
  "description": "Stores lead details, including name, contact information, and insurance interest.",
  "parameters": {
    "type": "object",
    "properties": {
      "name": { "type": "string", "description": "Caller's name." },
      "phone_number": { "type": "string", "description": "Caller's phone number." },
      "policy_interest": { "type": "string", "description": "Type of insurance the caller is interested in." }
    }
  }
}
```

---

### Function: `transfer_lead`
**Purpose:** Transfers the caller to a live representative.

#### OpenAI Tool Specification:
```json
{
  "function": "transfer_lead",
  "description": "Transfers the call to a human agent.",
  "parameters": {
    "type": "object",
    "properties": {
      "destination": {
        "type": "string",
        "description": "The destination to transfer the caller to."
      }
    }
  }
}
```

---

## Environment Variables
Ensure the following environment variables are configured:
- `SIGNALWIRE_PROJECT_ID` - SignalWire Project ID.
- `SIGNALWIRE_API_TOKEN` - SignalWire API token.
- `SIGNALWIRE_SPACE_DOMAIN` - SignalWire Space Domain.
- `DATASPHERE_DOCUMENT_ID` - PDF to draw insurance information from.
- `DEBUGGING_WEBHOOK` - Development tool for conversation flow, function i/o, and latency monitoring.

---

## Sample Prompt for the AI Agent
```
Your name is Jake, and you are a virtual Customer Support agent for a life insurance company.

Your mission is to provide callers with assistance regarding their life insurance policy options, including policy overview, callback scheduling, and transfer to a local, licensed insurance agent.
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
