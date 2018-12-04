/*******************************************
 * - Coded by Moh.Massoud
 * - Problem name: A. Magnets
 * - Url: https://codeforces.com/contest/344/problem/A
 ********************************************/
#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) {
  int n,a,b,ans=0;
  scanf("%d",&n);
  while(n--){
    scanf("%d",&a);
    if(a!=b)++ans;
    b=a;
  }
  printf("%d\n",ans);
}
