#include <bits/stdc++.h>
using namespace std;

int dp[20000+5];
int w,n,price[20000+5],weight[20000+5];
int LKS(){  //single item dp
  for(int i=0;i<=n;++i)
    for(int j=20000;j>=weight[i];--j){
        dp[j]=max(dp[j],price[i]+dp[j-weight[i]]);
    }
    return dp[w];
}
int main(int argc, char const *argv[]) {
  #ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("out.txt", "w", stdout);
  #endif
  // memset(mem,-1,sizeof mem);
  while (scanf("%d %d",&w,&n),w&&n) {
    memset(dp,0,sizeof dp);
    for(int i=0;i<n;++i)
      scanf("%d %d",weight+i,price+i);
    int fun=LKS(),cost;
    for(cost=0;cost<20000;++cost)
      if(dp[cost]==fun) break;
    printf("%d %d\n",cost,fun);
  }
  return 0;
}
