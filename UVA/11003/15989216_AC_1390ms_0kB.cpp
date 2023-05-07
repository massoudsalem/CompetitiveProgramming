#include <bits/stdc++.h>
using namespace std;
int mem[10000+50][30000+50];
int weight[30000+50],mload[30000+50];
int n;
int solve(int i=0,int load=1000000){
  if(i==n||load==0)
    return 0;
  int &ret=mem[i][load];
  if(~ret) return ret;
  ret=solve(i+1,load);
  if(load>=weight[i])ret=max(ret,1+solve(i+1,min(mload[i],load-weight[i])));
  return ret;
}
int main(int argc, char const *argv[]) {
  #ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("out.txt", "w", stdout);
  #endif
  while(~scanf("%d", &n) && n){
    memset(mem,-1,sizeof mem);
    for(int i=0;i<n;++i){
      scanf("%d %d",&weight[i],&mload[i]);
    }
    printf("%d\n",solve());
  }
  return 0;
}
