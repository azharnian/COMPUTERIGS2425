#include <iostream>
using namespace std;

int main()
{
    int list1[] = {85, 40, 79, 80, 92, 20};
    int sum = 0;
    for (int i = 0; i < sizeof(list1)/sizeof(int); i++)
    {
        if (list1[i] % 5 == 0 && list1[i] % 10 == 0)
        {
            sum = sum + 1;
        }  
    }
    cout << sum << endl;
}