#include <iostream>
using namespace std;

int list[] = {11, 35, 6, 0};
int n = sizeof(list)/sizeof(int);

int mystery()
{
    int sum = 0;
    for (int i=0; i<n; i++)
    {
        sum += list[i];
    }
    return sum / n;
}

int main()
{
    cout << mystery() << endl;
}