#include <bits/stdc++.h>
using namespace std;
int f,k;
string s,mon[12]={ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"};
int main(int argc, char const *argv[]) {
  #ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("out.txt", "w", stdout);
  #endif
  cin>>s>>k;
  for(int i=0;i<12;++i){
    if(mon[i]==s)f=i;
  }
  cout<<mon[(f+k)%12]<<endl;
  return 0;
}
