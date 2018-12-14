/*******************************************
 * - Coded by Moh.Massoud
 * - Problem name: A. Team Olympiad
 * - Url: https://codeforces.com/contest/490/problem/A
 ********************************************/
#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) {
  int n,t;
  vector <int> programming,maths,pe;
  scanf("%d",&n);
  for(int i=1;i<=n;++i){
    scanf("%d",&t);
    if (t==1)      programming.push_back(i);
    else if (t==2) maths.push_back(i);
    else           pe.push_back(i);
  }
  int teams=min(min(programming.size(),maths.size()),pe.size());
  printf("%d\n",teams);
  for(int i=0;i<teams;++i)
    printf("%d %d %d\n",programming[i],maths[i],pe[i]);
  return 0;
}
