import { genSaltSync, hashSync } from 'bcryptjs'; 
const password = process.argv[2];

if (!password) {
  console.log("Usage: bun generatepass.js <your_password>");
  process.exit(1);
}

const salt = genSaltSync(10);
const hash = hashSync(password, salt);

console.log(hash);
