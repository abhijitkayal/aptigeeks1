const questions = [
    {question: "Which of the following is not a type of database?", 
        options: ["(a) Hierarchical",  "(b) Network",  "(c) Relational",  "(d) Linear",], correct : 3},
    {question: "The SQL command used to create a table is:", 
        options: ["(a) INSERT",  "(b) UPDATE",  "(c) SELECT",  "(d) CREATE",], correct : 3},
    {question: "Which of the following is a valid SQL data type?", 
        options: ["(a) TEXT",  "(b) BOOLEAN",  "(c) REAL",  "(d) All of the above",], correct: 3},
    {question: "The term ACID stands for:", 
        options: ["(a) Automatic, Consistent, Isolated, Durable",  "(b) Atomicity, Consistency, Isolation, Durability",  "(c) Accuracy, Consistency, Isolation, Durability",  "(d) Automatic, Consistency, Integrity, Durability",], correct: 1},
    {question: "In a relational database, a tuple is a:", 
        options: ["(a) Row",  "(b) Column",  "(c) Table",  "(d) Field",], correct: 0},
    {question: "The SQL command used to delete a table from a database is:", 
        options: ["(a) DROP",  "(b) DELETE",  "(c) REMOVE",  "(d) ERASE",], correct: 0},
    {question: "A primary key in a database:", 
        options: ["(a) Can have duplicate values",  "(b) Cannot have duplicate values",  "(c) Can have NULL values",  "(d) Is not required to be unique",], correct: 1},
    {question: "What is the purpose of the SQL SELECT statement?", 
        options: ["(a) To modify data",  "(b) To insert data",  "(c) To retrieve data",  "(d) To delete data",], correct: 2},
    {question: "In a relational database, which operation combines tuples from two relations?", 
        options: ["(a) Union",  "(b) Join",  "(c) Intersection",  "(d) Division",], correct: 1},
    {question: "A foreign key is:", 
        options: ["(a) A key that uniquely identifies a record within its table",  "(b) A key used to link two tables together",  "(c) A key that can have NULL values",  "(d) None of the above",], correct: 1},
    {question: "What is normalization in databases?", 
        options: ["(a) The process of organizing data to minimize redundancy",  "(b) The process of converting data into a simpler format",  "(c) The process of securing data",  "(d) The process of data retrieval",], correct: 0},
    {question: "Which SQL keyword is used to sort the result-set?", 
        options: ["(a) ORDER BY",  "(b) SORT BY",  "(c) GROUP BY",  "(d) ALIGN BY",], correct: 0},
{question: "A ______________ is a collection of information that is organized so that it can easily be accessed, managed, and updated.", 
    options: ["(a) Program",  "(b) Database",  "(c) Spreadsheet",  "(d) File system",], correct: 1},
{question: "Which of the following commands is used to remove rows from a table?", 
    options: ["(a) REMOVE",  "(b) DELETE",  "(c) DROP",  "(d) CLEAR",], correct: 1},
{question: "Which of the following is an example of DML (Data Manipulation Language)?", 
    options: ["(a) CREATE",  "(b) ALTER",  "(c) INSERT",  "(d) DROP",], correct: 2},
{question: "The ______________ constraint ensures that all values in a column are unique.", 
    options: ["(a) PRIMARY KEY",  "(b) UNIQUE",  "(c) NOT NULL",  "(d) FOREIGN KEY",], correct: 1},
{question: "Which of the following is not a valid aggregate function in SQL?", 
    options: ["(a) SUM",  "(b) AVG",  "(c) COUNT",  "(d) SORT",], correct: 3},
{question: "Which SQL clause is used to filter records?", 
    options: ["(a) WHERE",  "(b) HAVING",  "(c) ORDER BY",  "(d) GROUP BY",], correct: 0},
{question: "What is a view in SQL?", 
    options: ["(a) A virtual table based on the result-set of a SELECT query",  "(b) A copy of an existing table",  "(c) A table created from another table",  "(d) None of the above",], correct: 0},
{question: "Which of the following normal forms is also known as the Boyce-Codd Normal Form?", 
    options: ["(a) 1NF",  "(b) 2NF",  "(c) 3NF",  "(d) BCNF",], correct: 3},
{question: "The SQL statement `SELECT * FROM table_name` will:", 
    options: ["(a) Retrieve all columns and rows from the table",  "(b) Retrieve only specific columns from the table",  "(c) Retrieve only specific rows from the table",  "(d) None of the above",], correct: 0},
{question: "", 
    options: ["",  "",  "",  "",], },
{question: "", 
    options: ["",  "",  "",  "",], },
{question: "", 
    options: ["",  "",  "",  "",], },

]

// {question: "", 
//     options: ["",  "",  "",  "",], },
// {question: "", 
//     options: ["",  "",  "",  "",], },
// {question: "", 
//     options: ["",  "",  "",  "",], },