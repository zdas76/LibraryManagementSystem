Project Name & Description: 

    ** Library Management System API **

    Purpose : This project aims to develop an Application Programming Interface (API) for a Library Management System. The API will provide a set of endpoints that can be used to interact with the library's database, allowing for automated tasks, data integration, and the creation of custom library applications.

Live URL: 
Vercel Live Link: [https://milestone-8.vercel.app/]  
git Link: [https://github.com/zdas76/LibraryManagementSystem.git]  

Technology Stack & Packages:   
Technologies:   
    Node,   
    express,   
    postGresQL,   
    Prisma ORM,   
    TypeScripte  

Packages:   
    date-fns,   
    http-status-codes,  


Setup Instructions   
    Clone the repository:  
    git clone https://github.com/zdas76/LibraryManagementSystem.git  
    Install dependencies:  
    npm install  
    Set up your PostgreSQL database and update the connection string in the .env file.  
    Run Prisma migrations:  
    npx prisma migrate dev  
    Start the server:  
    npm run dev  


Key Features & Functionality:   
    
    Book Management:  
    Create, read, update, and delete books  
    Track total and available copies  
    
    Member Management:   
    Create, read, update, and delete library members  
    
    Borrowing System:  
    Borrow and return books  
    Track borrow records  
     
    Overdue Book Tracking:  
    List books that are past their due date  
    
    Error Handling:  
    Consistent error response structure  

API Endpoints  
    Books:  
        POST /api/books  
        GET /api/books  
        GET /api/books/:bookId  
        PUT /api/books/:bookId  
        DELETE /api/books/:bookId  

    Members: 
        POST /api/members  
        GET /api/members  
        GET /api/members/:memberId  
        PUT /api/members/:memberId  
        DELETE /api/members/:memberId  


    Borrow/Return:  
        POST /api/borrow  
        POST /api/return  
        GET /api/borrow/overdue  


Future Improvements  
    Implement user authentication and authorization  
    Add pagination for book and member lists  
    Create a front-end interface for easier management  
