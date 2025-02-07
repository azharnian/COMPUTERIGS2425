#include <iostream>
using namespace std;

string cars[3] = {"Toyota", "BYD", "Nissan"};

int main()
{
    cout << cars[0] << endl;
    cout << cars[1] << endl;
    cout << cars[2] << endl;

    // For each
    // for(string car : cars)
    // {
    //     cout << car << endl;
    // }

    for(int i = 0; i <= 2; i++)
    {
        cout << cars[i] << endl;
    }
}