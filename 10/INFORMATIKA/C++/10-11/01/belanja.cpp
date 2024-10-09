#include <iostream>
using namespace std;
int main()
{
	int indomie_goreng = 3500;
	int bimoli_2L = 35000;
	int kecap_abc = 8000;
	int beras_5kg = 75000;

	cout << "Indomie Goreng \t" << indomie_goreng << endl;
	cout << "Bimoli 2L \t" << bimoli_2L << endl;
	cout << "Kecap ABC \t" << kecap_abc << endl;
	cout << "Beras 5KG \t" << beras_5kg << endl;
	
	int total_belanja = indomie_goreng + bimoli_2L + kecap_abc + beras_5kg;
	
	cout << "Total Belanja :" << total_belanja << endl;

	int uang_dibayarkan = 200000;
	int kembalian = uang_dibayarkan - total_belanja;
	cout << "Kembalian : \t" << kembalian << endl;
}
