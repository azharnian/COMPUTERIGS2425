#include <iostream>
#include <vector>
using namespace std;

void mult_by_2(int a)
{
    a = a * 2;
}

void mult_by_3(int &b)
{
    b = b * 3;
}

void mult_vector_by_10(vector<int> &list)
{
    for (int i = 0; i < list.size(); i++)
    {
        list[i] = list[i] * 10;
    }
}

int main()
{
    int a = 10, b = 10;
    mult_by_2(a);
    mult_by_3(b);
    cout << a << " " << b << endl;

    vector<int> list;
    list.push_back(4);
    list.push_back(6);
    mult_vector_by_10(list);
    for (int i = 0; i < list.size(); i++)
    {
        cout << list[i] << " ";
    } cout << endl;
}