#include <iostream>
#include <string>
using namespace std;


bool isLetterAVowel(char letter)
{
    if (letter == 'a'|| letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u')
    {
        return true;
    }
    return false;
}

int main()
{
    string word;
    getline(cin, word);
    if (isLetterAVowel(word[0]))
    {
        cout << word << "way" << endl;
    } else if (isLetterAVowel(word[1]))
    {
        cout << word.substr(1) << word[0] << "ay" << endl;
    } else {
        cout << word.substr(2) << word.substr(0, 2) << "ay" << endl;
    }

}