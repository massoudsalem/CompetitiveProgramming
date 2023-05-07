#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) {
  long long n,x,d,cnt=0;
  char t[5];
  scanf("%lld %lld",&n,&x);
  while(n--){
    scanf("%s %lld",t,&d);
    if(t[0]=='+'){
      x+=d;
    }else{
      if(d>x)cnt++;
      else x-=d;
    }
  }
  printf("%lld %lld",x,cnt);
}