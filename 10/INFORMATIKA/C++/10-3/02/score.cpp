#include <iostream>
using namespace std;

int main()
{
    int score;
    cout << "Enter your score : " ;
    cin >> score;

    if (score >= 90) cout << "A" << endl;
    else if (score >= 80) cout << "B" << endl;
}