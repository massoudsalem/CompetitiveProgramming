#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) {
  cin.sync_with_stdio(0);cin.tie(0);cout.tie(0);
  string s;
  cin>>s;
  int len=s.length();
  sort(s.begin(),s.end());
  for(int i=0;i<len;++i){
    if(s[i]=='+')continue;
    cout<<s[i]<<((i<len-1)?"+":"\n");
  }
}