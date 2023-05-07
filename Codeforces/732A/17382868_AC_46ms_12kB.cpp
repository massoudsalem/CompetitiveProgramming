#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) {
  int k,r,ans;
  scanf("%d %d",&k,&r);
  for(int i=1;i<2000;++i){
    if((k*i-r)%10==0||k*i%10==0){
      ans=i;
      break;
    }
  }
  printf("%d\n",ans);
}