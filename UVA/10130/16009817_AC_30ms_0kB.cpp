#include <bits/stdc++.h>
using namespace std;
long long t,n,p,w,g;
int mem[1000+5][1000+5];
long long weight[20000+5],price[20000+5];
long long LKS(int curr=0,int rem=w){  //single item dp
  if(rem<0)
    return -1e9;
  if(!rem||curr==n)
    return 0;
  int &ret = mem[curr][rem];
  if(~ret) return ret;
  ret=max(price[curr]+LKS(curr+1,rem-weight[curr]),LKS(curr+1,rem));
  return ret;
}
int main(int argc, char const *argv[]) {
  #ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("out.txt", "w", stdout);
  #endif
  scanf("%lld",&t);
  while(t--){
    memset(mem,-1,sizeof mem);
    scanf("%lld",&n);
    for(int i=0;i<n;++i)
      scanf("%lld %lld",price+i,weight+i);
    scanf("%lld",&g);
    p=0;
    for(int i=0;i<g;++i){
      scanf("%lld",&w);
      // memset(mem,0,sizeof mem);
      p+=LKS();
    }
    printf("%lld\n",p );
  }
  return 0;
}
