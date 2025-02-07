#include <iostream>
using namespace std;

int list[] = {11, 35, 6, 0};
int len = sizeof(list)/sizeof(int);

int mystery()
{
    int sum = 0;
    for (int i = 0; i < len; i++)
    {
        sum = sum + list[i];
    }
    return sum / len;
}

int main()
{
    cout << mystery() << endl;
}