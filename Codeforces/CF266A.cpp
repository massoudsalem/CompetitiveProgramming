/*******************************************
 * - Coded by Moh.Massoud
 * - Problem name: A. Stones on the Table
 * - Url: https://codeforces.com/contest/266/problem/A
 ********************************************/
#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) {
  int n,cnt=0;
  char a,b;
  scanf("%d",&n);
  while(n-->-1){
    scanf("%c",&a);
    if(a==b)cnt++;
    b=a;
  }
  printf("%d\n",cnt);
}
