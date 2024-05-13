import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone:{
    type:String,
    required:true,
    unique:true
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10); // Adjust cost factor as needed
  }
  next();
});

// Generate a random JWT secret key (for example purposes only)
export function generateJWTSECRET() {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(32, (err, buffer) => {
      if (err) {
        reject(err);
      } else {
        const secretKey = buffer.toString('hex');
        resolve(secretKey);
      }
    });
  });
}

const JWT_SECRET = await generateJWTSECRET(); 

export default mongoose.model('User', userSchema);
