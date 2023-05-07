#include <bits/stdc++.h>
using namespace std;
long long mem[100000+5];
long long flowercnt[100000+5];
int n,k,a,b;
const int MOD=1000000007;
long long solve(long long flowers=1e5+1){
  if(flowers==0){
    return 1;
  }
  if(flowers<1){
    return 0;
  }
  long long &ret=mem[flowers];
  if(~ret) return ret;
long long _1=0;
  if(flowers-k>=0)
    _1+=solve(flowers-k)%MOD;
  _1+=solve(flowers-1)%MOD;
  return ret=_1;
}
int main() {
  memset(mem,-1, sizeof mem);
  cin>>n>>k;
  solve();
  for(int i=1;i<100005;++i)
        mem[i]=(mem[i-1]+mem[i])%MOD;
  for(int i=0;i<n;++i){
    cin>>a>>b;
    cout<<((mem[b]-mem[a-1]+MOD)%MOD)<<endl;
  }
  return 0;
}
