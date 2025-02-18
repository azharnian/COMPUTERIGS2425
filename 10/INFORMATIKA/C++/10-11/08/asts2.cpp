#include <iostream>
#include <vector>
using namespace std;

int main()
{
    // vector<string> petList = {"Dog"};
    vector<string> petList;
    petList.push_back("Dog");
    petList.push_back("Cat");
    petList.push_back("Fish");

    petList.insert(petList.begin() + 1, "Golden Bandicoot");
    petList.erase(petList.begin() + 0);

    for (int i = 0; i < petList.size(); i++)
    {
        cout << petList[i] << endl;
    }
}