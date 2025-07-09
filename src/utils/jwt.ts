import { sign, verify } from 'jsonwebtoken';

const SECRET = `${process.env.JWT_SECRET}`;

export function generateToken(payload: object): string {
  return sign(payload, SECRET, { expiresIn: '1h' });
}

export function verifyToken(token: string): {
  valid: boolean;
  expired: boolean;
  payload?: any;
} {
  try {
    const payload = verify(token, SECRET);
    return { valid: true, expired: false, payload };
  } catch (error: any) {
    return {
      valid: false,
      expired: error.name === 'TokenExpiredError',
    };
  }
}
