import crypto from 'crypto';

const secretKeyLength = 32; // Adjust as needed

function generateSecretKey() {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(secretKeyLength, (err, buffer) => {
      if (err) {
        reject(err);
      } else {
        const secretKey = buffer.toString('hex');
        resolve(secretKey);
      }
    });
  });
}

// Usage
generateSecretKey()
  .then(secretKey => {
    console.log('Generated JWT Secret Key:', secretKey);
    // Store the secret key securely (e.g., environment variable)
  })
  .catch(err => {
    console.error('Error generating secret key:', err);
  });