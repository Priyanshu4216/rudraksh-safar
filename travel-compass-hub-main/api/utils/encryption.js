import crypto from 'crypto';

const ALGORITHM = 'aes-256-cbc';
// Ensure the secret is precisely 32 bytes (256 bits) for aes-256-cbc
const getSecretKey = () => {
    const secret = process.env.INDEXNOW_APP_SECRET;
    if (!secret) {
        console.warn('INDEXNOW_APP_SECRET is not set. Using a fallback key for encryption/decryption.');
    }
    return crypto.createHash('sha256').update(String(secret || 'default_secret_key')).digest('base64').substring(0, 32);
};

export function encrypt(text) {
    if (!text) return text;
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(ALGORITHM, Buffer.from(getSecretKey()), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
}

export function decrypt(text) {
    if (!text) return text;
    try {
        const textParts = text.split(':');
        const iv = Buffer.from(textParts.shift(), 'hex');
        const encryptedText = Buffer.from(textParts.join(':'), 'hex');
        const decipher = crypto.createDecipheriv(ALGORITHM, Buffer.from(getSecretKey()), iv);
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString();
    } catch (error) {
        console.error('Failed to decrypt value:', error.message);
        return null;
    }
}

export function resolveKey(keyString) {
    if (keyString && keyString.includes(':') && keyString.length > 33) {
        const decrypted = decrypt(keyString);
        return decrypted || keyString;
    }
    return keyString;
}
