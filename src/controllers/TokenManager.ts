import jwt from 'jsonwebtoken';
import crypto from 'crypto';

class TokenManager {
  private signingSecret: string;
  private encryptionKey: Buffer;
  private iv: Buffer;

  constructor() {
    this.signingSecret = 'my_signing_secret';
    this.encryptionKey = crypto.randomBytes(32); // 256-bit key for AES encryption
    this.iv = crypto.randomBytes(16); // Initialization vector for encryption
  }

  // Method to create and encrypt the JWT
  encryptToken(payload: object, expiresIn: string = '1h'): string {
    // Step 1: Create the JWT
    const token = jwt.sign(payload, this.signingSecret, { expiresIn });

    console.log('JWT Token:', token);

    // Step 2: Encrypt the token using AES-256-CBC
    const cipher = crypto.createCipheriv(
      'aes-256-cbc',
      this.encryptionKey,
      this.iv
    );
    let encrypted = cipher.update(token, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    return encrypted;
  }

  // Method to decrypt the JWT
  decryptToken(encryptedToken: string): object | string {
    try {
      // Step 1: Decrypt the token
      const decipher = crypto.createDecipheriv(
        'aes-256-cbc',
        this.encryptionKey,
        this.iv
      );
      let decrypted = decipher.update(encryptedToken, 'hex', 'utf8');
      decrypted += decipher.final('utf8');

      console.log('Decrypted Token:', decrypted);

      // Step 2: Verify the JWT
      const verifiedPayload = jwt.verify(decrypted, this.signingSecret);

      return verifiedPayload;
    } catch (error: any) {
      console.error('Error during decryption or verification:', error.message);
      return 'Invalid Token';
    }
  }
}

// Export the class
export default TokenManager;
