#include <iostream>
using namespace std;

string cars[3] = {"Toyota", "BYD", "Hyundai"};
int numbers[] = {
                    1, 2, 3, 4, 5, 6,
                    1, 2, 3, 4, 5, 6,
                    1, 2, 3, 4, 5, 6,
                    1, 2, 3, 4, 5, 6,
                    1, 2, 3, 4, 5, 6,
                    1, 2, 3, 4, 5, 6,
                };
int numbers_len = sizeof(numbers)/sizeof(int);

int main()
{   
    // For each 'Cars'
    for(int i = 0; i < 3; i++)
    {
        cout << cars[i] << endl;
    }

    for(int i = 0; i < numbers_len; i++)
    {
        cout << numbers[i] << endl;
    }

}