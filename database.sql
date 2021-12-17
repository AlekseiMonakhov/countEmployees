create database employees;

create TABLE departments(
    dept_id INTEGER UNIQUE NOT NULL,
    dept_name VARCHAR(64) PRIMARY KEY NOT NULL
    
);

create TABLE employees(
    employee_id INTEGER PRIMARY KEY NOT NULL,
    employee_name VARCHAR(128) NOT NULL,
    employee_dept VARCHAR(64) NOT NULL,
    FOREIGN KEY (employee_dept) REFERENCES departments (dept_name) ON UPDATE CASCADE
    
);

