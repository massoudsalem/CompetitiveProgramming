#include <bits/stdc++.h>
using namespace std ;
int n,m,k,a,b,l,c[18+5],ex[18+5][18+5];
long long mem[262144][20];
bitset <18> msk;
long long solve(bitset<18> msk=0,int last=19){
  if(msk.count()==m) return 0;
  long long &ret=mem[msk.to_ulong()][last];
  if(~ret) return ret;
  ret=0;
  for(int i=0;i<18;++i){
    if(!msk[i])
      ret=max(ret,c[i]+ex[last][i]+solve(msk|bitset<18> ((1<<i)),i));
  }
  return ret;
}
int main() {
  memset(mem,-1,sizeof mem);
  cin>>n>>m>>k;
  for(int i=0;i<n;++i)
    cin>>c[i];
  for(int i=0;i<k;++i){
    cin>>a>>b>>l;
    ex[a-1][b-1]=l;
  }
  cout<<solve();
  return 0;
}
