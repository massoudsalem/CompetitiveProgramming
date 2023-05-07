#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) {
  int n,k,t,d;
  scanf("%d%d%d%d",&n,&t,&k,&d);
  printf("%s\n",((n-1)/k*t>d?"YES":"NO"));
}