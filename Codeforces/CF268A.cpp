/*******************************************
 * - Coded by Moh.Massoud
 * - Problem name: A. Games
 * - Url: https://codeforces.com/contest/268/problem/A
 ********************************************/
#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) {
  multiset <int> l,r;
  int cnt=0,a,b,n;
  scanf("%d",&n);
  while(n--){
    scanf("%d %d",&a,&b);
    cnt+=l.count(b)+r.count(a);
    l.insert(a);
    r.insert(b);
  }
  printf("%d\n",cnt);
}
