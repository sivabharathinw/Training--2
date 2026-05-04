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
- **Description:** Basic health check to see if the server is alive.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": "pong"
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 500,
    "message": "Internal Server Error"
  }
}
```

### 2. Version
- **Method:** `GET`
- **URL:** `{{baseUrl}}/version`
- **Description:** Returns the current API version.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "version": "1.0.0"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 500,
    "message": "Internal Server Error"
  }
}
```

### 3. Check
- **Method:** `GET`
- **URL:** `{{baseUrl}}/check`
- **Description:** System status check.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "status": "healthy"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 503,
    "message": "Service Unavailable"
  }
}
```

### 4. Get Docs
- **Method:** `GET`
- **URL:** `{{baseUrl}}/docs.json`
- **Description:** Retrieves the API documentation in JSON format.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": { ... }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 404,
    "message": "Documentation Not Found"
  }
}
```

---

##  Test
Development and debugging utilities.

### 1. Get ID Token
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/test/getIDToken`
- **Description:** Utility endpoint to generate a valid test token for development purposes.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 500,
    "message": "Internal Server Error"
  }
}
```

---

##  User
User profile and account management.

### 1. Create User
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/user`
- **Description:** Register a new user in the system.
- **Request (Body):**
```json
{
    "id": "",
    "email": "john.doe@example.com",
    "phoneNo": "+919876543210",
    "firstName": "John",
    "lastName": "Doe",
    "profileImageUrl": "https://example.com/images/profiles/john-doe.jpg",
    "provider": "google",
    "isDisabled": false
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "email": "john.doe@example.com",
    "phoneNo": "+919876543210",
    "firstName": "John",
    "lastName": "Doe",
    "profileImageUrl": "https://example.com/images/profiles/john-doe.jpg",
    "isDisabled": false,
    "createdAt": "2026-04-27T10:26:53.720+00:00",
    "updatedAt": "2026-04-27T10:39:26.582+00:00",
    "$sequence": "1",
    "id": "69ef394f001875366226"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 400,
    "message": "Invalid user data"
  }
}
```

### 2. Get User
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/user/:uid`
- **Description:** Retrieve user details by UID.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "email": "shravani.s@nativewit.in",
    "phoneNo": "+917358329567",
    "firstName": "Shravani",
    "lastName": "",
    "profileImageUrl": "http://localhost/v1/storage/buckets/witspace-storage/files/69ef3cde6f54054461d1/view?project=witspace-dev",
    "isDisabled": false,
    "createdAt": "2026-04-27T10:26:53.720+00:00",
    "updatedAt": "2026-04-27T10:39:26.582+00:00",
    "id": "69ef394f001875366226"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 404,
    "message": "User Not Found"
  }
}
```

### 3. Update User
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/user/:uid`
- **Description:** Update existing user details.
- **Request (Body):**
```json
{
    "id": "{{uid}}",
    "email": "john.doe@example.com",
    "phoneNo": "+919876543210",
    "firstName": "John",
    "lastName": "Doe",
    "profileImageUrl": "https://example.com/images/profiles/john-doe.jpg",
    "provider": "google",
    "isDisabled": false
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "69ef394f001875366226",
    "updated": true
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 401,
    "message": "Unauthorized"
  }
}
```

### 4. Delete User
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/user/:uid`
- **Description:** Delete a user account.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": "User deleted successfully"
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 403,
    "message": "Forbidden"
  }
}
```

### 5. Disable User
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/user/disable`
- **Description:** Disable a user account.
- **Request (Body):**
```json
{
  "uid": "69e21b3e001c9a17aba5"
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "uid": "69e21b3e001c9a17aba5",
    "disabled": true
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 400,
    "message": "Bad Request"
  }
}
```

---

##  User Meta
User-specific metadata and preferences.

### 1. Add Facility to Favorites
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/user-meta/addFacilityToFav/{{bfid}}`
- **Description:** Add a facility to the user's favorite list.
- **Request (Body):**
```json
{
  "uid": "user123"
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "uid": "user123",
    "bfid": "69ef3cde6f54054461d1",
    "added": true
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 400,
    "message": "Already in favorites"
  }
}
```

### 2. Remove Facility from Favorites
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/user-meta/removeFacilityFromFav/{{bfid}}`
- **Description:** Remove a facility from the user's favorite list.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "removed": true
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 404,
    "message": "Facility not found in favorites"
  }
}
```

---

##  Entities
Management of workspace organizations and tenants.

### 1. Create Entity
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/entities`
- **Description:** Create a new business entity or organization.
- **Request (Body):**
```json
{
    "id": "",
    "name": "Tech Corp",
    "email": "contact@techcorp.com",
    "phoneNo": "+1234567890",
    "profilePic": "https://example.com/logo.png",
    "isSpaceOrganization": true,
    "gst": "29ABCDE1234F1Z5",
    "pan": "ABCDE1234F"
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "69e4dec0000afcb2a182",
    "name": "Tech Corp",
    "createdAt": "2026-04-27T10:26:53.720+00:00"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 400,
    "message": "GST number already exists"
  }
}
```

### 2. Get All Entities
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/entities`
- **Description:** Retrieve a list of all entities.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "69e4dec0000afcb2a182",
      "name": "Tech Corp"
    },
    "..."
  ]
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 500,
    "message": "Internal Server Error"
  }
}
```

### 3. Get Entity by ID
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/entities/{{eid}}`
- **Description:** Retrieve detailed information about a specific entity.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "69e4dec0000afcb2a182",
    "name": "Tech Corp",
    "email": "contact@techcorp.com"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 404,
    "message": "Entity Not Found"
  }
}
```

### 4. Update Entity
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/entities/{{eid}}`
- **Description:** Update entity details.
- **Request (Body):**
```json
{
  "name": "Tech Corp Updated",
  "email": "newemail@techcorp.com",
  "address": {
    "addressLine": "456 New Street",
    "city": "New York",
    "state": "NY",
    "country": "USA",
    "pinCode": 10002
  }
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "69e4dec0000afcb2a182",
    "updated": true
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 400,
    "message": "Invalid address data"
  }
}
```

### 5. Delete Entity
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/entities/{{eid}}`
- **Description:** Permanently delete an entity and its configurations.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": "Entity deleted successfully"
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 403,
    "message": "Deletion restricted for active entities"
  }
}
```

### 6. Invite Tenant
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/entities/:eid/tenants/invite`
- **Description:** Send an invitation to a new tenant.
- **Request (Body):**
```json
{
  "inviterId": "user123",
  "role": "admin",
  "entityUser": {
    "uid": "tenant123",
    "eid": "entity123",
    "phoneNo": "+1234567890",
    "email": "tenant@example.com",
    "firstName": "John",
    "lastName": "Tenant"
  }
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "inviteId": "link123",
    "status": "pending"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 409,
    "message": "Tenant already invited"
  }
}
```

### 7. Accept Tenant Invite
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/entities/:eid/tenants/:linkId/accept`
- **Description:** Process the acceptance of a tenant invitation.
- **Request (Body):**
```json
{
  "uid": "tenant123"
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "status": "active"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 410,
    "message": "Invite expired"
  }
}
```

### 8. Get Entity Tenants
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/entities/:eid/tenants`
- **Description:** List all tenants associated with an entity.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "tenant123",
      "email": "tenant@example.com",
      "status": "active"
    },
    "..."
  ]
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 401,
    "message": "Unauthorized access"
  }
}
```

### 9. Get Tenant by Link ID
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/entities/:eid/tenants/:linkId`
- **Description:** Retrieve tenant details using the unique link ID.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "uid": "tenant123",
    "email": "tenant@example.com"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 404,
    "message": "Invite link not found"
  }
}
```

### 10. Delete Tenant
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/entities/:eid/tenants/:linkId`
- **Description:** Remove a tenant from an entity.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": "Tenant removed successfully"
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 403,
    "message": "Cannot delete active tenant"
  }
}
```

---

##  Entity Users
User associations within an entity.

### 1. Get User Entities
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/user-entities`
- **Description:** Get all entities the current user belongs to.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "entity123",
      "name": "Tech Corp"
    },
    "..."
  ]
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 401,
    "message": "Unauthorized"
  }
}
```

### 2. Get User Branches
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/user-branches`
- **Description:** Get all branches the current user has access to.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "branch123",
      "name": "Downtown Branch"
    },
    "..."
  ]
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 401,
    "message": "Unauthorized"
  }
}
```

---

##  Entity User Roles
Role management for users within entities.

### 1. Create Entity User Role
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/entity-user-role`
- **Description:** Assign multiple roles to a user within an entity.
- **Request (Body):**
```json
{
  "roles": {
    "role1": {
      "uid": "user123",
      "eid": "entity123",
      "bid": "branch123",
      "tid": "tenant123",
      "role": "admin",
      "access": "entity"
    }
  }
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "status": "roles_assigned"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 400,
    "message": "Invalid role configuration"
  }
}
```

### 2. Add Entity User
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/entity-user-role/add-entity-user`
- **Description:** Add a single user to an entity with specified access level.
- **Request (Body):**
```json
{
  "uid": "user123",
  "eid": "entity123",
  "role": "manager",
  "access": "branch",
  "bid": "branch123"
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "status": "user_added"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 403,
    "message": "Permission denied"
  }
}
```

### 3. Get Entity Users
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/entity-user-role/entity-user`
- **Description:** List all users belonging to the requester's entity.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": [
    {
      "uid": "user123",
      "role": "admin"
    },
    "..."
  ]
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 401,
    "message": "Unauthorized"
  }
}
```

### 4. Get User Entities
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/entity-user-role/user-entity`
- **Description:** Retrieves all role assignments for a specific user across all entities.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": [
    {
      "eid": "69e4dec0000afcb2a182",
      "role": "admin",
      "access": "entity"
    },
    "..."
  ]
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 401,
    "message": "Unauthorized"
  }
}
```

### 5. Delete Entity User Role
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/entity-user-role/:eid/:uid`
- **Description:** Removes a user's role assignment or deletes a custom role definition.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "deleted": true
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 403,
    "message": "Cannot delete primary admin"
  }
}
```

---

##  Branch
Management of individual office locations.

### 1. Create Branch
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/branch`
- **Description:** Create a new physical branch for an entity.
- **Request (Body):**
```json
{
    "id": "",
    "eid": "{{eid}}",
    "email": "branch@example.com",
    "phoneNo": "+1234567890",
    "name": "Downtown Branch",
    "description": "Main downtown coworking space",
    "website": "https://downtown.example.com",
    "profilePic": "https://example.com/branch-logo.jpg",
    "occupancy": 100,
    "address": {
        "addressLine": "789 Business Ave",
        "landmark": "Next to Tech Hub",
        "city": "San Francisco",
        "state": "CA",
        "country": "USA",
        "pinCode": 94102
    },
    "location": {
        "lat": 37.7749,
        "long": -122.4194
    },
    "floorPlans": [
        "https://example.com/floor1.pdf",
        "https://example.com/floor2.pdf"
    ],
    "floor": 3,
    "size": 5000,
    "images": [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg"
    ],
    "operatingHours": {
        "hours": []
    }
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "69e5b2f300359747e59f",
    "name": "Downtown Branch"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 400,
    "message": "Entity ID is required"
  }
}
```

### 2. Get All Branches
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/branch`
- **Description:** List all available branches.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "69e5b2f300359747e59f",
      "name": "Downtown Branch"
    },
    "..."
  ]
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 500,
    "message": "Internal Server Error"
  }
}
```

### 3. Get Branch by ID
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}`
- **Description:** Retrieve details for a specific branch.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "69e5b2f300359747e59f",
    "name": "Downtown Branch",
    "email": "branch@example.com"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 404,
    "message": "Branch Not Found"
  }
}
```

### 4. Update Branch
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/branch/:bid`
- **Description:** Update branch information.
- **Request (Body):**
```json
{
  "name": "Downtown Branch - Updated",
  "description": "Updated description",
  "occupancy": 150,
  "operatingHours": {
    "hours": [
      {
        "weekday": 1,
        "open": "08:00",
        "close": "20:00"
      }
    ]
  }
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "69e5b2f300359747e59f",
    "updated": true
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 400,
    "message": "Invalid operating hours"
  }
}
```

### 5. Delete Branch
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/branch/:bid`
- **Description:** Remove a branch from the system.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": "Branch deleted successfully"
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 403,
    "message": "Permission Denied"
  }
}
```

---

##  Branch Config
Configuration settings per branch.

### 1. Create Branch Config
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/branch-config/{{bid}}`
- **Description:** Set configuration parameters for a branch.
- **Request (Body):**
```json
{
 "id":"{{bid}}",
  "termsConditions": "These are the terms and conditions for using this branch. All users must comply with the rules and regulations."
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "69e5b2f300359747e59f",
    "configured": true
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 400,
    "message": "Bad Request"
  }
}
```

### 2. Get Branch Config
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/branch-config/{{bid}}`
- **Description:** Retrieve configuration details for a specific branch.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "69e5b2f300359747e59f",
    "termsConditions": "..."
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 404,
    "message": "Config Not Found"
  }
}
```

### 3. Delete Branch Config
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/branch-config/{{bid}}`
- **Description:** Reset or delete branch configuration.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": "Config deleted successfully"
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 403,
    "message": "Forbidden"
  }
}
```

---

##  Branch Facilities
Resources within a branch (Cabins, Desks, Meeting Rooms).

### 1. Create Facility
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/facility`
- **Description:** Create a new facility (room, desk, etc.) within a branch.
- **Request (Body):**
```json
{
    "id":"",
  "bid": "{{bid}}",
  "code": "CAB-008",
  "name": "Cabin 8 Seater Room",
  "description": "A Cabin with 8 seater",
  "typeId": "{{bftid}}",
  "status": "ACTIVE",
  "images": [
    "https://example.com/conf-room1.jpg",
    "https://example.com/conf-room2.jpg"
  ],
  "quantity": 1,
  "bookingType": "monthly",
  "price": 120000,
  "credits": 0,
  "occupancy": 8,
  "location": {
    "lat": 37.7749,
    "long": -122.4194
  },
  "floor": 2,
  "floorPlan": "https://example.com/floor2-plan.pdf",
  "dimensions": {
    "width": 20,
    "length": 30
  },
  "currentOccupant": null
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "69e5c8e20008b25a429e",
    "name": "Cabin 8 Seater Room"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 400,
    "message": "Facility type ID is invalid"
  }
}
```

### 2. Get All Facilities
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/facility`
- **Description:** List all facilities available in a specific branch.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "69e5c8e20008b25a429e",
      "name": "Cabin 8 Seater Room"
    },
    "..."
  ]
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 500,
    "message": "Internal Server Error"
  }
}
```

### 3. Get Facility by ID
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/facility/{{bfid}}`
- **Description:** Retrieve detailed information for a specific facility.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "69e5c8e20008b25a429e",
    "name": "Cabin 8 Seater Room",
    "price": 120000
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 404,
    "message": "Facility Not Found"
  }
}
```

### 4. Update Facility
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/facility/{{bfid}}`
- **Description:** Update facility details.
- **Request (Body):**
```json
{
    "id": "{{bfid}}",
    "bid": "{{bid}}",
    "code": "CONF-001",
    "description": "Large conference room with video conferencing",
    "typeId": "facilitytype123",
    "images": [
        "https://example.com/conf-room1.jpg",
        "https://example.com/conf-room2.jpg"
    ],
    "quantity": 1,
    "bookingType": "hourly",
    "occupancy": 12,
    "location": {
        "lat": 37.7749,
        "long": -122.4194
    },
    "floor": 2,
    "floorPlan": "https://example.com/floor2-plan.pdf",
    "dimensions": {
        "width": 20,
        "length": 30
    },
    "meta":{},
    "name": "Conference Room A - Updated",
    "status": "MAINTENANCE",
    "price": 60,
    "credits": 6
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "69e5c8e20008b25a429e",
    "updated": true
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 400,
    "message": "Invalid facility data"
  }
}
```

### 5. Delete Facility
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/facility/{{bfid}}`
- **Description:** Delete a facility from a branch.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "deleted": true
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 403,
    "message": "Cannot delete facility with active bookings"
  }
}
```

---

##  Branch Facility Types
Categorization of facilities.

### 1. Create Facility Type
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/facility-type`
- **Description:** Define a new type of facility (e.g., Cabin, Hot Desk).
- **Request (Body):**
```json
{
    "id": "",
    "bid": "{{bid}}",
    "code": "CAB",
    "name": "Cabin",
    "description": "A Dedicted Cabin For a Organization",
    "category": "ASSIGNABLE"
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "69e5c8a40007625a429c",
    "name": "Cabin"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 409,
    "message": "Type code already exists"
  }
}
```

### 2. Get Facility Type by ID
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/facility-type/{{bftid}}`
- **Description:** Retrieve details for a specific facility type.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "69e5c8a40007625a429c",
    "name": "Cabin",
    "category": "ASSIGNABLE"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 404,
    "message": "Type Not Found"
  }
}
```

### 3. Update Facility Type
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/facility-type/{{bftid}}`
- **Description:** Update facility type details.
- **Request (Body):**
```json
{
    "id": "{{bftid}}",
    "bid": "{{bid}}",
    "code": "CONF",
    "category": "BOOKABLE",
    "name": "Conference Room - Updated",
    "description": "Updated description for meeting spaces"
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "69e5c8a40007625a429c",
    "updated": true
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 400,
    "message": "Invalid category"
  }
}
```

### 4. Delete Facility Type
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/facility-type/{{bftid}}`
- **Description:** Delete a facility type.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": "Type deleted successfully"
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 403,
    "message": "Cannot delete type with active facilities"
  }
}
```

---

##  Branch Reviews
Feedback and ratings for branches.

### 1. Create Review
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/review`
- **Description:** Submit a review and rating for a branch.
- **Request (Body):**
```json
{
    "id": "",
    "uid": "{{uid}}",
    "bid": "{{bid}}",
    "rating": 5,
    "feedback": "Excellent coworking space with great amenities and helpful staff!"
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "69e5c8d40008125a429d",
    "rating": 5
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 400,
    "message": "Rating must be between 1 and 5"
  }
}
```

### 2. Get Review by ID
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/review/{{brid}}`
- **Description:** Retrieve a specific review.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "69e5c8d40008125a429d",
    "feedback": "...",
    "rating": 5
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 404,
    "message": "Review Not Found"
  }
}
```

### 3. Update Review
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/:brid`
- **Description:** Update an existing review.
- **Request (Body):**
```json
{
  "rating": 4,
  "feedback": "Great space, but could use more parking spots."
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "69e5c8d40008125a429d",
    "updated": true
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 401,
    "message": "Unauthorized"
  }
}
```

### 4. Delete Review
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/review/{{brid}}`
- **Description:** Remove a review.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": "Review deleted successfully"
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 403,
    "message": "Forbidden"
  }
}
```

---

## Booking
Reservation management for facilities.

### 1. Create Booking
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/booking`
- **Description:** Create a new booking for a facility.
- **Request (Body):**
```json
{
    "id":"",
  "branchId": "{{bid}}",
  "facilityId": "{{bfid}}",
  "startTime": "2026-04-20T09:00:00Z",
  "endTime": "2026-04-20T12:00:00Z",
  "status": "booked",
  "ownerType":"USER",
  "ownerId": "{{uid}}",
  "userId":"{{uid}}"

}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "69e5c8f10009525a429f",
    "status": "booked"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 409,
    "message": "Facility already booked for this time"
  }
}
```

### 2. Get All Bookings
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/booking`
- **Description:** List all bookings.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "69e5c8f10009525a429f",
      "status": "booked"
    },
    "..."
  ]
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 500,
    "message": "Internal Server Error"
  }
}
```

### 3. Get Booking by ID
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/booking/{{boid}}`
- **Description:** Retrieve details for a specific booking.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "69e5c8f10009525a429f",
    "startTime": "2026-04-20T09:00:00Z",
    "endTime": "2026-04-20T12:00:00Z"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 404,
    "message": "Booking Not Found"
  }
}
```

### 4. Update Booking
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/booking/{{boid}}`
- **Description:** Update booking details.
- **Request (Body):**
```json
{
    "id":"{{boid}}",
    "branchId": "{{bid}}",
    "facilityId": "{{bfid}}",
    "startTime": "2026-04-20T09:00:00Z",
    "endTime": "2026-04-20T13:00:00Z",
    "status": "booked",
    "ownerType":"USER",
    "ownerId": "{{uid}}",
    "userId":"{{uid}}"
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "69e5c8f10009525a429f",
    "updated": true
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 400,
    "message": "Invalid time range"
  }
}
```

### 5. Delete Booking
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/booking/{{boid}}`
- **Description:** Cancel a booking.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "deleted": true
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 403,
    "message": "Cannot cancel past booking"
  }
}
```

---

##  Guest
Visitor registration and access management.

### 1. Invite Guest
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/guests/invite`
- **Description:** Send an invitation to a guest for branch access.
- **Request (Body):**
```json
{
    "id": "",
    "branchId": "{{bid}}",
    "name": "Jane Guest",
    "email": "guest@example.com",
    "phone": "+1234567890",
    "emergencyContact": "+911234567890",
    "invitedBy": "{{uid}}",
    "qrPassCode": "",
    "validFrom": "2026-04-21T00:00:00Z",
    "validTo": "2026-04-21T00:00:00Z",
    "status": "pending"
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "69e5c8d40008125a429d",
    "status": "pending"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 400,
    "message": "Invalid date range"
  }
}
```

### 2. Update Guest Status
- **Method:** `PATCH`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/guests/{{bgid}}/status`
- **Description:** Update the approval status of a guest.
- **Request (Body):**
```json
{
  "approvalStatus": "approved"
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "status": "approved"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 401,
    "message": "Unauthorized"
  }
}
```

### 3. Get Guest QR Pass
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/guests/QR-:passId`
- **Description:** Retrieve the QR pass details for a guest.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "qrCode": "...",
    "validUntil": "2026-04-21T00:00:00Z"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 404,
    "message": "Pass Not Found"
  }
}
```

### 4. Guest Check-in
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/guests/{{bgid}}/checkin`
- **Description:** Record guest check-in time.
- **Request (Body):**
```json
{
  "checkInTime": "2026-04-20T09:00:00Z"
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "checkedIn": true
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 400,
    "message": "Already checked in"
  }
}
```

### 5. Guest Check-out
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/guests/{{bgid}}/checkout`
- **Description:** Record guest check-out time.
- **Request (Body):**
```json
{
  "checkOutTime": "2026-04-20T17:00:00Z"
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "checkedOut": true
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 400,
    "message": "Not checked in"
  }
}
```

---

##  Assignment
Task or resource assignments.

### 1. Create Assignment
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/assignment`
- **Description:** Assign a facility to a user for a dedicated period.
- **Request (Body):**
```json
{
  "uid": "user123",
  "bid": "branch123",
  "fid": "facility123",
  "startDate": "2026-04-20",
  "endDate": "2026-07-20",
  "assignmentType": "dedicated"
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "assignment123",
    "status": "assigned"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 400,
    "message": "Facility already assigned"
  }
}
```

### 2. Get Assignment by ID
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/assignment/:id`
- **Description:** Retrieve assignment details.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "assignment123",
    "uid": "user123",
    "startDate": "2026-04-20"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 404,
    "message": "Assignment Not Found"
  }
}
```

### 3. Update Assignment
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/assignment/:id`
- **Description:** Update assignment duration.
- **Request (Body):**
```json
{
  "endDate": "2026-08-20"
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "assignment123",
    "updated": true
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 401,
    "message": "Unauthorized"
  }
}
```

### 4. Delete Assignment
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/assignment/:id`
- **Description:** Remove an assignment.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": "Assignment deleted successfully"
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 403,
    "message": "Forbidden"
  }
}
```

---

## Usage
Resource consumption tracking.

### 1. Create Usage Record
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/usage`
- **Description:** Record the usage of a facility.
- **Request (Body):**
```json
{
  "uid": "user123",
  "bid": "branch123",
  "fid": "facility123",
  "usageType": "hourly",
  "startTime": "2026-04-20T09:00:00Z",
  "endTime": "2026-04-20T12:00:00Z",
  "credits": 3
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "usage123",
    "credits_deducted": 3
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 402,
    "message": "Insufficient credits"
  }
}
```

### 2. Get Usage by ID
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/usage/:id`
- **Description:** Retrieve usage details.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "usage123",
    "usageType": "hourly"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 404,
    "message": "Usage Record Not Found"
  }
}
```

### 3. Update Usage
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/usage/:id`
- **Description:** Update usage duration or credits.
- **Request (Body):**
```json
{
  "endTime": "2026-04-20T13:00:00Z",
  "credits": 4
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "updated": true
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 401,
    "message": "Unauthorized"
  }
}
```

### 4. Delete Usage
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/usage/:id`
- **Description:** Delete a usage record.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": "Usage record deleted successfully"
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 403,
    "message": "Forbidden"
  }
}
```

---

##  Tickets
Support and issue tracking.

### 1. Create Ticket
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/tickets`
- **Description:** Open a new support ticket.
- **Request (Body):**
```json
{
    "id":"",
    "title": "Internet connectivity issue",
    "description": "Unable to connect to WiFi in conference room A",
    "status": "open",
    "category":"",
    "createdBy":"{{uid}}"
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "tkid123",
    "status": "open"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 400,
    "message": "Title is required"
  }
}
```

### 2. Get All Tickets
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/tickets`
- **Description:** List all support tickets.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "tkid123",
      "title": "Restroom maintenance"
    },
    "..."
  ]
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 500,
    "message": "Internal Server Error"
  }
}
```

### 3. Get Ticket by ID
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/tickets/{{tkid}}`
- **Description:** Retrieve details for a specific ticket.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "tkid123",
    "description": "..."
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 404,
    "message": "Ticket Not Found"
  }
}
```

### 4. Update Ticket
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/tickets/{{tkid}}`
- **Description:** Update ticket details or status.
- **Request (Body):**
```json
{
    "id":"{{tkid}}",
    "title": "Internet connectivity issue",
    "description": "Unable to connect to WiFi in conference room A",
    "status": "resolved",
    "category": "",
    "createdBy": "69e5b2310003ce9152fd",
    "createdAt": "2026-04-20T06:54:41.427+00:00",
    "updatedAt": "2026-04-20T06:54:41.427+00:00",
    "assignedTo": null,
    "workspaceId": null,
    "targetType": null,
    "targetId": null
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "tkid123",
    "updated": true
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 401,
    "message": "Unauthorized"
  }
}
```

### 5. Delete Ticket
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/tickets/{{tkid}}`
- **Description:** Delete a support ticket.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "deleted": true
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 403,
    "message": "Forbidden"
  }
}
```

### 6. Add Ticket Comment
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/tickets/{{tkid}}/comments`
- **Description:** Post a comment or update on a ticket.
- **Request (Body):**
```json
{
    "ticketId":"{{tkid}}",
    "userId": "{{uid}}",
    "message": "I've reset the router and the issue persists."
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "commentId": "comment123",
    "status": "added"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 400,
    "message": "Comment cannot be empty"
  }
}
```

### 7. Get Ticket Comments
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/tickets/{{tkid}}/comments`
- **Description:** List all comments for a specific ticket.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": [
    {
      "commentId": "comment123",
      "message": "..."
    },
    "..."
  ]
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 404,
    "message": "Ticket Not Found"
  }
}
```

### 8. Update Ticket Status
- **Method:** `PATCH`
- **URL:** `{{baseUrl}}/api/tickets/{{tkid}}/status`
- **Description:** Quickly update only the status of a ticket.
- **Request (Body):**
```json
{
  "status": "resolved"
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "status": "resolved"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 401,
    "message": "Unauthorized"
  }
}
```

### 9. Create Ticket Category
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/tickets/categories`
- **Description:** Define a new category for sorting tickets.
- **Request (Body):**
```json
{
  "name": "Technical Issues",
  "description": "Internet, WiFi, hardware problems",
  "isActive": true
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "cat123",
    "name": "Technical Issues"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 409,
    "message": "Category already exists"
  }
}
```

### 10. Get All Ticket Categories
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/tickets/categories`
- **Description:** List all ticket categories.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "cat123",
      "name": "Technical Issues"
    },
    "..."
  ]
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 500,
    "message": "Internal Server Error"
  }
}
```

### 11. Update Ticket Category
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/tickets/categories/:id`
- **Description:** Modify a ticket category.
- **Request (Body):**
```json
{
  "name": "Technical Support",
  "description": "All technical and connectivity issues"
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "cat123",
    "updated": true
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 401,
    "message": "Unauthorized"
  }
}
```

### 12. Deactivate Ticket Category
- **Method:** `PATCH`
- **URL:** `{{baseUrl}}/api/tickets/categories/:id/deactivate`
- **Description:** Mark a category as inactive.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "cat123",
    "isActive": false
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 404,
    "message": "Category Not Found"
  }
}
```

---

##  KYC
Identity verification processes.

### 1. Create KYC
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/kyc`
- **Description:** Submit KYC documents for verification.
- **Request (Body):**
```json
{
  "uid": "user123",
  "documentType": "passport",
  "documentNumber": "A12345678",
  "fullName": "John Doe",
  "dateOfBirth": "1990-01-15",
  "address": {
    "addressLine": "123 Main St",
    "city": "New York",
    "state": "NY",
    "country": "USA",
    "pinCode": 10001
  },
  "documentImages": [
    "https://example.com/passport-front.jpg",
    "https://example.com/passport-back.jpg"
  ],
  "status": "pending"
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "kycId": "kyc123",
    "status": "pending"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 400,
    "message": "Incomplete documentation"
  }
}
```

### 2. Get All KYC
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/kyc`
- **Description:** List all KYC submissions.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": [
    {
      "kycId": "kyc123",
      "fullName": "John Doe"
    },
    "..."
  ]
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 500,
    "message": "Internal Server Error"
  }
}
```

### 3. Get KYC by ID
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/kyc/:kid`
- **Description:** Retrieve details of a KYC submission.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "kycId": "kyc123",
    "status": "pending",
    "fullName": "John Doe"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 404,
    "message": "KYC Not Found"
  }
}
```

### 4. Update KYC
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/kyc/:kid`
- **Description:** Update KYC status or information.
- **Request (Body):**
```json
{
  "status": "verified"
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "kycId": "kyc123",
    "status": "verified"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 401,
    "message": "Unauthorized"
  }
}
```

### 5. Delete KYC
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/kyc/:kid`
- **Description:** Delete a KYC record.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": "KYC record deleted successfully"
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 403,
    "message": "Forbidden"
  }
}
```

### 6. Mark KYC Success
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/kyc/:kid/success`
- **Description:** Flag a KYC as successfully verified.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "kycId": "kyc123",
    "verified": true
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 404,
    "message": "KYC Not Found"
  }
}
```

### 7. Mark KYC Failed
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/kyc/:kid/failed`
- **Description:** Flag a KYC as failed verification.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "kycId": "kyc123",
    "verified": false
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 404,
    "message": "KYC Not Found"
  }
}
```

---

##  Messages & Threads
Internal communication system.

### 1. Create Message
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/message`
- **Description:** Send a new message within a thread.
- **Request (Body):**
```json
{
  "threadId": "thread123",
  "senderId": "user123",
  "content": "Hello, I have a question about my booking.",
  "messageType": "text"
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "messageId": "msg123",
    "timestamp": "2026-04-20T09:00:00Z"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 404,
    "message": "Thread Not Found"
  }
}
```

### 2. Get Message by ID
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/message/:id`
- **Description:** Retrieve a specific message.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "msg123",
    "content": "..."
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 404,
    "message": "Message Not Found"
  }
}
```

### 3. Update Message
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/message/:id`
- **Description:** Edit a sent message.
- **Request (Body):**
```json
{
  "content": "Updated message content"
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "updated": true
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 401,
    "message": "Unauthorized"
  }
}
```

### 4. Delete Message
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/message/:id`
- **Description:** Delete a message.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": "Message deleted successfully"
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 403,
    "message": "Forbidden"
  }
}
```

### 5. Create Thread
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/thread`
- **Description:** Start a new message thread between participants.
- **Request (Body):**
```json
{
  "participants": ["user123", "user456"],
  "subject": "Booking inquiry",
  "threadType": "direct"
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "threadId": "thread123",
    "status": "created"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 400,
    "message": "Invalid participants"
  }
}
```

### 6. Get Thread by ID
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/thread/:id`
- **Description:** Retrieve details and participant list for a thread.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "thread123",
    "subject": "..."
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 404,
    "message": "Thread Not Found"
  }
}
```

### 7. Update Thread
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/thread/:id`
- **Description:** Update thread metadata like subject.
- **Request (Body):**
```json
{
  "subject": "Updated subject"
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "updated": true
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 401,
    "message": "Unauthorized"
  }
}
```

### 8. Delete Thread
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/thread/:id`
- **Description:** Delete an entire message thread.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": "Thread deleted successfully"
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 403,
    "message": "Forbidden"
  }
}
```

---

##  Posts
Public updates and community content.

### 1. Create Post
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/post`
- **Description:** Create a new social or informational post for a branch.
- **Request (Body):**
```json
{
    "id": "",
    "branchId": "{{bid}}",
    "contentType":"post",
    "access":"branch",
    "accessId":"{{bid}}",
    "title": "Welcome to our new coworking space!",
    "description": "We're excited to announce the opening of our new branch in downtown.",
    "content": [
        "https://example.com/post-image1.jpg"
    ],
    "tags": [
        "announcement",
        "opening"
    ]
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "post123",
    "status": "draft"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 400,
    "message": "Title and content are required"
  }
}
```

### 2. Get All Posts
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/post`
- **Description:** List all posts available to the requester.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "post123",
      "title": "Welcome to our new coworking space!"
    },
    "..."
  ]
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 500,
    "message": "Internal Server Error"
  }
}
```

### 3. Get Post by ID
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/post/{{pid}}`
- **Description:** Retrieve a specific post.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "post123",
    "content": "..."
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 404,
    "message": "Post Not Found"
  }
}
```

### 4. Update Post
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/post/{{pid}}`
- **Description:** Update post details.
- **Request (Body):**
```json
{
    "id": "{{pid}}",
    "branchId": "{{bid}}",
    "contentType":"post",
    "access":"branch",
    "accessId":"{{bid}}",
    "title": "Welcome to our new coworking space!",
    "description": "We're excited to announce the opening of our new branch in downtown.",
    "content": [
        "https://example.com/post-image1.jpg"
    ],
    "tags": [
        "announcement",
        "Closed"
    ]
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "post123",
    "updated": true
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 401,
    "message": "Unauthorized"
  }
}
```

### 5. Delete Post
- **Method:** `DELETE`
- **URL:** `{{baseUrl}}/api/post/{{pid}}`
- **Description:** Delete a post.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": "Post deleted successfully"
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 403,
    "message": "Forbidden"
  }
}
```

### 6. Publish Post
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/:id/publish`
- **Description:** Change post status to published.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "status": "published"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 404,
    "message": "Post Not Found"
  }
}
```

### 7. Archive Post
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/:id/archive`
- **Description:** Move a post to archives.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "status": "archived"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 404,
    "message": "Post Not Found"
  }
}
```

---

##  Membership & Plans
Subscription models and credit management.

### 1. Claim Membership
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/memberships/claim`
- **Description:** Join a branch membership plan.
- **Request (Body):**
```json
{
  "uid": "user123",
  "planId": "{{bpid}}",
  "ownerType": "USER",
  "ownerId":"{{uid}}",
  "startDate":"2026-04-21T00:00:00Z"
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "membershipId": "mid123",
    "status": "active"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 400,
    "message": "User already has an active membership"
  }
}
```

### 2. Terminate Membership
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/memberships/{{mid}}/terminate`
- **Description:** End a membership plan prematurely.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "terminated": true,
    "effectiveDate": "2026-05-21T00:00:00Z"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 404,
    "message": "Membership Not Found"
  }
}
```

### 3. Grant Credits
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/:id/grant-credits`
- **Description:** Manually add credits to a user's membership.
- **Request (Body):**
```json
{
  "credits": 100,
  "reason": "Promotional bonus"
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "newBalance": 250
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 401,
    "message": "Unauthorized"
  }
}
```

### 4. Create Plan
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/plans`
- **Description:** Create a new membership plan for a branch.
- **Request (Body):**
```json
{
    "id": "",
    "branchId": "{{bid}}",
    "name": "8 Seater Cabin",
    "description": "",
    "durationDays": 30,
    "price": 120000,
    "includedCredits": 10000,
    "status": "PUBLISHED",
    "entitlements": [
        {
            "facilityId": "{{bfid}}",
            "accessMode": "INCLUDED",
            "maxUnits": 1
        }
    ]
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "plan123",
    "status": "PUBLISHED"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 400,
    "message": "Invalid entitlements"
  }
}
```

### 5. Update Plan
- **Method:** `PUT`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/plans/{{bpid}}`
- **Description:** Update plan details or pricing.
- **Request (Body):**
```json
{
    "id": "{{bpid}}",
    "branchId": "{{bid}}",
    "name": "8 Seater Cabin",
    "description": "",
    "durationDays": 30,
    "price": 120000,
    "includedCredits": 10000,
    "status": "PUBLISHED",
    "entitlements": [
        {
            "facilityId": "{{bfid}}",
            "accessMode": "INCLUDED",
            "maxUnits": 1
        }
    ]
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "plan123",
    "updated": true
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 401,
    "message": "Unauthorized"
  }
}
```

### 6. Get All Plans
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/plans`
- **Description:** List all plans offered by a branch.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "plan123",
      "name": "8 Seater Cabin"
    },
    "..."
  ]
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 500,
    "message": "Internal Server Error"
  }
}
```

### 7. Get Plans By ID
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/branch/{{bid}}/plans/{{bpid}}`
- **Description:** Retrieve a specific plan's details.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "plan123",
    "price": 120000
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 404,
    "message": "Plan Not Found"
  }
}
```

---

##  Notifications
Push and in-app alerts.

### 1. Create Notification
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/notifications`
- **Description:** Manually trigger a notification to a specific user.
- **Request (Body):**
```json
{
  "userId": "user123",
  "title": "Booking Confirmed",
  "message": "Your booking for Conference Room A has been confirmed.",
  "type": "booking",
  "data": {
    "bookingId": "booking123"
  }
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "notifId": "notif123",
    "status": "sent"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 400,
    "message": "Recipient ID is missing"
  }
}
```

### 2. Get User Notifications
- **Method:** `GET`
- **URL:** `{{baseUrl}}/api/notifications/:role/:uid`
- **Description:** Retrieve the notification history for a user based on their role.
- **Request (Body):** None
- **Success Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "notif123",
      "title": "Welcome!"
    },
    "..."
  ]
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 401,
    "message": "Unauthorized"
  }
}
```

---

##  Invite
Entity and workspace invitations.

### 1. Send Invite
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/entities/{{eid}}/entity-user/send-invite`
- **Description:** Invite a user to join an entity as an entity user.
- **Request (Body):**
```json
{
  "role": {
    "uid":"",
    "eid":"{{eid}}",
    "role":"manager",
    "access":"entity"
  },
  "user": {
    "id":"","uid": "",
    "eid": "{{eid}}",
    "phoneNo": "+1234567890",
    "email": "newuser@example.com",
    "firstName": "New",
    "lastName": "User"
  }
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "inviteCode": "INVITE123",
    "status": "sent"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 409,
    "message": "User already associated with entity"
  }
}
```

### 2. Accept Invite
- **Method:** `POST`
- **URL:** `{{baseUrl}}/api/entities/{{eid}}/entity-user/accept-invite`
- **Description:** Finalize onboarding for an entity user invite.
- **Request (Body):**
```json
{
  "invite": {
    "id": "69e5d766003e7ec37797",
    "code": "INVITE123",
    "inviterId": "69e4dec0000afcb2a182",
    "entityId": "{{eid}}",
    "status": "accepted",
    "role": {
      "uid": "",
      "eid": "{{eid}}",
      "role": "manager",
      "access": "entity"
    },
    "entityUser": {
      "id": "",
      "uid": "",
      "eid": "{{eid}}",
      "phoneNo": "+1234567890",
      "email": "newuser@example.com",
      "firstName": "New",
      "lastName": "User"
    }
  }
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "status": "accepted",
    "userId": "user123"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "error": {
    "errorCode": 410,
    "message": "Invite link expired"
  }
}
```
---

> [!NOTE]
> All request and response bodies follow the standardized JSON format. Success responses wrap data in a `data` object, while errors use an `error` object with specific `errorCode` and `message` fields.
