#include <iostream>
using namespace std;

int N;
int banknotes[7] = {100, 50, 20, 10, 5, 2, 1};
int notes[7] = {0, 0, 0, 0 ,0, 0, 0};

void solve()
{
    for (int i = 0; i < 7; i++)
    {
        notes[i] = N / banknotes[i];
        N = N % banknotes[i];
    }
}

int main()
{
    cin >> N;
    cout << N << endl;
    solve();
    for (int n : notes)
    {
        cout << n << endl;
    }
}