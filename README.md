<div align="left">

[![Visit Validifi](./header.png)](https://validifi.com&#x2F;)

# [Validifi](https://validifi.com&#x2F;)<a id="validifi"></a>

ValidiFI, an analytics and technology company, connects bank account and payment insights to help companies in a variety of industries provide more confident, trustworthy and transparent transactions. Our differentiated data, sourced directly from banks, payment processors, and financial platforms helps companies to ensure compliance, mitigate risk, combat fraud, and confidently validate bank account and ownership. For more information, visit ValidiFI.com.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`validifibanklogin.cONNECT.bankLookup`](#validifibankloginconnectbanklookup)
  * [`validifibanklogin.cONNECT.createSession`](#validifibankloginconnectcreatesession)
  * [`validifibanklogin.cONNECT.getFullAccountInfo`](#validifibankloginconnectgetfullaccountinfo)
  * [`validifibanklogin.insights.getInsightById`](#validifibanklogininsightsgetinsightbyid)
  * [`validifibanklogin.insights.submitLoanApplication`](#validifibanklogininsightssubmitloanapplication)
  * [`validifibanklogin.reports.submitAffordAi`](#validifibankloginreportssubmitaffordai)
  * [`validifibanklogin.token.checkHealth`](#validifibanklogintokencheckhealth)
  * [`validifibanklogin.token.create`](#validifibanklogintokencreate)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=ValidiFI&serviceName=BankLogin&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { ValidiFiBankLogin } from "validi-fi-bank-login-typescript-sdk";

const validifibanklogin = new ValidiFiBankLogin({
  // Defining the base path is optional and defaults to https://}
  // basePath: "https://}",
});

const bankLookupResponse = await validifibanklogin.cONNECT.bankLookup({
  search: "{{routingNumber}}",
});

console.log(bankLookupResponse);
```

## Reference<a id="reference"></a>


### `validifibanklogin.cONNECT.bankLookup`<a id="validifibankloginconnectbanklookup"></a>

Bank Lookup

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const bankLookupResponse = await validifibanklogin.cONNECT.bankLookup({
  search: "{{routingNumber}}",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### search: `string`<a id="search-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v4/CONNECT/Banks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `validifibanklogin.cONNECT.createSession`<a id="validifibankloginconnectcreatesession"></a>

CONNECT Session

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSessionResponse = await validifibanklogin.cONNECT.createSession();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v4/CONNECT/Session` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `validifibanklogin.cONNECT.getFullAccountInfo`<a id="validifibankloginconnectgetfullaccountinfo"></a>

Get Full Account Info from CONNECT Session

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFullAccountInfoResponse =
  await validifibanklogin.cONNECT.getFullAccountInfo({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountToken: `string`<a id="accounttoken-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v4/accounts/{accountToken}/export` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `validifibanklogin.insights.getInsightById`<a id="validifibanklogininsightsgetinsightbyid"></a>

Get Insights

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInsightByIdResponse = await validifibanklogin.insights.getInsightById(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### inquiryId: `string`<a id="inquiryid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v4/Insights/2/{inquiryId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `validifibanklogin.insights.submitLoanApplication`<a id="validifibanklogininsightssubmitloanapplication"></a>

BankQUALIFY

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const submitLoanApplicationResponse =
  await validifibanklogin.insights.submitLoanApplication();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v4/Insights` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `validifibanklogin.reports.submitAffordAi`<a id="validifibankloginreportssubmitaffordai"></a>

AffordAi

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const submitAffordAiResponse = await validifibanklogin.reports.submitAffordAi();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v4/affordai` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `validifibanklogin.token.checkHealth`<a id="validifibanklogintokencheckhealth"></a>

Health Check

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkHealthResponse = await validifibanklogin.token.checkHealth();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v4/HealthCheck` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `validifibanklogin.token.create`<a id="validifibanklogintokencreate"></a>

OAuth 2.0 Token

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createResponse = await validifibanklogin.token.create({
  clientId: "{{clientId}}",
  clientSecret: "{{clientSecret}}",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### clientId: `string`<a id="clientid-string"></a>

##### clientSecret: `string`<a id="clientsecret-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v4/token` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
