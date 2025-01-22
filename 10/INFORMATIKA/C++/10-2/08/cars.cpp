#include <iostream>
using namespace std;

int main()
{
    string cars[5];
    cars[0] = "Toyota";
    cars[1] = "Honda";
    cars[2] = "Daihatsu";
    cars[3] = "Wuling";
    cars[4] = "Suzuki";

    for (int i = 0; i < 5;i++)
    {
        cout << cars[i] << " ";
    }
    cout << endl;

    string airlines[] = {"Garuda", "Lion Air", "Air Asia", "Citilink"};

    // for (string airline : airlines)
    // {
    //     cout << airline << " ";
    // }

    for (int i = 0; i < 4;i++)
    {
        cout << airlines[i] << " ";
    }
    cout << endl;
}