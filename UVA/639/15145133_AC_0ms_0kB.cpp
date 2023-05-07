#include <bits/stdc++.h>
using namespace std;
char grid[4+5][4+5];
int vis[4+5][4+5];
int n;
int solve (int placed=0)
{
    int maxPlaced=placed;
    for (int i=0;i<n;i++) {
        for (int j=0;j<n;j++) {
            if(vis[i][j]==0) {
                for(int u=j;u>=0;u--){
                  if(grid[i][u]=='X')break;
                    vis[i][u]++;
                  }
                for(int u=j+1;u<n;u++){
                  if(grid[i][u]=='X')break;
                    vis[i][u]++;
                  }
                for(int u=i-1;u>=0;u--){
                  if(grid[u][j]=='X')break;
                    vis[u][j]++;
                  }
                for(int u=i+1;u<n;u++){
                  if(grid[u][j]=='X')break;
                    vis[u][j]++;
                  }
                int ret=solve (placed+1);
                maxPlaced=max(ret,maxPlaced);
                for(int u=j;u>=0;u--){
                  if(grid[i][u]=='X')break;
                    vis[i][u]--;
                  }
                for(int u=j+1;u<n;u++){
                  if(grid[i][u]=='X')break;
                    vis[i][u]--;
                  }
                for(int u=i-1;u>=0;u--){
                  if(grid[u][j]=='X')break;
                    vis[u][j]--;
                  }
                for(int u=i+1;u<n;u++){
                  if(grid[u][j]=='X')break;
                    vis[u][j]--;
                  }
            }
        }
    }
    return maxPlaced;
}

int main ()
{
    while(cin>>n&&n) {
      memset (vis, 0, sizeof vis);
        for(int i=0;i<n;i++)
          cin>>grid[i];
        for(int i=0;i<n;i++) {
            for(int j=0;j<n;j++)
                if(grid[i][j]=='X') vis[i][j]=1e5;
        }
        cout<<solve()<<endl;
    }

    return 0;
}
