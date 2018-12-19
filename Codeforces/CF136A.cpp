/*******************************************
 * - Coded by Moh.Massoud
 * - Problem name: A. Stones on the Table
 * - Url: https://codeforces.com/contest/266/problem/A
 ********************************************/
#include <bits/stdc++.h>
using namespace std;
int n,a,arr[100+5];
int main(int argc, char const *argv[]) {
  scanf("%d",&n);
  for(int i=1;i<=n;++i) {
    scanf("%d",&a);
    arr[a]=i;
  }
  for(int i=1;i<=n;++i) {
    printf("%d ",arr[i]);
  }
  puts("");
}
