# Ecommerce

Packages used

1. bcryptjs = While submitting a form, there are some sensitive data (like passwords) that must not be visible to anyone, not even to the database admin. To avoid the sensitive data being visible from anyone, Node.js uses “bcryptjs”. This module enables storing of passwords as hashed passwords instead of plaintext.
2. jsonwebtoken = encrypt json for secure communication between two parties
3. validator = A library of string validators and sanitizers.
4. nodemailer = Nodemailer is a module for Node.js applications to allow easy as cake email sending.
5. cookie-parser = Parse Cookie header and populate req.cookies with an object keyed by the cookie names. Optionally you may enable signed cookie support by passing a secret string, which assigns req.secret so it may be used by other middleware
6. body-parser = Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
