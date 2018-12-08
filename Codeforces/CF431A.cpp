/*******************************************
 * - Coded by Moh.Massoud
 * - Problem name: A. Black Square
 * - Url: https://codeforces.com/contest/431/problem/A
 ********************************************/
#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) {
  cin.sync_with_stdio(0);cin.tie(0);cout.tie(0);
  int arr[4];
  for(int i=0;i<4;++i)
    cin>>arr[i];
  string s;
  cin>>s;
  int sum=0;
  for(auto c:s){
    sum+=arr[c-'1'];
  }
  cout<<sum<<endl;
}
