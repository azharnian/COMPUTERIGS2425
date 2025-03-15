#include <iostream>
#include <string>
using namespace std;

int main()
{
    string names[] = {"andi", "budi", "cindy"};

    for (string item : names)
    {
        cout << item << endl;
    }

    cout << "a from andi : " << names[0][0] << endl; // 2dArray
    cout << "c from cindy : " << names[2][0] << endl;
    cout << "y from cindy : " << names[2][4] << endl;
    cout << "u from budi : " << names[1][1] << endl;
}