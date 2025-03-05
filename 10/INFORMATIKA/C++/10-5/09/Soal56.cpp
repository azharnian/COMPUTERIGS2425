#include <iostream>
#include <vector>
using namespace std;

string mystery(vector<int> &list1)
{
    if ( list1[0] == list1[ list1.size() - 1] )
    {
        return "True";
    }
    else
    {
        return "False";
    }
}

int main()
{
    vector<int> list1 = {13, 11, 22, 13, 44};
    cout << mystery(list1) << endl;

    vector<int> list2 = {10, 14, 10};
    cout << mystery(list2) << endl;
}