/*******************************************
 * - Coded by Moh.Massoud
 * - Problem name: 10110 - Light, more light
 * - Url: https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=1051
 ********************************************/
#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) { //Faster solution
  int n;
  while(scanf("%d",&n),n){
    int sqrtn=sqrt(n);
    printf("%s\n",(sqrtn*sqrtn==n)?"yes":"no");
  }
  // while(scanf("%d",&n),n){ //this solution is also right but takes longer
  //   int cnt=0;
  //   for(int i=1;i*i<=n;++i){
  //     if(n%i==0){
  //       if(n/i==i)++cnt;a
  //       else cnt+=2;
  //     }
  //   }
  //   printf("%s\n",(cnt&1)?"yes":"no");
  // }
}
