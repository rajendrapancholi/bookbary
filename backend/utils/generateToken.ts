import jwt from "jsonwebtoken";

export const generateToken = (
  id: number,
  isAdmin: boolean,
  role: string
): string => {
  return jwt.sign({ id, isAdmin, role }, process.env.JWT_SECRET as string, {
    expiresIn: "30d",
  });
};

/* 
{
  id: 3,
  isAdmin: true,
  role: 'admin',
  iat: 1744147806,
  exp: 1746739806
}
<HEADER>.<PAYLOAD>.<SIGNATURE>
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9. 
eyJpZCI6MywiaXNBZG1pbiI6dHJ1ZSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzQ0MTQ3ODA2LCJleHAiOjE3NDY3Mzk4MDZ9. 
bmORm2aXUImAVr9dphOAF6OK6hcBWuDpG6FAwN8DGgc
*/
// echo '<PAYLOAD>' | base64 -d
