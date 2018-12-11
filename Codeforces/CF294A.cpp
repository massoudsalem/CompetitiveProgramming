/*******************************************
 * - Coded by Moh.Massoud
 * - Problem name: A. Shaass and Oskols
 * - Url: https://codeforces.com/contest/294/problem/A
 ********************************************/
#include <bits/stdc++.h>
using namespace std;
int n,t,x,y,wires[100+5];
int main(int argc, char const *argv[]) {
  scanf("%d",&n);
  for(int i=1;i<=n;++i)
    scanf("%d",wires+i);
  scanf("%d",&t);
  while(t--){
    scanf("%d %d",&x,&y);
    wires[x+1]+=wires[x]-y,wires[x-1]+=y-1,wires[x]=0;
  }
  for(int i=1;i<=n;++i)printf("%d\n",wires[i]);
}
