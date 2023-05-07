#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) { //Faster solution
  long long n;
  while(scanf("%lld",&n)&&n){
    long long sqrtn=sqrt(n);
    printf("%s\n",(sqrtn*sqrtn==n)?"yes":"no");
  }
}