#include <iostream>
#include <string>
using namespace std;

int main()
{
    string title = "The Lord of The Ring";
    // substr(init_index, len)
    cout << title.substr(0, 3) << endl;
    cout << title.substr(4, 4) << endl;

    string name = "ignatius";
    cout << name.substr(0, 2) << endl;
    cout << name.substr(5, 3) << endl;
}