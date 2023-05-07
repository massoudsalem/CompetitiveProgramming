#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) {
  int n,a,b,c,ans=0;
  scanf("%d",&n);
  for(int i=0;i<n;++i){
    scanf("%d%d%d",&a,&b,&c);
    if(a+b+c>=2)++ans;
  }
  printf("%d\n",ans);
  return 0;
}