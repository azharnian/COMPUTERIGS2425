#include <iostream>
#include <iomanip>
using namespace std;
 
int main() {
    double R;
    cin >> R;
    
    double A = 3.14159 * R * R;
    cout << fixed << setprecision(4) << "A=" << A << endl;
    return 0;
}