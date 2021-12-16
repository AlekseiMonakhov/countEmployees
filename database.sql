create TABLE Employees(
    EmployeeId INTEGER PRIMARY KEY,
    EmployeeName VARCHAR(128),
    EmployeeAge INTEGER,
    DepartmentTitle VARCHAR(64),
    FOREIGN KEY (DepartmentTitle) REFERENCES Departments (DepartmentTitle) 

    
);

create TABLE Departments(
    DepartmentTitle VARCHAR(64) PRIMARY KEY
    
);

-- create TABLE EmployeesDepartments(
--     EmployeeId INTEGER REFERENCES Employees(EmployeeId),
--     DepartmentId INTEGER REFERENCES Departments(DepartmentId)
    
-- );