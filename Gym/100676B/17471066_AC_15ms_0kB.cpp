#include <bits/stdc++.h>
using namespace std;
long long t,n,q,l;
int main(int argc, char const *argv[]) {
  #ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("out.txt", "w", stdout);
  #endif
  scanf("%lld",&t);
  while(t--){
    scanf("%lld %lld %lld",&n,&q,&l);
    printf("%s\n",(n+q+l==180&&n>0&&q>0&&l>0)?"YES":"NO");
  }
  return 0;
}