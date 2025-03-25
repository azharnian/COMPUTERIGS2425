#include <iostream>
using namespace std;

string multiple_name(string n, int t)
{
    string res = "";
    for (int i = 0; i<t; i++)
    {
        res += n;
    }
    return res;
}

string multiple_name(int t, string n)
{
    string res = "";
    for (int i = 0; i<t; i++)
    {
        res += n;
    }
    return res;
}

int main()
{
    cout << multiple_name("cindy", 10) << endl;
    cout << multiple_name(10, "cindy") << endl;
}
