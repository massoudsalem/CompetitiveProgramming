/*******************************************
 * - Coded by Moh.Massoud
 * - Problem name: A. Gravity Flip
 * - Url: https://codeforces.com/contest/405/problem/A
 ********************************************/
#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) {
  multiset<int>ms;
  int n,a;
  scanf("%d",&n);
  while (n--) {
    scanf("%d",&a);
    ms.insert(a);
  }
  for(auto i:ms)
    printf("%d ",i);
  return 0;
}
