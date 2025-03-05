#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<string> fruit = {"grapes"};
    fruit.push_back("bananas");
    fruit.push_back("oranges");
    fruit.push_back("apples");
    fruit.erase(fruit.begin() + 1);
    fruit.insert(fruit.begin() + 2, "mango");
    fruit.push_back("kiwi");
    fruit.insert(fruit.begin() + 4, "blueberries");
    fruit.erase(fruit.begin());

    for (string item : fruit)
    {
        cout << item << " ";
    }
}