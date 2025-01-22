#include <iostream>
using namespace std;

int mystery(int num)
{
    while(num >= 3)
        num -= 1;
    return num;
}

int main()
{
    cout << mystery(3) << endl;
}