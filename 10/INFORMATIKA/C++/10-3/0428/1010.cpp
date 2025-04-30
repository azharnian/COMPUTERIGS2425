#include <iostream>
#include <iomanip>
using namespace std;

double find_total_pay(double NP1, double PP1, double NP2, double PP2)
{
    return (NP1*PP1 + NP2*PP2);
}

int main()
{
    int code_p1, code_p2, number_p1, number_p2;
    double price_p1, price_p2;

    cin >> code_p1 >> number_p1 >> price_p1;
    cin >> code_p2 >> number_p2 >> price_p2;

    cout << fixed << setprecision(2) << "VALOR A PAGAR: R$ " << find_total_pay(number_p1, price_p1, number_p2, price_p2) << endl;
}