import TokenManager from 'controllers/TokenManager';

// Instantiate the TokenManager
const tokenManager = new TokenManager();

// Define your payload
const payload = {
  userId: 123,
  email: 'user@example.com',
  role: 'admin'
};

// Encrypt the token
const encryptedToken = tokenManager.encryptToken(payload);
console.log('Encrypted JWT Token:', encryptedToken);

// Decrypt the token and verify it
const decryptedPayload = tokenManager.decryptToken(encryptedToken);
console.log('Decrypted Payload:', decryptedPayload);
