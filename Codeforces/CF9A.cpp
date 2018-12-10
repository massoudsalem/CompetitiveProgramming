/*******************************************
 * - Coded by Moh.Massoud
 * - Problem name: A. Die Roll
 * - Url: https://codeforces.com/contest/9/problem/A
 ********************************************/
#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) {
  int k,r;
  scanf("%d %d",&k,&r);
  int ans=6-max(k,r)+1,gcd=__gcd(6,ans);
  printf("%d/%d\n",ans/gcd,6/gcd);
}
