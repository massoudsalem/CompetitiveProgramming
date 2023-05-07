#include <bits/stdc++.h>
using namespace std;
long long n,s,sum;
long long mem[100][100][2];
long long solve(int i=0,int secure=0,bool prev=1){
  if(n==i) return secure==s;
  long long &ret=mem[i][secure][prev];
  if(~ret) return ret;
  return ret=solve(i+1,secure,0)+solve(i+1,secure+prev,1);
}
int main(int argc, char const *argv[]) {
  #ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("out.txt", "w", stdout);
  #endif
  while(~scanf("%lld %lld",&n,&s),n >= 0 && s >= 0){
    memset(mem,-1,sizeof mem);
    printf("%lld\n",solve());
  }
  return 0;
}
