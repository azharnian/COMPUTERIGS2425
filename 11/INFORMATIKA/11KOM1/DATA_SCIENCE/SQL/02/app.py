import os
import sqlite3
from models.employee import Employee

connection = sqlite3.connect("data.db")
cursor = connection.cursor()

from services.sql import *

def show_menu():
    os.system("clear")
    print("""
(1) Add Employee
(2) Get Employee by id
(3) Get Employee by last name
(e) Exit 
          """)
    
def execute_insert_emp():
    print( "\n-- Add Employee")
    first = input("First Name : ")
    last = input("Last Name : ")
    pay = int(input("Salary : "))

    emp = Employee(first, last, pay)
    insert_emp(emp)
    input("DONE!")

def main():
    init_db()
    while True:
        show_menu()
        user_input = input("Your input : ")
        if user_input == "1":
            execute_insert_emp()
        elif user_input == "2":
            pass
        elif user_input == "3":
            pass
        elif user_input == "e":
            os.system("clear")
            break

if __name__ == "__main__":
    main()
    connection.close()