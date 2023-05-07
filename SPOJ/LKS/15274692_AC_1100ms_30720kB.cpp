#include <bits/stdc++.h>
using namespace std;

int dp[2][2000000+5];
int w,n,price[500+5],weight[500+5];
// int napsack(int curr=0,int rem=w){
//   if(rem<0)
//     return -1e9;
//   if(!rem||curr==n)
//     return 0;
//   int &ret = mem[curr][rem];
//   if(~ret) return ret;
//   ret=max(price[curr]+napsack(curr+1,rem-weight[curr]),napsack(curr+1,rem));
//   return ret;
// }
int napsack(){
  for(int i=1;i<=n;++i)
    for(int j=1;j<=w;++j){
      dp[i&1][j]=dp[!(i&1)][j];
      if(j>=weight[i])
        dp[i&1][j]=max(dp[i&1][j],price[i]+dp[!(i&1)][j-weight[i]]);
    }
    return dp[n&1][w];
}
int main(int argc, char const *argv[]) {
  #ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("out.txt", "w", stdout);
  #endif
  // memset(mem,-1,sizeof mem);
  cin>>w>>n;
  for(int i=0;i<n;++i)
    cin>>price[i]>>weight[i];
  cout<<napsack()<<endl;
  return 0;
}
