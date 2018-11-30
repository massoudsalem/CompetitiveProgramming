/*******************************************
 * - Coded by Moh.Massoud
 * - Problem name: A. Anton and Danik
 * - Url: https://codeforces.com/contest/734/problem/A
 ********************************************/
#include <iostream>
using namespace std;
int d,a;
int main()
{
    int n;
    cin>>n;
    string s;
    cin>>s;
    for (int i=0;i<n;++i)
    {
        if (s[i]=='A')
            a++;
        else
            d++;
    }
    if (a==d)
        cout<<"Friendship"<<endl;
    else if (a>d)
        cout<<"Anton"<<endl;
    else
        cout<<"Danik"<<endl;
    return 0;
}
