/*******************************************
 * - Coded by Moh.Massoud
 * - Problem name: A. Keyboard
 * - Url: https://codeforces.com/contest/474/problem/A
 ********************************************/
#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) {
  cin.sync_with_stdio(0);cin.tie(0);cout.tie(0);
  char dir;
  string s,keyboard="qwertyuiopasdfghjkl;zxcvbnm,./";
  cin>>dir>>s;
  for(int i=0;i<s.length();++i)
    cout<<keyboard[keyboard.find(s[i])-(dir=='R' ? 1:-1)];
  cout<<"\n";
}
