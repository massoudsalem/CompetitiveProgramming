/*******************************************
 * - Coded by Moh.Massoud
 * - Problem name: A. Anton and Letters
 * - Url: https://codeforces.com/contest/443/problem/A
 ********************************************/
#include <bits/stdc++.h>
using namespace std;
string s;int arr[256],cnt=0;
int main(int argc, char const *argv[]) {
  cin.sync_with_stdio(0);cin.tie(0);cout.tie(0);
  getline(cin,s);
  for(auto i:s)arr[(int)i]++;
  for(int i='a';i<='z';++i)
    if(arr[i])cnt++;
  printf("%d\n",cnt);
}
