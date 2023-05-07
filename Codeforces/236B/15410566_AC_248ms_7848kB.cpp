#include <bits/stdc++.h>
using namespace std ;
long long const N=1000000+5;
long long ans;
long long d[N];
long long a,b,c;
void buildDdp(){
  for(int i=1;i<N;++i)
    for(int j=i;j<N;j+=i){
      d[j]++;
    }
}
long long solve(long long a,long long b,long long c){
  buildDdp();
  for(int i=1;i<=a;++i)
    for(int j=1;j<=b;++j)
      for(int k=1;k<=c;++k){
        ans=(ans+d[i*j*k])%1073741824;
      }
  return ans;
}
int main() {
  #ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("out.txt", "w", stdout);
  #endif
  cin>>a>>b>>c;
  cout<<solve(a,b,c)<<endl;
  return 0;
}
