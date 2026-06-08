# SEO Change Management Framework

No existing ranking page may be modified without strictly adhering to this framework. This process protects high-ranking assets from accidental dilution and ensures any traffic drops are immediately reversible.

## 1. Pre-Implementation Baseline
Before any edit is pushed to staging or production, the following metrics must be documented from Google Search Console and GA4:
*   Current Clicks (30-day trailing)
*   Current Impressions (30-day trailing)
*   Current CTR
*   Average Position
*   Leads Generated (GA4 Events)

## 2. Change Request Protocol
Every PR or change request MUST document:
*   **What Is Being Changed?** (e.g., Title, Meta Description, Content, Internal Links, Schema, URL)
*   **Why Is It Being Changed?**
*   **Expected Outcome:** (e.g., Target 4.0% CTR increase, Lead conversion increase).

## 3. Risk Assessment Classification
Changes are classified into three risk tiers to determine the required approval level:
*   **Low Risk:** FAQ additions, Schema additions, New internal links pointing downward.
*   **Medium Risk:** Large content edits, Title tag changes, Meta description updates.
*   **High Risk:** URL changes, Canonical changes, Page merges, 301 Redirects.

## 4. Rollback Plan
For every Medium and High-Risk change:
*   A complete backup of the previous React component/page must be preserved.
*   A documented rollback process must be attached to the PR.
*   **SLA:** If performance metrics fail the post-implementation monitoring, the rollback must be executed in under 24 hours.

## 5. Post-Implementation Monitoring
Following a change, performance must be actively tracked at:
*   **7 Days** (Initial indexing check)
*   **14 Days** (SERP volatility settling)
*   **30 Days** (Final performance evaluation)
*If CTR, Ranking, Traffic, or Leads drop below the baseline at the 14-day mark, a rollback review is automatically triggered.*

## 6. Protected Pages (Business-Critical Assets)
The following pages generate the core revenue for Rudraksh Safar and require Executive Approval before any Medium or High-Risk edits:
*   `/ladakh/best-time-to-visit-ladakh`
*   `/agents/travel-agent-bhilai`
*   `/domestic-tours/from-bhilai`
*   `/packages/chardham-yatra-from-bhilai`
*   **Any page currently generating > 5% of total organic traffic.**
