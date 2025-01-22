#include <iostream>
using namespace std;

void say_hello()
{
    cout << "Hello... " << endl;
    cout << "I'm Joko... Nice to meet you..." << endl;
}

int main()
{   
    for (int i = 1; i <= 1000; i++)
    {
        say_hello();
    }
}