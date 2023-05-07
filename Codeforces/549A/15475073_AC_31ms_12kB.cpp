#include <bits/stdc++.h>
using namespace std;
char grid[50+5][50+5];
int n,e,cnt;
int main(int argc, char const *argv[]) {
  #ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("out.txt", "w", stdout);
  #endif
  cin>>n>>e;
  for(int i=0;i<n;++i)
    cin>>grid[i];
  for(int i=0;i<n-1;++i)
    for(int j=0;j<e-1;++j){
      if((grid[i][j]*grid[i+1][j]*grid[i][j+1]*grid[i+1][j+1])=='f'*'a'*'c'*'e')
        cnt++;
    }
    printf("%d\n",cnt);
  return 0;
}