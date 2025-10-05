/library-management-backend
├── /config
│   ├── db.ts                // DB connection setup
│   └── dotenv.config.ts     // Environment variables
├── /controllers
│   ├── authController.ts    // Auth logic
│   ├── bookController.ts    // Book CRUD
│   ├── userController.ts    // User CRUD
│   └── borrowController.ts  // Borrowing/returning books
├── /middlewares
│   ├── authMiddleware.ts    // JWT auth verification
│   └── errorMiddleware.ts   // Error handling
├── /models
│   ├── Book.ts              // Book model
│   ├── User.ts              // User model
│   └── Borrow.ts            // Borrow model
├── /routes
│   ├── authRoutes.ts        // Auth routes
│   ├── bookRoutes.ts        // Book routes
│   ├── userRoutes.ts        // User routes
│   └── borrowRoutes.ts      // Borrow routes
├── /utils
│   ├── generateToken.ts     // JWT token generator
│   └── validateInput.ts     // Input validation
├── /validators
│   ├── authValidator.ts     // Auth validation
│   ├── bookValidator.ts     // Book validation
│   └── userValidator.ts     // User validation
├── /migrations
│   └── create_tables.sql     // DB schema for MySQL
├── /seeds
│   └── seed_data.sql         // Initial seed data for MySQL
├── /public                   // Public assets (if needed)
├── /views                    // If using for email templates (optional)
├── /types
│   ├── Book.ts               // Book type
│   ├── User.ts               // User type
│   └── Borrow.ts             // Borrow type
├── .env                      // Environment variables
├── .gitignore                // Git ignore file
├── package.json              // Node dependencies
├── tsconfig.json             // TypeScript config
└── server.ts                 // Main server file
