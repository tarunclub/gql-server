import jwt from 'jsonwebtoken';

export const generateToken = (userRole: string) => {
  const token = jwt.sign(
    {
      userRole,
    },
    process.env.JWT_SECRET || 'somethingsecret',
    {
      expiresIn: '30d',
    }
  );
  return token;
};
