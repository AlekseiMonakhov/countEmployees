# countEmployees - сервис учета сотрудников.

Endpoints:

POST /api/d
    Добавление нового структурного подразделения компании:
    {
        "dept_id": number,
        "dept_name": string
    }
    
GET /api/d
    Получение списка структурных подразделений компании.
    
PUT /api/d
    Редактирование названия структурного подразделения компании:
    {
        "dept_id": number,
        "dept_name": string
    }

POST /api/e
    Добавление нового сотрудника:
    {
        "employee_id": number,
        "employee_name": string,
        "employee_dept": string
    }
    
GET /api/e
    Получение списка сотрудников
    
PUT /api/e
    Редактирование данных сотрудника:
    {
        "employee_id": number,
        "employee_name": string,
        "employee_dept": string
    }
