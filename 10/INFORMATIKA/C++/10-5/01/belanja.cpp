#include <iostream>
using namespace std;
int main()
{
	int indomie_goreng = 3500;
	int sari_roti = 5000;
	int aqua = 4000;
	int silver_queen = 12000;
	int beras_5kg = 75000;
	int minyak_sunco_2L = 35000;
	int chiki = 5000;
	
	int total = indomie_goreng + sari_roti + aqua + silver_queen + beras_5kg + minyak_sunco_2L + chiki;
	
	cout << "======ALMART======" << endl;
	cout << endl;
	cout << "Indomie Goreng \t" << indomie_goreng << endl;
	cout << "Sari Roti \t" << sari_roti << endl;
	cout << "Aqua \t\t" << aqua << endl;
	cout << "Silver Queen \t" << silver_queen << endl;
	cout << "Beras 5Kg \t" << beras_5kg << endl;
	cout << "Minyak Sunco 2L" << minyak_sunco_2L << endl;
	cout << "Chiki \t\t"	<< chiki << endl;
	cout << endl;
	cout << "Total Belanja :" << total << endl;

	int uang_dibayarkan = 200000;
	int kembalian = uang_dibayarkan - total;
	cout << "Kembalian : \t" << kembalian << endl;
}
