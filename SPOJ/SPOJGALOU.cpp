#include <bits/stdc++.h>
using namespace std;
char AdjMatrix[100+5][100+5];
pair<bool,bool> vis[100][100];
pair<bool,bool>pzero={0,0};
char currChar='*';
int n,e,m,u,v; //n is nodes //e is edges //u is begin //v is end //r is row
int dx[] = {-1,-1,0,0,1,1}; //dx dir array
int dy[] = {0,1,-1,1,-1,0};//dy dir array
bool valid(int tx,int ty){//tx is row //ty is column
    return (tx>=0&&tx<e&&ty>=0&&ty<m);  //check validation and return
}
void BFS(int sx,int sy){
    queue<pair<int,int>> qu;
    qu.push({sx,sy});
    vis[sx][sy].first=1;
    pair<int,int> u,v;
    while(!qu.empty()){
        u=qu.front();
        qu.pop();
        for(int i=0;i<6;++i){
            v={u.first-dx[i],u.second-dy[i]}; //flooding point
            if(((!vis[v.first][v.second].first&&vis[u.first][u.second].second)||(!vis[v.first][v.second].second&&vis[u.first][u.second].first))&&valid(v.first,v.second)&&AdjMatrix[v.first][v.second]!='.'){ //check validation and visit
              qu.push(v);
              if(vis[u.first][u.second].first){
                vis[v.first][v.second].second=1;
              }
              if(vis[u.first][u.second].second){
                vis[v.first][v.second].first=1;
              }
            }
        }
    }
}
void fillvis(int x,int y){
  for(int i=0;i<x;++i){
    for(int j=0;j<y;++j){
      vis[i][j]=pzero;
    }
  }
}
int main(){
  while(cin>>e>>m&&e&&m){
    fillvis(e,m);
    for(int i=0;i<e;++i){
      cin>>AdjMatrix[i];
    }
    for(int i=0;i<e;++i){
      for(int j=0;j<m;++j){
        if((!vis[i][j].first||!vis[i][j].second)&&AdjMatrix[i][j]=='I'){
          BFS(i,j);
        }
      }
    }
    for(int i=0;i<e;++i){
      for(int j=0;j<m;++j){
        if(AdjMatrix[i][j]=='.'){
          cout<<".";
        }else{
          if(vis[i][j].first&&vis[i][j].second){
            cout<<"B";
          }else if(vis[i][j].first){
            cout<<"(";
          }else if(vis[i][j].second){
            cout<<")";
          }else{
            cout<<"F";
          }
        }
      }
      cout<<endl;
    }
  }
  return 0;
}
 