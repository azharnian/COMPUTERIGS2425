#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<string> petList = {"Dog"};
    petList.push_back("Cat");
    petList.push_back("Fish");

    petList.insert(petList.begin() + 1, "Golden Bandicoot");
    petList.erase(petList.begin() + 0);

    for (string item : petList)
    {
        cout << item << " ";
    }
}