#include <bits/stdc++.h>
using namespace std;
long long t,n,p,w,g;
long long dp[2][20000+5];
long long weight[20000+5],price[20000+5];
long long LKS(){  //single item dp
  for(int i=0;i<=n;++i)
    for(int j=0;j<=w;++j){
      dp[i&1][j]=dp[!(i&1)][j];
      if(j>=weight[i])
        dp[i&1][j]=max(dp[i&1][j],price[i]+dp[!(i&1)][j-weight[i]]);
    }
    return dp[!(n&1)][w];
}
int main(int argc, char const *argv[]) {
  #ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("out.txt", "w", stdout);
  #endif
  scanf("%lld",&t);
  while(t--){
    memset(dp,0,sizeof dp);
    scanf("%lld",&n);
    for(int i=0;i<n;++i)
      scanf("%lld %lld",price+i,weight+i);
    scanf("%lld",&g);
    p=0;
    for(int i=0;i<g;++i){
      scanf("%lld",&w);
      memset(dp,0,sizeof dp);
      p+=LKS();
    }
    printf("%lld\n",p );
  }
  return 0;
}
