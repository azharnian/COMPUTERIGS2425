#include <iostream>
#include <random>
using namespace std;

int get_random_number(int lower, int upper) {
    random_device rd;
    mt19937 gen(rd());
    uniform_int_distribution<int> dist(lower, upper);

    return dist(gen);
}

int main() {
    int lower = 1, upper = 10;
    int x = get_random_number(lower, upper);
    
    if (x > 1)
    {
        cout << "FALSE" << endl;
    } else {
        cout << "TRUE" << endl;
    }
}