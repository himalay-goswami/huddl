# Huddl User Service - Architecture Design Document (SOT)

## Overview

The Huddl User Service is a secure, JWT-based authentication and user management microservice built with Spring Boot. This document serves as the **Source of Truth (SOT)** for the user service architecture, security design, and authentication flow.

## Architecture Components

### 1. Core Technologies

- **Framework**: Spring Boot 3.4.7 with Java 17
- **Security**: Spring Security with JWT (JSON Web Tokens)
- **Database**: PostgreSQL (Production), H2 (Testing)
- **Password Hashing**: BCrypt
- **API Documentation**: RESTful API with JSON payloads
- **Build Tool**: Maven

### 2. Security Architecture

#### Authentication Flow

```
1. User Registration:
   Client → POST /api/v1/users/register → [Validation] → [Password Hashing] → [Database] → UserResponseDTO

2. User Login:
   Client → POST /api/v1/users/login → [Credential Validation] → [JWT Generation] → AuthResponseDTO

3. Protected Resource Access:
   Client → [JWT Token] → [Token Validation] → [Resource Access]
```

#### Security Features

- **Password Security**: BCrypt hashing with salt
- **JWT Authentication**: Stateless token-based authentication
- **Input Validation**: Bean validation for all user inputs
- **Session Management**: Stateless (no server-side sessions)
- **CORS**: Configured for cross-origin requests

### 3. API Endpoints

#### Public Endpoints (No Authentication Required)

- `POST /api/v1/users/register` - User registration
- `POST /api/v1/users/login` - User authentication
- `GET /api/v1/users/test` - Health check
- `GET /actuator/**` - Application health and metrics

#### Protected Endpoints (JWT Required)

- `GET /api/v1/users/profile?email={email}` - Get user profile
- `PUT /api/v1/users/{userId}` - Update user details

### 4. Data Model

#### User Entity

```java
@Entity(name = "users")
public class User {
    @Id String id;                    // UUID primary key
    @Column String name;              // User's full name
    @Column String email;             // Unique email address
    @Column String password;          // BCrypt hashed password
    @Column String profilePictureUrl; // Profile picture URL
    @Column String bio;               // User biography
    @Column String location;          // User location
    @Column String dateOfBirth;       // Date of birth
    @Column String organization;      // Organization name
    @Column String designation;       // Job title/designation
    @Column Integer writtenLOC;       // Lines of code written
    @Column Integer streak;           // Coding streak days
}
```

### 5. JWT Configuration

#### Token Structure

- **Algorithm**: HMAC SHA-256
- **Expiration**: 24 hours (86400000 ms)
- **Claims**: Subject (email), Issue time, Expiration time
- **Secret**: Base64 encoded secret key

#### Token Validation

- Signature verification using HMAC SHA-256
- Expiration time validation
- Format validation

### 6. Security Configuration

#### HTTP Security Rules

```yaml
Public Access:
  - /api/v1/auth/**
  - /api/v1/users/register
  - /api/v1/users/login
  - /actuator/**

Protected Access:
  - All other endpoints require valid JWT
```

#### Password Policy

- Minimum 6 characters
- Maximum 100 characters
- BCrypt hashing with automatic salt generation

### 7. Error Handling

#### Authentication Errors

- **Invalid Credentials**: 401 Unauthorized
- **User Already Exists**: 400 Bad Request
- **Invalid Token**: 401 Unauthorized
- **Token Expired**: 401 Unauthorized

#### Validation Errors

- **Invalid Email Format**: 400 Bad Request
- **Missing Required Fields**: 400 Bad Request
- **Field Length Violations**: 400 Bad Request

### 8. Database Configuration

#### Production (PostgreSQL)

```yaml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/HUDDL
    username: postgres
    password: postgres
    driver-class-name: org.postgresql.Driver
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
    database-platform: org.hibernate.dialect.PostgreSQLDialect
```

#### Testing (H2)

```yaml
spring:
  datasource:
    url: jdbc:h2:mem:testdb
    username: sa
    password: 
    driver-class-name: org.h2.Driver
  jpa:
    hibernate:
      ddl-auto: create-drop
    database-platform: org.hibernate.dialect.H2Dialect
```

### 9. Service Layer Architecture

#### UserService Interface

- `registerUser(UserRequestDTO)` - Register new user with validation
- `authenticateUser(LoginRequestDTO)` - Authenticate and generate JWT
- `getUserByEmail(String)` - Retrieve user by email
- `updateUserDetails(String, UserRequestDTO)` - Update user information

#### Key Design Principles

- **Separation of Concerns**: Clear separation between controller, service, and repository layers
- **Dependency Injection**: Spring-managed beans for loose coupling
- **Exception Handling**: Centralized error handling with meaningful messages
- **Validation**: Input validation at DTO level using Bean Validation

### 10. Deployment Considerations

#### Environment Variables

- `JWT_SECRET`: Base64 encoded JWT signing secret
- `JWT_EXPIRATION`: Token expiration time in milliseconds
- `DB_URL`: Database connection URL
- `DB_USERNAME`: Database username
- `DB_PASSWORD`: Database password

#### Security Checklist

- [ ] JWT secret is securely generated and stored
- [ ] Database credentials are externalized
- [ ] HTTPS is enforced in production
- [ ] CORS is properly configured
- [ ] Password policy is enforced
- [ ] Rate limiting is implemented (future enhancement)

### 11. Future Enhancements

#### Security Enhancements

- JWT refresh token mechanism
- Multi-factor authentication (MFA)
- Rate limiting for authentication endpoints
- Account lockout after failed attempts
- Password strength validation
- Email verification for registration

#### Monitoring and Logging

- Authentication attempt logging
- Failed login monitoring
- JWT token usage analytics
- Security event alerting

## Testing Strategy

### Unit Tests

- Service layer business logic testing
- JWT utility class testing
- Password hashing validation
- Input validation testing

### Integration Tests

- Full authentication flow testing
- Database integration testing
- API endpoint testing with security context

### Security Tests

- JWT token manipulation tests
- Authentication bypass attempts
- SQL injection prevention
- Cross-site scripting (XSS) prevention

## Conclusion

This architecture provides a solid foundation for user authentication and management in the Huddl platform. The design prioritizes security, scalability, and maintainability while following Spring Boot best practices.

**Last Updated**: January 2025  
**Version**: 1.0  
**Status**: Implemented and Tested