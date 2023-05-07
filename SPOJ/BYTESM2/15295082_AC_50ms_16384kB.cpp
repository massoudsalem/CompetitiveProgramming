#include <bits/stdc++.h>
using namespace std;
int mem[100+5][100+5];
int dp[100+5][100+5];
int n,arr[100+5][100+5];
int t,x,y;
bool valid(int tx,int ty){//tx is row //ty is column
    return (tx>=0&&tx<x&&ty>=0&&ty<y);  //check validation and return
}
int solve(int i,int j){
  if(i==x) return 0;
  int &ret=mem[i][j];
  if(~ret) return ret;
  ret=arr[i][j]+solve(i+1,j);
  if(valid(i+1,j+1))
    ret=max(ret,arr[i][j]+solve(i+1,j+1));
  if(valid(i+1,j-1))
    ret=max(ret,arr[i][j]+solve(i+1,j-1));
  return ret;
}
int SLP(){
  for(int i=x-1;i>=0;--i)
    for(int j=0;j<=y;++j){
      dp[i][j]=arr[i][j]+dp[i+1][j];
      if(valid(i+1,j+1))
        dp[i][j]=max(dp[i][j],arr[i][j]+dp[i+1][j+1]);
      if(valid(i+1,j-1))
        dp[i][j]=max(dp[i][j],arr[i][j]+dp[i+1][j-1]);
    }
    return dp[0][0];
}
int main() {
  #ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("out.txt", "w", stdout);
  #endif
  cin>>t;
  while(t--){
    cin>>x>>y;
    for(int i=0;i<x;++i){
      for(int j=0;j<y;++j){
        cin>>arr[i][j];
      }
    }
    memset(dp[x],0,sizeof dp[x]);
    SLP();
    int mx=*max_element(dp[0], dp[0] + y);
    cout<<mx<<endl;
  }
  return 0;
}
