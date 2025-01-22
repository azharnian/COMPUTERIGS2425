#include <iostream>
using namespace std;

int mystery(int len, int* list)
{
    int sum = 0;
    for (int i=0; i < len; i++)
    {
        sum += list[i];
    }
    return sum / len;
}

int main()
{
    int list[] = {11, 35, 6, 0};
    int n = sizeof(list) / sizeof(int);
    cout << mystery(n, list) << endl;
}