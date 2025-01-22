#include <iostream>
using namespace std;

int main()
{
    int N = 0, sum = 0;
    cout << "How many numbers : ";
    cin >> N;

    int numbers[N];
    for (int i = 0; i < N; i++)
    {
        cout << "#" << i+1 << " : ";
        cin >> numbers[i];
        sum += numbers[i];
    }
    cout << "Numbers = ";
    for (int i = 0; i < N; i++)
    {
        cout << numbers[i] << " ";
    }
    cout << " The avg is " << sum / N << endl;
}