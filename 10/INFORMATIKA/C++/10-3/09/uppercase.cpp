#include <iostream>
#include <string>
// #include <cctype>
using namespace std;

int main()
{
    string text = "ignatius";

    for (char item : text)
    {
        // cout << char(toupper(item));
        cout << char(item - 32);
    }
    cout << endl;
}