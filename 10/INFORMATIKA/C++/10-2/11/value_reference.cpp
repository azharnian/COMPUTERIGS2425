#include <iostream>
#include <vector>
using namespace std;

void mult_by_2(int &a)
{
    a = a * 2;
}

void mult_by_3(int b)
{
    b = b * 3;
}

void mult_vect_by_5(vector<int> &list)
{
    for (int i = 0; i < list.size(); i++)
    {
        list[i] = list[i] * 5;
    }
}

int main()
{
  int a = 10, b = 10;
  mult_by_2(a);
  mult_by_3(b);
  cout << a << " " << b << endl;

  vector<int> list;
  list.push_back(10);
  list.push_back(20);
  mult_vect_by_5(list);

  for (int i = 0; i < list.size(); i++)
  {
    cout << list[i] << " ";
  } cout << endl;

}