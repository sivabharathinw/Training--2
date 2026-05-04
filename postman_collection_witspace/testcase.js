/**
 * Postman Test Scripts for Witspace API Collection
 * Strictly categorized Success (200, 201, 204) and Failure (400-599) 
 * wrapped in conditional logic for clean reporting.
 */

// ==========================================
// Health Check
// ==========================================

// Request: Ping
// Method: GET
// Endpoint: {{baseUrl}}/ping
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Version
// Method: GET
// Endpoint: {{baseUrl}}/ping
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Check
// Method: GET
// Endpoint: {{baseUrl}}/check
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get Docs
// Method: GET
// Endpoint: {{baseUrl}}/docs.json
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// ==========================================
// Test
// ==========================================

// Request: Get ID Token
// Method: GET
// Endpoint: {{baseUrl}}/api/test/getIDToken
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// ==========================================
// User
// ==========================================

// Request: Create User
// Method: POST (Create)
// Endpoint: {{baseUrl}}/api/user
if (pm.response.code < 400) {
    pm.test("Success: Status code is 201", function () {
        pm.response.to.have.status(201);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get User
// Method: GET
// Endpoint: {{baseUrl}}/api/user/:uid
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Update User
// Method: PUT (Update)
// Endpoint: {{baseUrl}}/api/user/:uid
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Delete User
// Method: DELETE
// Endpoint: {{baseUrl}}/api/user/:uid
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200 or 204", function () {
        pm.expect(pm.response.code).to.be.oneOf([200, 204]);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Disable User
// Method: POST
// Endpoint: {{baseUrl}}/api/user/disable
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// ==========================================
// User Meta
// ==========================================

// Request: Add Facility to Favorites
// Method: POST
// Endpoint: {{baseUrl}}/api/user-meta/addFacilityToFav/{{bfid}}
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Remove Facility from Favorites
// Method: DELETE
// Endpoint: {{baseUrl}}/api/user-meta/removeFacilityFromFav/{{bfid}}
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200 or 204", function () {
        pm.expect(pm.response.code).to.be.oneOf([200, 204]);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// ==========================================
// Entities
// ==========================================

// Request: Create Entity
// Method: POST (Create)
// Endpoint: {{baseUrl}}/api/entities
if (pm.response.code < 400) {
    pm.test("Success: Status code is 201", function () {
        pm.response.to.have.status(201);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get All Entities
// Method: GET
// Endpoint: {{baseUrl}}/api/entities
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get Entity by ID
// Method: GET
// Endpoint: {{baseUrl}}/api/entities/{{eid}}
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Update Entity
// Method: PUT
// Endpoint: {{baseUrl}}/api/entities/{{eid}}
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Delete Entity
// Method: DELETE
// Endpoint: {{baseUrl}}/api/entities/{{eid}}
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200 or 204", function () {
        pm.expect(pm.response.code).to.be.oneOf([200, 204]);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Invite Tenant
// Method: POST
// Endpoint: {{baseUrl}}/api/entities/:eid/tenants/invite
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Accept Tenant Invite
// Method: POST
// Endpoint: {{baseUrl}}/api/entities/:eid/tenants/:linkId/accept
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get Entity Tenants
// Method: GET
// Endpoint: {{baseUrl}}/api/entities/:eid/tenants
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get Tenant by Link ID
// Method: GET
// Endpoint: {{baseUrl}}/api/entities/:eid/tenants/:linkId
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Delete Tenant
// Method: DELETE
// Endpoint: {{baseUrl}}/api/entities/:eid/tenants/:linkId
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200 or 204", function () {
        pm.expect(pm.response.code).to.be.oneOf([200, 204]);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// ==========================================
// Entity Users
// ==========================================

// Request: Get User Entities
// Method: GET
// Endpoint: {{baseUrl}}/api/user-entities
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get User Branches
// Method: GET
// Endpoint: {{baseUrl}}/api/user-branches
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// ==========================================
// Entity User Roles
// ==========================================

// Request: Create Entity User Role
// Method: POST (Create)
// Endpoint: {{baseUrl}}/api/entity-user-role
if (pm.response.code < 400) {
    pm.test("Success: Status code is 201", function () {
        pm.response.to.have.status(201);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Add Entity User
// Method: POST
// Endpoint: {{baseUrl}}/api/entity-user-role/add-entity-user
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get Entity Users
// Method: GET
// Endpoint: {{baseUrl}}/api/entity-user-role/entity-user
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get User Entities
// Method: GET
// Endpoint: {{baseUrl}}/api/entity-user-role/user-entity
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Delete Entity User Role
// Method: DELETE
// Endpoint: {{baseUrl}}/api/entity-user-role/:eid/:uid
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200 or 204", function () {
        pm.expect(pm.response.code).to.be.oneOf([200, 204]);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// ==========================================
// Branch
// ==========================================

// Request: Create Branch
// Method: POST (Create)
// Endpoint: {{baseUrl}}/api/branch
if (pm.response.code < 400) {
    pm.test("Success: Status code is 201", function () {
        pm.response.to.have.status(201);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get All Branches
// Method: GET
// Endpoint: {{baseUrl}}/api/branch
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get Branch by ID
// Method: GET
// Endpoint: {{baseUrl}}/api/branch/{{bid}}
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Update Branch
// Method: PUT
// Endpoint: {{baseUrl}}/api/branch/:bid
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Delete Branch
// Method: DELETE
// Endpoint: {{baseUrl}}/api/branch/:bid
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200 or 204", function () {
        pm.expect(pm.response.code).to.be.oneOf([200, 204]);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// ==========================================
// Branch Config
// ==========================================

// Request: Create Branch Config
// Method: POST (Create)
// Endpoint: {{baseUrl}}/api/branch-config/{{bid}}
if (pm.response.code < 400) {
    pm.test("Success: Status code is 201", function () {
        pm.response.to.have.status(201);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get Branch Config
// Method: GET
// Endpoint: {{baseUrl}}/api/branch-config/{{bid}}
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Delete Branch Config
// Method: DELETE
// Endpoint: {{baseUrl}}/api/branch-config/{{bid}}
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200 or 204", function () {
        pm.expect(pm.response.code).to.be.oneOf([200, 204]);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// ==========================================
// Branch Facilities
// ==========================================

// Request: Create Facility
// Method: POST (Create)
// Endpoint: {{baseUrl}}/api/branch/{{bid}}/facility
if (pm.response.code < 400) {
    pm.test("Success: Status code is 201", function () {
        pm.response.to.have.status(201);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get All Facilities
// Method: GET
// Endpoint: {{baseUrl}}/api/branch/{{bid}}/facility
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get Facility by ID
// Method: GET
// Endpoint: {{baseUrl}}/api/branch/{{bid}}/facility/{{bfid}}
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Update Facility
// Method: PUT
// Endpoint: {{baseUrl}}/api/branch/{{bid}}/facility/{{bfid}}
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Delete Facility
// Method: DELETE
// Endpoint: {{baseUrl}}/api/branch/{{bid}}/facility/{{bfid}}
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200 or 204", function () {
        pm.expect(pm.response.code).to.be.oneOf([200, 204]);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// ==========================================
// Branch Facility Types
// ==========================================

// Request: Create Facility Type
// Method: POST (Create)
// Endpoint: {{baseUrl}}/api/branch/{{bid}}/facility-type
if (pm.response.code < 400) {
    pm.test("Success: Status code is 201", function () {
        pm.response.to.have.status(201);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get Facility Type by ID
// Method: GET
// Endpoint: {{baseUrl}}/api/branch/{{bid}}/facility-type/{{bftid}}
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Update Facility Type
// Method: PUT
// Endpoint: {{baseUrl}}/api/branch/{{bid}}/facility-type/{{bftid}}
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Delete Facility Type
// Method: DELETE
// Endpoint: {{baseUrl}}/api/branch/{{bid}}/facility-type/{{bftid}}
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200 or 204", function () {
        pm.expect(pm.response.code).to.be.oneOf([200, 204]);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// ==========================================
// Branch Reviews
// ==========================================

// Request: Create Review
// Method: POST (Create)
// Endpoint: {{baseUrl}}/api/branch/{{bid}}/review
if (pm.response.code < 400) {
    pm.test("Success: Status code is 201", function () {
        pm.response.to.have.status(201);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get Review by ID
// Method: GET
// Endpoint: {{baseUrl}}/api/branch/{{bid}}/review/{{brid}}
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Update Review
// Method: PUT
// Endpoint: {{baseUrl}}/api/:brid
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Delete Review
// Method: DELETE
// Endpoint: {{baseUrl}}/api/branch/{{bid}}/review/{{brid}}
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200 or 204", function () {
        pm.expect(pm.response.code).to.be.oneOf([200, 204]);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// ==========================================
// Booking
// ==========================================

// Request: Create Booking
// Method: POST (Create)
// Endpoint: {{baseUrl}}/api/booking
if (pm.response.code < 400) {
    pm.test("Success: Status code is 201", function () {
        pm.response.to.have.status(201);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get All Bookings
// Method: GET
// Endpoint: {{baseUrl}}/api/booking
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get Booking by ID
// Method: GET
// Endpoint: {{baseUrl}}/api/booking/{{boid}}
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Update Booking
// Method: PUT
// Endpoint: {{baseUrl}}/api/booking/{{boid}}
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Delete Booking
// Method: DELETE
// Endpoint: {{baseUrl}}/api/booking/{{boid}}
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200 or 204", function () {
        pm.expect(pm.response.code).to.be.oneOf([200, 204]);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// ==========================================
// Guest
// ==========================================

// Request: Invite Guest
// Method: POST
// Endpoint: {{baseUrl}}/api/branch/{{bid}}/guests/invite
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Update Guest Status
// Method: PATCH
// Endpoint: {{baseUrl}}/api/branch/{{bid}}/guests/{{bgid}}/status
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get Guest QR Pass
// Method: GET
// Endpoint: {{baseUrl}}/api/guests/QR-69e5c8d40008125a429d
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Guest Check-in
// Method: POST
// Endpoint: {{baseUrl}}/api/branch/{{bid}}/guests/{{bgid}}/checkin
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Guest Check-out
// Method: POST
// Endpoint: {{baseUrl}}/api/branch/{{bid}}/guests/{{bgid}}/checkout
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// ==========================================
// Assignment
// ==========================================

// Request: Create Assignment
// Method: POST (Create)
// Endpoint: {{baseUrl}}/api/assignment
if (pm.response.code < 400) {
    pm.test("Success: Status code is 201", function () {
        pm.response.to.have.status(201);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get Assignment by ID
// Method: GET
// Endpoint: {{baseUrl}}/api/assignment/:id
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Update Assignment
// Method: PUT
// Endpoint: {{baseUrl}}/api/assignment/:id
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Delete Assignment
// Method: DELETE
// Endpoint: {{baseUrl}}/api/assignment/:id
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200 or 204", function () {
        pm.expect(pm.response.code).to.be.oneOf([200, 204]);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// ==========================================
// Usage
// ==========================================

// Request: Create Usage Record
// Method: POST (Create)
// Endpoint: {{baseUrl}}/api/usage
if (pm.response.code < 400) {
    pm.test("Success: Status code is 201", function () {
        pm.response.to.have.status(201);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get Usage by ID
// Method: GET
// Endpoint: {{baseUrl}}/api/usage/:id
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Update Usage
// Method: PUT
// Endpoint: {{baseUrl}}/api/usage/:id
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Delete Usage
// Method: DELETE
// Endpoint: {{baseUrl}}/api/usage/:id
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200 or 204", function () {
        pm.expect(pm.response.code).to.be.oneOf([200, 204]);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// ==========================================
// Tickets
// ==========================================

// Request: Create Ticket
// Method: POST (Create)
// Endpoint: {{baseUrl}}/api/tickets
if (pm.response.code < 400) {
    pm.test("Success: Status code is 201", function () {
        pm.response.to.have.status(201);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get All Tickets
// Method: GET
// Endpoint: {{baseUrl}}/api/tickets
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get Ticket by ID
// Method: GET
// Endpoint: {{baseUrl}}/api/tickets/{{tkid}}
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Update Ticket
// Method: PUT
// Endpoint: {{baseUrl}}/api/tickets/{{tkid}}
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Delete Ticket
// Method: DELETE
// Endpoint: {{baseUrl}}/api/tickets/{{tkid}}
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200 or 204", function () {
        pm.expect(pm.response.code).to.be.oneOf([200, 204]);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Add Ticket Comment
// Method: POST (Create)
// Endpoint: {{baseUrl}}/api/tickets/{{tkid}}/comments
if (pm.response.code < 400) {
    pm.test("Success: Status code is 201", function () {
        pm.response.to.have.status(201);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get Ticket Comments
// Method: GET
// Endpoint: {{baseUrl}}/api/tickets/{{tkid}}/comments
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Update Ticket Status
// Method: PATCH
// Endpoint: {{baseUrl}}/api/tickets/{{tkid}}/status
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Create Ticket Category
// Method: POST (Create)
// Endpoint: {{baseUrl}}/api/tickets/categories
if (pm.response.code < 400) {
    pm.test("Success: Status code is 201", function () {
        pm.response.to.have.status(201);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get All Ticket Categories
// Method: GET
// Endpoint: {{baseUrl}}/api/tickets/categories
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Update Ticket Category
// Method: PUT
// Endpoint: {{baseUrl}}/api/tickets/categories/:id
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Deactivate Ticket Category
// Method: PATCH
// Endpoint: {{baseUrl}}/api/tickets/categories/:id/deactivate
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// ==========================================
// KYC
// ==========================================

// Request: Create KYC
// Method: POST (Create)
// Endpoint: {{baseUrl}}/api/kyc
if (pm.response.code < 400) {
    pm.test("Success: Status code is 201", function () {
        pm.response.to.have.status(201);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get All KYC
// Method: GET
// Endpoint: {{baseUrl}}/api/kyc
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get KYC by ID
// Method: GET
// Endpoint: {{baseUrl}}/api/kyc/:kid
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Update KYC
// Method: PUT
// Endpoint: {{baseUrl}}/api/kyc/:kid
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Delete KYC
// Method: DELETE
// Endpoint: {{baseUrl}}/api/kyc/:kid
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200 or 204", function () {
        pm.expect(pm.response.code).to.be.oneOf([200, 204]);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Mark KYC Success
// Method: GET
// Endpoint: {{baseUrl}}/api/kyc/:kid/success
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Mark KYC Failed
// Method: GET
// Endpoint: {{baseUrl}}/api/kyc/:kid/failed
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// ==========================================
// Messages & Threads
// ==========================================

// Request: Create Message
// Method: POST (Create)
// Endpoint: {{baseUrl}}/api/message
if (pm.response.code < 400) {
    pm.test("Success: Status code is 201", function () {
        pm.response.to.have.status(201);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get Message by ID
// Method: GET
// Endpoint: {{baseUrl}}/api/message/:id
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Update Message
// Method: PUT
// Endpoint: {{baseUrl}}/api/message/:id
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Delete Message
// Method: DELETE
// Endpoint: {{baseUrl}}/api/message/:id
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200 or 204", function () {
        pm.expect(pm.response.code).to.be.oneOf([200, 204]);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Create Thread
// Method: POST (Create)
// Endpoint: {{baseUrl}}/api/thread
if (pm.response.code < 400) {
    pm.test("Success: Status code is 201", function () {
        pm.response.to.have.status(201);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get Thread by ID
// Method: GET
// Endpoint: {{baseUrl}}/api/thread/:id
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Update Thread
// Method: PUT
// Endpoint: {{baseUrl}}/api/thread/:id
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Delete Thread
// Method: DELETE
// Endpoint: {{baseUrl}}/api/thread/:id
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200 or 204", function () {
        pm.expect(pm.response.code).to.be.oneOf([200, 204]);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// ==========================================
// Posts
// ==========================================

// Request: Create Post
// Method: POST (Create)
// Endpoint: {{baseUrl}}/api/post
if (pm.response.code < 400) {
    pm.test("Success: Status code is 201", function () {
        pm.response.to.have.status(201);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get All Posts
// Method: GET
// Endpoint: {{baseUrl}}/api/post
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get Post by ID
// Method: GET
// Endpoint: {{baseUrl}}/api/post/{{pid}}
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Update Post
// Method: PUT
// Endpoint: {{baseUrl}}/api/post/{{pid}}
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Delete Post
// Method: DELETE
// Endpoint: {{baseUrl}}/api/post/{{pid}}
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200 or 204", function () {
        pm.expect(pm.response.code).to.be.oneOf([200, 204]);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Publish Post
// Method: POST
// Endpoint: {{baseUrl}}/api/:id/publish
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Archive Post
// Method: POST
// Endpoint: {{baseUrl}}/api/:id/archive
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// ==========================================
// Membership & Plans
// ==========================================

// Request: Claim Membership
// Method: POST
// Endpoint: {{baseUrl}}/api/branch/{{bid}}/memberships/claim
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Terminate Membership
// Method: POST
// Endpoint: {{baseUrl}}/api/branch/{{bid}}/memberships/{{mid}}/terminate
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Grant Credits
// Method: POST
// Endpoint: {{baseUrl}}/api/:id/grant-credits
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Create Plan
// Method: POST (Create)
// Endpoint: {{baseUrl}}/api/branch/{{bid}}/plans
if (pm.response.code < 400) {
    pm.test("Success: Status code is 201", function () {
        pm.response.to.have.status(201);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Update Plan
// Method: PUT
// Endpoint: {{baseUrl}}/api/branch/{{bid}}/plans/{{bpid}}
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get All Plans
// Method: GET
// Endpoint: {{baseUrl}}/api/branch/{{bid}}/plans
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get Plans By ID
// Method: GET
// Endpoint: {{baseUrl}}/api/branch/{{bid}}/plans/{{bpid}}
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// ==========================================
// Notifications
// ==========================================

// Request: Create Notification
// Method: POST (Create)
// Endpoint: {{baseUrl}}/api/notifications
if (pm.response.code < 400) {
    pm.test("Success: Status code is 201", function () {
        pm.response.to.have.status(201);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Get User Notifications
// Method: GET
// Endpoint: {{baseUrl}}/api/notifications/:role/:uid
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// ==========================================
// Invite
// ==========================================

// Request: Send Invite
// Method: POST
// Endpoint: {{baseUrl}}/api/entities/{{eid}}/entity-user/send-invite
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}

// Request: Accept Invite
// Method: POST
// Endpoint: {{baseUrl}}/api/entities/{{eid}}/entity-user/accept-invite
if (pm.response.code < 400) {
    pm.test("Success: Status code is 200", function () {
        pm.response.to.have.status(200);
    });
} else {
    pm.test("Failure: Client/Server Error", function () {
        pm.expect(pm.response.code).to.be.within(400, 599);
    });
}
