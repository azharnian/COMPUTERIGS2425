#include <iostream>
#include <iomanip>
using namespace std;

double find_salary(double FS, double PS)
{
    return FS + 0.15*PS;
}

int main()
{
    string name;
    double fix_salary, products_sold;
    cin >> name
        >> fix_salary
        >> products_sold;

    cout << fixed << setprecision(2) << "TOTAL = R$ " << find_salary(fix_salary, products_sold) << endl;
}