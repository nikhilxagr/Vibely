import jwt from "jsonwebtoken";

const genToken = async (userId) => {

   try {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, { expiresIn: '10y' });
    return token;
   }
   catch (error) {
    throw new Error('Error generating token');
   }
}

export default genToken;
