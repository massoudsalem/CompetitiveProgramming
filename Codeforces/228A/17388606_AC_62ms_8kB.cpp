#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) {
  int a,b,c,d,ans=0;
  scanf("%d %d %d %d",&a,&b,&c,&d);
  ans+=((a==b)||(a==c)||(a==d)) +((b==c)||(b==d))+(c==d);
  printf("%d\n",ans);
}