#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<string> fruit = {"grapes"};

    fruit.push_back("bananas");
    // ..
    // ..
    fruit.erase(fruit.begin() + 1);
}