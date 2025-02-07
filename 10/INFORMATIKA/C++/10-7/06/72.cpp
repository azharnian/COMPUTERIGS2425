#include <iostream>
using namespace std;

int list[4] = {11, 35, 6, 0};

int mystery()
{
    int sum = 0;
    for (int i=0; i<4; i++)
    {
        sum = sum + list[i];
    }
    return sum/4;
}

int main()
{
    cout << mystery() << endl;
}