#include <iostream>
using namespace std;

int weight(int wt1, int wt2, int wt3)
{
    if (wt1 >= wt2 && wt1 >= wt3)
    {
        return wt1;
    }
    else if (wt2 > wt3 || wt2 > wt1)
    {
        return wt2;
    }
    else
    {
        return wt3;
    }
}

int main()
{
    cout << weight(9, 10, 11) << endl;
}