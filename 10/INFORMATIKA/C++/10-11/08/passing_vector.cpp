#include <iostream>
#include <vector>
using namespace std;

void print_vector(vector<int> &list)
{
    for (int i = 0; i < list.size(); i++)
    {
        cout << list[i] << " ";
    } cout << endl;
}

int main()
{
    vector<int> list;
    list.push_back(100);
    list.push_back(200);
    print_vector(list);

    list.push_back(300);
    print_vector(list);   
}