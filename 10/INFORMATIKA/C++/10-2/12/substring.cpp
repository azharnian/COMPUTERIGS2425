#include <iostream>
#include <string>
using namespace std;

int main()
{
    string title = "The Lord of The Ring";
    cout << title.substr(0, 3) << endl;
    cout << title.substr(4, 4) << endl;
}