#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) {
  int n,a,b=0,cnt=0;
  scanf("%d",&n);
  while(n--){
    scanf("%d",&a);
    if(a>0)b+=a;
    if(a<0&&b==0)cnt++;
    if(a<0&&b>0)b--;
  }
  printf("%d\n",cnt);
}