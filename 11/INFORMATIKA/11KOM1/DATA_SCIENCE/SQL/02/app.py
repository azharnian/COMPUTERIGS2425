import sqlite3
from models.employee import Employee

connection = sqlite3.connect("data.db")
cursor = connection.cursor()

def init_db():
    cursor.execute(
        '''
        CREATE TABLE IF NOT EXISTS employees(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first TEXT,
            last TEXT,
            pay INTEGER
        );

        '''
    )
    connection.commit()

def insert_emp(emp):
    try :
        with connection:
            cursor.execute("""
                INSERT INTO employees (first, last, pay)
                VALUES (?, ?, ?)

            """, (emp.first, emp.last, emp.pay))
    except Exception as e:
        raise Exception(f"Error : {e}")

def get_all_emps():
    cursor.execute("""
        SELECT * FROM employees;
    """)
    return cursor.fetchall()

def main():
    init_db()

    # emp = Employee('Jane', 'Doe', '4000')
    # insert_emp(emp)
    print(get_all_emps())

if __name__ == "__main__":
    main()
    connection.close()