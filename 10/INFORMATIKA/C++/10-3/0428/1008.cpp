#include <iostream>
#include <iomanip>
using namespace std;

double find_salary(int WH, double SH)
{
    return WH*SH;
}

int main()
{
    int emp_number, worked_hours;
    double salary_hour;
    cin >> emp_number
        >> worked_hours
        >> salary_hour;
    cout << "NUMBER = " << emp_number << endl;
    cout << fixed << setprecision(2) << "SALARY = U$ " << find_salary(worked_hours, salary_hour) << endl;
}