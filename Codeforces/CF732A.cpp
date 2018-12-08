/*******************************************
 * - Coded by Moh.Massoud
 * - Problem name: A. Buy a Shovel
 * - Url: https://codeforces.com/contest/732/problem/A
 ********************************************/
#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) {
  int k,r,ans;
  scanf("%d %d",&k,&r);
  while(++ans&&(k*ans-r)%10&&k*ans%10);
  printf("%d\n",ans);
}
