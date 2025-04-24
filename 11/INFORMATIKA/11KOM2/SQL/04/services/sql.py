from app import connection, cursor
from tabulate import tabulate
import pandas as pd

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

def show_table(table):
    df = pd.DataFrame(table)
    print(tabulate(df, headers='keys', tablefmt='psql'))

def get_all_emps():
    cursor.execute("""
        SELECT * FROM employees;
    """)
    return cursor.fetchall()

def get_emp_by_last(last):
    cursor.execute("""
        SELECT * FROM employees WHERE last = ?
    """, (last,))
    return cursor.fetchone()

def get_emp_by_id(id):
    cursor.execute("""
        SELECT * FROM employees WHERE id = ?
    """, (id,))
    return cursor.fetchone()

def update_pay(id, pay):
    try:
        with connection:
            cursor.execute("""
                UPDATE employees SET pay = ? WHERE id = ?
            """, (pay, id))
    except Exception as e:
        raise Exception(f"Error : {e}")
    else:
        return get_emp_by_id(id)