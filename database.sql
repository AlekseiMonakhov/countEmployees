create TABLE employees(
    id SERIAL PRIMARY KEY,
    surname VARCHAR(20),
    firstname VARCHAR(20),
    patronymic VARCHAR(20)
);

create TABLE departments(
    id SERIAL PRIMARY KEY,
    title VARCHAR(20),
    employees_id INTEGER,
    FOREIGN KEY (employees_id) REFERENCES employees (id)
     
);