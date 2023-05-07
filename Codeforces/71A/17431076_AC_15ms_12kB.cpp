#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) {
  cin.sync_with_stdio(0);cin.tie(0);cout.tie(0);
  int n;string s;
  cin>>n;
  while(n--){
    cin>>s;int sz=s.length();
    if(sz>10)cout<<s[0]<<sz-2<<s[sz-1]<<endl;
    else cout<<s<<endl;
  }
}