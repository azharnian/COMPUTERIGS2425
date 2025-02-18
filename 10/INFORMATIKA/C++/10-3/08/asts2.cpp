#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<string> petList;
    petList.push_back("Dog");
    petList.push_back("Cat");
    petList.push_back("Fish");
    petList.insert(petList.begin() + 1, "Golden Bandicoot");
    petList.erase(petList.begin());

    for (int i = 0; i < petList.size(); i++)
    {
        cout << petList[i] << " ";
    }
    cout << endl;
}