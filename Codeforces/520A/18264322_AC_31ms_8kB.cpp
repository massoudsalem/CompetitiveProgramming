#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) {
  cin.sync_with_stdio(0);cin.tie(0);cout.tie(0);
  string s;
  bool flag=0;
  cin>>s>>s;
  transform(s.begin(),s.end(),s.begin(), ::tolower);
  for(int i='a';i<='z';++i)
    if(count(s.begin(),s.end(),i)==0)
      flag=1;
  cout<<(flag ? "NO":"YES")<<endl;
}