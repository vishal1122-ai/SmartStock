
SmartStock
SmartStock is a comprehensive Inventory Management Dashboard designed to streamline the management of inventory, sales, purchases,       and expenses. It offers real-time insights and user-friendly visualizations to enhance operational efficiency.

Note: The main project files, including the client and server, are located in the master branch.

Features
  - Responsive Dashboard: Intuitive UI optimized for various screen sizes.
  - Inventory Management: Efficient tracking and management of products and stock levels.
  - Sales & Purchase Summaries: Visual charts and summaries for insightful business analytics.
  - Expense Tracking: Categorized expense breakdowns with visual representations.
  - Popular Products: Highlights top-performing products with detailed sales data.
  - User Management: Manage user accounts and permissions seamlessly.
  - Settings Management: Configure various application settings with ease.
  - Dark Mode Support: Toggle between light and dark themes for enhanced usability.

Tech Stack
  -Frontend
    Next.js: Framework for server-side rendering and optimized performance.
    Redux Toolkit: State management solution for predictable state handling.
    Tailwind CSS: Utility-first CSS framework for rapid UI development.
  -Backend
    Node.js: JavaScript runtime for building scalable server-side applications.
    PostgreSQL: Relational database system for robust data storage.
    Prisma ORM: Type-safe database client for seamless database interactions.
  -Deployment
    AWS Amplify: Hosting platform for the frontend application.
    AWS EC2: Virtual server hosting for the backend services.
    AWS RDS: Managed relational database service for PostgreSQL.
    AWS S3: Storage service for managing and storing static assets.

Installation & Setup
  -Prerequisites
    Node.js (v16 or above)
    PostgreSQL (configured database)
    AWS Account (optional for deployment)
  -Local Setup
    Clone the repository:
      git clone https://github.com/vishal1122-ai/SmartStock.git
      cd SmartStock
    Switch to the master branch:
      git checkout master
    Navigate to the client directory:
      cd client
    Install frontend dependencies:
      npm install
    
  -Run the frontend application:
      npm run dev
  -Navigate to the server directory:
      cd ../server
  -Install backend dependencies:
      npm install
    
  -Configure environment variables: 
      Create a .env file in the server directory with the following content:
        DATABASE_URL=your_postgres_database_url
        AWS_ACCESS_KEY_ID=your_aws_access_key
        AWS_SECRET_ACCESS_KEY=your_aws_secret_key
  -Run the backend server:
      npm run dev
  -Access the application: 
      Open your browser and navigate to http://localhost:3000.

Folder Structure
SmartStock/
├── client/                 # Frontend codebase
│   ├── src/                # Source files for the frontend
│   ├── state/              # Redux Toolkit setup
│   ├── public/             # Static assets
│   └── package.json        # Frontend dependencies
│
├── server/                 # Backend codebase
│   ├── prisma/             # Database setup and schema
│   ├── src/                # API routes and controllers
│   └── package.json        # Backend dependencies
│
└── README.md               # Project documentation
