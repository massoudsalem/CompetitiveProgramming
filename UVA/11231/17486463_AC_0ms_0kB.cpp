#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) {
  int n,m,c;
  while(scanf("%d %d %d",&n,&m,&c)&&n){
    printf("%d\n",(((n-7)*(m-7)+c)/2));
  }
}
