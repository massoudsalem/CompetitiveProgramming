/*******************************************
 * - Coded by Moh.Massoud
 * - Problem name: A. New Password
 * - Url: https://codeforces.com/contest/770/problem/A
 ********************************************/
#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) {
  int n,k;string strlenk,pass;
  scanf("%d %d",&n,&k);
  for(int i='a';i<'a'+k;++i)strlenk+=(char)i;
  for(int i=0;i<n;++i)pass+=strlenk[i%k];
  printf("%s\n",pass.c_str());
  return 0;
}
