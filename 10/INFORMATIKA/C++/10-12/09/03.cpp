#include <iostream>
using namespace std;

int main()
{
    string type = "adult";
    int price;
    if (type == "adult")
    {
        price = 100;
    } else if (type == "child")
    {
        price = 90;
    } else if (type == "senior")
    {
        price = 80;
    }
    cout << type << " : " << price << endl;
}