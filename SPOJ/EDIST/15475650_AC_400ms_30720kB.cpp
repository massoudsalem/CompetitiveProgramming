#include <bits/stdc++.h>
using namespace std;
int s1Size,s2Size;
string s1,s2;
int mem[2000+5][2000+5];
int solve(int i=0,int j=0){
  if(i==s1Size) return s2Size-j;
  if(j==s2Size) return s1Size-i;
  int &ret=mem[i][j];
  if(~ret)return ret;
  if(s1[i]==s2[j]) return ret=solve(i+1,j+1);
  return ret=min(solve(i+1,j),min(solve(i,j+1),solve(i+1,j+1)))+1;
}
int main(int argc, char const *argv[]) {
  #ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("out.txt", "w", stdout);
  #endif
  int t;
  cin>>t;
  while(t--){
    memset(mem,-1,sizeof mem);
    cin>>s1>>s2;
    s1Size=s1.size();
    s2Size=s2.size();
    printf("%d\n",solve());
  }
}