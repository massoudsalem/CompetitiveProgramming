#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) {
  int n,h,a,sum=0;
  scanf("%d %d",&n,&h);
  for(int i=0;i<n;++i){
    scanf("%d",&a);
    sum+=(a>h? 2:1);
  }
  printf("%d\n",sum);
  return 0;
}
