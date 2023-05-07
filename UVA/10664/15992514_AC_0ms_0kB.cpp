#include <bits/stdc++.h>
using namespace std;
int n,sum,i,k,luggage,luggages[8000];
string s;
bool solve(){
  int limit=(1<<k);
  for(int mask=0;mask<limit;++mask){
    int load=0;
    for(int j=0;j<k;++j)
    {
      if(mask&(1<<j)){
        load+=luggages[j];
      }
    }
    if(load==sum/2)return 1;
  }
  return 0;
}
int main(int argc, char const *argv[]) {
  #ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("out.txt", "w", stdout);
  #endif
  cin.sync_with_stdio(0);
  cin>>n;
  cin.ignore();
  while(n--){
    sum=0,k=0;
    getline(cin,s);
    stringstream ss(s);
    while(ss>>luggage){
      luggages[k]=luggage;
      sum+=luggage;
      ++k;
    }
    printf("%s\n",!(sum&1)&&solve()?"YES":"NO");
    // printf("%d %d\n", !(sum&1),solve());
  }
  return 0;
}