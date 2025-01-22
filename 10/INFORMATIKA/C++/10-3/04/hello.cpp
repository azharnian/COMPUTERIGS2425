#include <iostream>
using namespace std;

void say_hello(int number)
{
    cout << "Hello... " << endl;
    cout << "I'm number " << number << " Nice to meet you..." << endl;
}

void say_goodbye()
{
    // isi sendiri
}

int main()
{
    for (int i = 1; i <= 100; i++)
    {
        say_hello(i);
    }

    say_goodbye();

    return 0;
}