#include <iostream>
using namespace std;

void leapYear(int year)
{
    if (year % 400 == 0)
    {
        cout << year << " is a leap year." << endl;
    } else if (year % 100 == 0)
    {
        cout << year << " is not a leap year." << endl;
    } else if (year % 4 == 0)
    {
        cout << year << " is a leap year." << endl;
    } else 
    {
        cout << "Invalid year entered." << endl;
    }
}

int main()
{
    cout << "Enter a year : ";
    int yr;
    cin >> yr;
    leapYear(yr);
}