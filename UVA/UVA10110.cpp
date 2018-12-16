/*******************************************
 * - Coded by Moh.Massoud
 * - Problem name: 10110 - Light, more light
 * - Url: https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=1051
 ********************************************/
#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) { //Faster solution
  long long n;
  while(scanf("%lld",&n)&&n){
    long long sqrtn=sqrt(n);
    printf("%s\n",(sqrtn*sqrtn==n)?"yes":"no");
  }
}
