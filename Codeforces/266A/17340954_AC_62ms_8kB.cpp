#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) {
  int n,cnt=0;
  char a,b;
  scanf("%d",&n);
  while(n-->-1){
    scanf("%c",&a);
    if(a==b)cnt++;
    b=a;
  }
  printf("%d\n",cnt);
}
