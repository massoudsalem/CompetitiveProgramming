/*******************************************
 * - Coded by Moh.Massoud
 * - Problem name: A. Night at the Museum
 * - Url: https://codeforces.com/contest/731/problem/A
 ********************************************/
#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) {
  cin.sync_with_stdio(0);cin.tie(0);cout.tie(0);
  char curr='a';int sum=0;string s;
  cin>>s;
  for(auto c:s)
    sum+=min(abs(curr-c),26-abs(curr-c)),curr=c;
  cout<<sum<<endl;
}
