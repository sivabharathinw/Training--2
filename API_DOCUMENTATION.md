# Witspace API Documentation 

This document provides a complete technical reference for all endpoints in the WitSpace platform, organized by the specific folders in the Postman collection.

## Environments

| Environment | Base URL |
| :--- | :--- |
| **Development** | `http://localhost:3000` |
| **Production** | `` |

## Authentication

All requests require a Bearer Token in the headers:
`Authorization: Bearer Token`
`Token :  {{uid}}`

---

##  Health Check
Verifies system availability and provides metadata.

### 1. Ping
- **Method:** `GET`
- **URL:** `{{baseUrl}}/ping`
- **Description:** A simple health check to ensure the server is responsive.

### 2. Version
- **Method:** `GET`
- **URL:** `{{baseUrl}}/version`
- **Description:** Retrieves the current deployment version of the API.

### 3. Check
- **Method:** `GET`
- **URL:** `{{baseUrl}}/check`
- **Description:** Performs a deep check of system dependencies (database, cache, etc.).

### 4. Get Docs
- **Method:** `GET`
- **URL:** `{{baseUrl}}/docs.json`
- **Description:** Retrieves the OpenAPI/Swagger specification for the entire API.

---

##  Test
Development and debugging utilities.

### 1. Get ID Token
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/test/getIDToken`
- **Description:** Utility endpoint to generate a valid test token for development purposes.

---

##  User
User profile and account management.

### 1. Get ID Token
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/user/token`
- **Description:** Retrieves or refreshes the security token for the authenticated user.

### 2. Create User
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/user`
- **Description:** Registers a new user account in the system.
- **Body:**
```json
{
    "email": "user@example.com",
    "phoneNo": "+919876543210",
    "firstName": "John",
    "lastName": "Doe"
}
```

### 3. Get User
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/user/:uid`
- **Description:** Retrieves the full profile details for a specific user.
- **Path Variables:**
  - `uid`: `69e4dec0000afcb2a182`

### 4. Update User
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/user/:uid`
- **Description:** Updates the profile information for an existing user.
- **Path Variables:**
  - `uid`: `69e4dec0000afcb2a182`

### 5. Delete User
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/user/:uid`
- **Description:** Permanently removes a user account and associated data.
- **Path Variables:**
  - `uid`: `69e4dec0000afcb2a182`

### 6. Disable User
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/user/disable`
- **Description:** Temporarily deactivates a user account without deleting it.

---

##  User Meta
User-specific metadata and preferences.

### 1. Add Facility to Favorites
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/user-meta/addFacilityToFav/{{bfid}}`
- **Description:** Adds a specific facility to the user's list of favorites for quick access.
- **Path Variables:**
  - `bfid`: `69e5c8e20008b25a429e`

### 2. Remove Facility from Favorites
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/user-meta/removeFacilityFromFav/{{bfid}}`
- **Description:** Removes a facility from the user's favorites list.
- **Path Variables:**
  - `bfid`: `69e5c8e20008b25a429e`

---

##  Entities
Management of workspace organizations and tenants.

### 1. Create Entity
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/entities`
- **Description:** Creates a new primary entity (organization) in the system.

### 2. Get All Entities
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/entities`
- **Description:** Lists all registered entities that the requester has access to.

### 3. Get Entity by ID
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/entities/{{eid}}`
- **Description:** Retrieves detailed information for a specific organization entity.
- **Path Variables:**
  - `eid`: `69e5b22b00037e9152fc`

### 4. Update Entity
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/entities/{{eid}}`
- **Description:** Modifies the details (name, contact, etc.) of an existing entity.
- **Path Variables:**
  - `eid`: `69e5b22b00037e9152fc`

### 5. Delete Entity
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/entities/{{eid}}`
- **Description:** Deletes an entity organization from the platform.
- **Path Variables:**
  - `eid`: `69e5b22b00037e9152fc`

### 6. Invite Tenant
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/entities/:eid/tenants/invite`
- **Description:** Sends an invitation to a user to join an entity as a tenant with a specified role.
- **Path Variables:**
  - `eid`: `entity123`

### 7. Accept Tenant Invite
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/entities/:eid/tenants/:linkId/accept`
- **Description:** Finalizes the onboarding of a tenant after they accept an invitation.
- **Path Variables:**
  - `eid`: `entity123`
  - `linkId`: `link123`

### 8. Get Entity Tenants
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/entities/:eid/tenants`
- **Description:** Lists all tenants associated with a specific parent entity.
- **Path Variables:**
  - `eid`: `entity123`

### 9. Get Tenant by Link ID
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/entities/:eid/tenants/:linkId`
- **Description:** Retrieves invitation/tenant details using a unique link identifier.
- **Path Variables:**
  - `eid`: `entity123`
  - `linkId`: `link123`

### 10. Delete Tenant
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/entities/:eid/tenants/:linkId`
- **Description:** Removes a tenant association from an entity.
- **Path Variables:**
  - `eid`: `entity123`
  - `linkId`: `link123`

---

##  Entity Users
User associations within an entity.

### 1. Get User Entities
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/entity-users/entities`
- **Description:** Lists all entities that the authenticated user belongs to.

### 2. Get User Branches
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/entity-users/branches`
- **Description:** Lists all branches across different entities that the user has access to.

---

##  Entity User Roles
Role management for users within entities.

### 1. Create Entity User Role
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/entity-user-roles`
- **Description:** Defines a new role with specific permissions within an entity.

### 2. Add Entity User
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/entity-user-roles/add-user`
- **Description:** Assigns an existing user to an entity with a specific role.

### 3. Get Entity Users
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/entity-user-role/entity-user`
- **Description:** Lists all users belonging to a specific entity along with their roles.

### 4. Get User Entities
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/entity-user-role/user-entity`
- **Description:** Retrieves all role assignments for a specific user across all entities.

### 5. Delete Entity User Role
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/entity-user-role/:eid/:uid`
- **Description:** Removes a user's role assignment or deletes a custom role definition.
- **Path Variables:**
  - `eid`: `entity123`
  - `uid`: `user123`

---

##  Branch
Management of individual office locations.

### 1. Create Branch
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/branch`
- **Description:** Registers a new physical location (branch) under an entity.

### 2. Get All Branches
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/branch`
- **Description:** Lists all branches available in the system.

### 3. Get Branch by ID
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}`
- **Description:** Retrieves full location, floor plan, and contact details for a branch.
- **Path Variables:**
  - `bid`: `69e5b2f300359747e59f`

### 4. Update Branch
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/branch/:bid`
- **Description:** Updates the configuration or physical details of a branch.
- **Path Variables:**
  - `bid`: `69e5b2f300359747e59f`

### 5. Delete Branch
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/branch/:bid`
- **Description:** Removes a branch from the system.
- **Path Variables:**
  - `bid`: `branch123`

---

##  Branch Config
Configuration settings per branch.

### 1. Create Branch Config
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/branch-config`
- **Description:** Initializes technical or operational settings for a specific branch.

### 2. Get Branch Config
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/branch-config/{{bid}}`
- **Description:** Retrieves the specific operational configuration for a branch.
- **Path Variables:**
  - `bid`: `69e5b2f300359747e59f`

### 3. Delete Branch Config
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/branch-config/{{bid}}`
- **Description:** Resets or deletes the configuration for a branch.
- **Path Variables:**
  - `bid`: `69e5b2f300359747e59f`

---

##  Branch Facilities
Resources within a branch (Cabins, Desks, Meeting Rooms).

### 1. Create Facility
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/branch/:bid/facility`
- **Description:** Adds a new bookable resource (e.g., a cabin or hot desk) to a branch.

### 2. Get All Facilities
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/branch/:bid/facility`
- **Description:** Lists all facilities available within a specific branch.

### 3. Get Facility by ID
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/facility/{{bfid}}`
- **Description:** Retrieves technical details and availability of a specific facility.
- **Path Variables:**
  - `bid`: `69e5b2f300359747e59f`
  - `bfid`: `69e5c8e20008b25a429e`

### 4. Update Facility
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/facility/{{bfid}}`
- **Description:** Modifies the capacity, pricing, or name of a facility.
- **Path Variables:**
  - `bid`: `69e5b2f300359747e59f`
  - `bfid`: `69e5c8e20008b25a429e`

### 5. Delete Facility
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/facility/{{bfid}}`
- **Description:** Removes a facility from a branch.
- **Path Variables:**
  - `bid`: `69e5b2f300359747e59f`
  - `bfid`: `69e5c8e20008b25a429e`

---

##  Branch Facility Types
Categorization of facilities.

### 1. Create Facility Type
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/facility-types`
- **Description:** Defines a new category for facilities (e.g., "Private Office", "Conference Room").

### 2. Get Facility Type by ID
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/facility-type/{{bftid}}`
- **Description:** Retrieves the attributes of a specific facility category.
- **Path Variables:**
  - `bid`: `69e5b2f300359747e59f`
  - `bftid`: `69e5c89c000787ca13e9`

### 3. Update Facility Type
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/facility-type/{{bftid}}`
- **Description:** Modifies a facility type definition.
- **Path Variables:**
  - `bid`: `69e5b2f300359747e59f`
  - `bftid`: `69e5c89c000787ca13e9`

### 4. Delete Facility Type
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/facility-type/{{bftid}}`
- **Description:** Deletes a facility category from the system.
- **Path Variables:**
  - `bid`: `69e5b2f300359747e59f`
  - `bftid`: `69e5c89c000787ca13e9`

---

##  Branch Reviews
Feedback and ratings for branches.

### 1. Create Review
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/branch/:bid/reviews`
- **Description:** Allows users to submit a rating and comment for a branch.

### 2. Get Review by ID
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/review/{{brid}}`
- **Description:** Retrieves a specific review and its metadata.
- **Path Variables:**
  - `bid`: `69e5b2f300359747e59f`
  - `brid`: `review123`

### 3. Update Review
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/review/{{brid}}`
- **Description:** Allows a user to edit their previously submitted review.
- **Path Variables:**
  - `bid`: `69e5b2f300359747e59f`
  - `brid`: `review123`

### 4. Delete Review
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/review/{{brid}}`
- **Description:** Removes a review from the system.
- **Path Variables:**
  - `bid`: `69e5b2f300359747e59f`
  - `brid`: `review123`

---

## Booking
Reservation management for facilities.

### 1. Create Booking
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/booking`
- **Description:** Places a reservation for a specific facility at a given time.

### 2. Get All Bookings
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/booking`
- **Description:** Lists all bookings (filters typically apply for user or entity).

### 3. Get Booking by ID
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/booking/{{boid}}`
- **Description:** Retrieves full reservation details including status and billing.
- **Path Variables:**
  - `boid`: `booking123`

### 4. Update Booking
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/booking/{{boid}}`
- **Description:** Modifies time, facility, or metadata for an existing booking.
- **Path Variables:**
  - `boid`: `booking123`

### 5. Delete Booking
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/booking/{{boid}}`
- **Description:** Cancels a reservation.
- **Path Variables:**
  - `boid`: `booking123`

---

##  Guest
Visitor registration and access management.

### 1. Invite Guest
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/branch/:bid/guests/invite`
- **Description:** Pre-registers a guest and sends them an invitation link or QR.

### 2. Update Guest Status
- **Method:** `PATCH`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/guests/{{bgid}}/status`
- **Description:** Manually updates guest state (e.g., approved, denied).
- **Path Variables:**
  - `bid`: `69e5b2f300359747e59f`
  - `bgid`: `69e5c8d40008125a429d`

### 3. Get Guest QR Pass
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/guests/{{qrCode}}`
- **Description:** Generates or retrieves the digital entry pass for a guest.
- **Path Variables:**
  - `qrCode`: `QR-69e5c8d40008125a429d`

### 4. Guest Check-in
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/guests/{{bgid}}/checkin`
- **Description:** Records the physical arrival of a guest at the branch.
- **Path Variables:**
  - `bid`: `69e5b2f300359747e59f`
  - `bgid`: `69e5c8d40008125a429d`

### 5. Guest Check-out
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/guests/{{bgid}}/checkout`
- **Description:** Records the departure of a guest.
- **Path Variables:**
  - `bid`: `69e5b2f300359747e59f`
  - `bgid`: `69e5c8d40008125a429d`

---

##  Assignment
Task or resource assignments.

### 1. Create Assignment
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/assignments`
- **Description:** Assigns a specific task or workspace to a team member.

### 2. Get Assignment by ID
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/assignment/:id`
- **Description:** Retrieves the status and details of a resource assignment.
- **Path Variables:**
  - `id`: `assignment123`

### 3. Update Assignment
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/assignment/:id`
- **Description:** Updates the owner or parameters of an assignment.
- **Path Variables:**
  - `id`: `assignment123`

### 4. Delete Assignment
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/assignment/:id`
- **Description:** Reclaims an assigned resource or deletes the task record.
- **Path Variables:**
  - `id`: `assignment123`

---

## Usage
Resource consumption tracking.

### 1. Create Usage Record
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/usage`
- **Description:** Logs the start or end of a resource usage session (e.g., internet usage, room occupancy).

### 2. Get Usage by ID
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/usage/:id`
- **Description:** Retrieves data for a specific usage event.
- **Path Variables:**
  - `id`: `usage123`

### 3. Update Usage
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/usage/:id`
- **Description:** Modifies metadata for a usage record.
- **Path Variables:**
  - `id`: `usage123`

### 4. Delete Usage
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/usage/:id`
- **Description:** Removes a usage record from the logs.
- **Path Variables:**
  - `id`: `usage123`

---

##  Tickets
Support and issue tracking.

### 1. Create Ticket
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/tickets`
- **Description:** Opens a new support request or incident ticket.

### 2. Get All Tickets
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/tickets`
- **Description:** Lists all support tickets.

### 3. Get Ticket by ID
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/tickets/{{tkid}}`
- **Description:** Retrieves the full history and status of a support ticket.
- **Path Variables:**
  - `tkid`: `69e5b2310003ce9152fd`

### 4. Update Ticket
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/tickets/{{tkid}}`
- **Description:** Modifies the title or core description of a ticket.
- **Path Variables:**
  - `tkid`: `69e5b2310003ce9152fd`

### 5. Delete Ticket
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/tickets/{{tkid}}`
- **Description:** Removes a ticket from the system.
- **Path Variables:**
  - `tkid`: `69e5b2310003ce9152fd`

### 6. Add Ticket Comment
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/tickets/{{tkid}}/comments`
- **Description:** Adds a public or internal comment to a support thread.
- **Path Variables:**
  - `tkid`: `69e5b2310003ce9152fd`

### 7. Get Ticket Comments
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/tickets/{{tkid}}/comments`
- **Description:** Retrieves all comments for a specific ticket.
- **Path Variables:**
  - `tkid`: `69e5b2310003ce9152fd`

### 8. Update Ticket Status
- **Method:** `PATCH`
- **URL:** `{{baseUrl}}/api/tickets/{{tkid}}/status`
- **Description:** Changes the ticket lifecycle state (e.g., Open -> In Progress -> Resolved).
- **Path Variables:**
  - `tkid`: `69e5b2310003ce9152fd`

### 9. Create Ticket Category
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/ticket-categories`
- **Description:** Creates a new classification for support issues (e.g., "Network", "Maintenance").

### 10. Get All Ticket Categories
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/ticket-categories`
- **Description:** Lists all available ticket classifications.

### 11. Update Ticket Category
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/tickets/categories/:id`
- **Description:** Renames or updates a ticket category.
- **Path Variables:**
  - `id`: `category123`

### 12. Deactivate Ticket Category
- **Method:** `PATCH`
- **URL:** `{{baseUrl}}/api/tickets/categories/:id/deactivate`
- **Description:** Disables a category so it can no longer be used for new tickets.
- **Path Variables:**
  - `id`: `category123`

---

##  KYC
Identity verification processes.

### 1. Create KYC
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/kyc`
- **Description:** Submits identity documents for verification.

### 2. Get All KYC
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/kyc`
- **Description:** Lists all KYC submissions (typically for admin review).

### 3. Get KYC by ID
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/kyc/:kid`
- **Description:** Retrieves the status and document data for a specific KYC request.
- **Path Variables:**
  - `kid`: `kyc123`

### 4. Update KYC
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/kyc/:kid`
- **Description:** Allows re-submission of documents if previously rejected.
- **Path Variables:**
  - `kid`: `kyc123`

### 5. Delete KYC
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/kyc/:kid`
- **Description:** Removes a KYC record from the system.
- **Path Variables:**
  - `kid`: `kyc123`

### 6. Mark KYC Success
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/kyc/:kid/success`
- **Description:** Admin-only: Verifies a KYC submission as successful.
- **Path Variables:**
  - `kid`: `kyc123`

### 7. Mark KYC Failed
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/kyc/:kid/failed`
- **Description:** Admin-only: Rejects a KYC submission with a failure status.
- **Path Variables:**
  - `kid`: `kyc123`

---

##  Messages & Threads
Internal communication system.

### 1. Create Message
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/message`
- **Description:** Sends a new message within a specific thread.

### 2. Get Message by ID
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/message/:id`
- **Description:** Retrieves the content and timestamp of a single message.
- **Path Variables:**
  - `id`: `message123`

### 3. Update Message
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/message/:id`
- **Description:** Edits the content of an existing message.
- **Path Variables:**
  - `id`: `message123`

### 4. Delete Message
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/message/:id`
- **Description:** Removes a message from the thread.
- **Path Variables:**
  - `id`: `message123`

### 5. Create Thread
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/thread`
- **Description:** Initializes a new conversation thread (direct or group).

### 6. Get Thread by ID
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/thread/:id`
- **Description:** Retrieves thread metadata and participants.
- **Path Variables:**
  - `id`: `thread123`

### 7. Update Thread
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/thread/:id`
- **Description:** Modifies thread settings or name.
- **Path Variables:**
  - `id`: `thread123`

### 8. Delete Thread
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/thread/:id`
- **Description:** Archives or deletes an entire conversation thread.
- **Path Variables:**
  - `id`: `thread123`

---

##  Posts
Public updates and community content.

### 1. Create Post
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/post`
- **Description:** Creates a new community post or announcement.

### 2. Get All Posts
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/post`
- **Description:** Lists all public or branch-specific posts.

### 3. Get Post by ID
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/post/{{pid}}`
- **Description:** Retrieves the content and engagement metrics for a post.
- **Path Variables:**
  - `pid`: `69e5b47a003f44383c3e`

### 4. Update Post
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/post/{{pid}}`
- **Description:** Edits a previously published post.
- **Path Variables:**
  - `pid`: `69e5b47a003f44383c3e`

### 5. Delete Post
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/post/{{pid}}`
- **Description:** Removes a post from the community feed.
- **Path Variables:**
  - `pid`: `69e5b47a003f44383c3e`

### 6. Publish Post
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/:id/publish`
- **Description:** Changes a draft post to a public state.
- **Path Variables:**
  - `id`: `post123`

### 7. Archive Post
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/:id/archive`
- **Description:** Hides a post from the active feed without deleting it.
- **Path Variables:**
  - `id`: `post123`

---

##  Membership & Plans
Subscription models and credit management.

### 1. Claim Membership
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/memberships/claim`
- **Description:** Activates a membership plan for the authenticated user.
- **Path Variables:**
  - `bid`: `branch123`

### 2. Terminate Membership
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/memberships/{{mid}}/terminate`
- **Description:** Cancels an active membership.
- **Path Variables:**
  - `bid`: `branch123`
  - `mid`: `69e5d2660037cd88147d`

### 3. Grant Credits
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/:id/grant-credits`
- **Description:** Admin-only: Adds wallet credits to a user account.
- **Path Variables:**
  - `id`: `membership123`

### 4. Create Plan
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/plans`
- **Description:** Defines a new pricing plan or membership tier.
- **Path Variables:**
  - `bid`: `branch123`

### 5. Update Plan
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/plans/{{bpid}}`
- **Description:** Modifies the price or benefits of a plan.
- **Path Variables:**
  - `bid`: `branch123`
  - `bpid`: `69e5d22b0037cd88147c`

### 6. Get All Plans
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/plans`
- **Description:** Lists all available membership plans across branches.
- **Path Variables:**
  - `bid`: `branch123`

### 7. Get Plans By ID
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/plans/{{bpid}}`
- **Description:** Retrieves full pricing and benefit details for a plan.
- **Path Variables:**
  - `bid`: `branch123`
  - `bpid`: `69e5d22b0037cd88147c`

---

##  Notifications
Push and in-app alerts.

### 1. Create Notification
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/notifications`
- **Description:** Sends a system-triggered or manual notification to users.

### 2. Get User Notifications
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/notifications/:role/:uid`
- **Description:** Retrieves the notification inbox for a specific user.
- **Path Variables:**
  - `role`: `user`
  - `uid`: `69e4dec0000afcb2a182`

---

##  Invite
Entity and workspace invitations.

### 1. Send Invite
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/entities/{{eid}}/entity-user/send-invite`
- **Description:** Sends a generic platform invitation to an email or phone number.
- **Path Variables:**
  - `eid`: `69e5b22b00037e9152fc`

### 2. Accept Invite
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/entities/{{eid}}/entity-user/accept-invite`
- **Description:** Processes the acceptance of a platform invitation.
- **Path Variables:**
  - `eid`: `69e5b22b00037e9152fc`

---

*(Note: Path variables and request bodies follow the patterns established in the core API design. )*
