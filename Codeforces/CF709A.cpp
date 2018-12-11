/*******************************************
 * - Coded by Moh.Massoud
 * - Problem name: A. Juicer
 * - Url: https://codeforces.com/contest/709/problem/A
 ********************************************/
#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) {
  int n,b,d,a,cnt=0,sum=0;
  scanf("%d %d %d",&n,&b,&d);
  while(n--){
    scanf("%d",&a);
    if(a>b)continue;
    sum+=a;
    if(sum>d){
      sum=0;
      ++cnt;
    }
  }
  printf("%d\n",cnt);
}
