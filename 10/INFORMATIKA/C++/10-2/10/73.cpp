#include <iostream>
using namespace std;

int list[3] = {11, 35, 6};
int n = sizeof(list)/sizeof(int);

int find_min()
{
    int min = list[0];
    for (int i = 0; i < n; i++)
    {
        // isi sendiri
    }
    return min;
}

int find_max()
{
    int max;
    // isi sendiri...
    return max;
}

int main()
{
    cout << find_min() << endl;
    cout << find_max() << endl;
}