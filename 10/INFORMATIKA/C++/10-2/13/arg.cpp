#include <iostream>
using namespace std;

int main(int argc, char *args[])
{
    if (argc > 0)
    {
        for (int i = 0; i < argc; i++)
        {
            cout << args[i] << endl;
        }
    } else
    {
        cout << "No args found!\n";
    }
}