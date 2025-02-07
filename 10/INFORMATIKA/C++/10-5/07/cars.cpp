#include <iostream>
using namespace std;

string cars[3] = {"Toyota", "BYD", "Hyundai"};

int main()
{
    cout << cars[0] << endl;
    cout << cars[1] << endl;
    cout << cars[2] << endl;

    // for each
    for(int i = 0; i < 4; i++)
    {
        cout << cars[i] << endl;
    }
}