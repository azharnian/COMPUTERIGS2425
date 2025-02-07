#include <iostream>
using namespace std;

int list[] = {11, 35, 6};
int len = sizeof(list)/sizeof(int);

int mystery()
{
    int max = list[0];
    for(int i=0; i<len; i++)
    {
        if(list[i] > max)
        {
            max = list[i];
        }
    }
    return max;
}

int main()
{
    cout << mystery() << endl;
}