#include <bits/stdc++.h>
using namespace std ;
const int N=1e8+5;
bitset<N> notprime;
vector <long long> primes;
long long cnt,n,k;
void seive(){
  notprime[0]=notprime[1]=1;
  for(int i=2;i*i<N;++i)
      if(!notprime[i]){
        primes.push_back(i);
        for(int j=i*i;j<N;j+=i){
          notprime[j]=1;
        }
      }
}
int main(int argc, char const *argv[]) {
  #ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("out.txt", "w", stdout);
  #endif
  seive();
  while(~scanf("%lld\n",&n)&&n){
    if(!notprime[n]){
      printf("%lld\n",n);
      continue;
    }
    for(auto i:primes){
      if(n%i==0){
        printf("%lld\n",i);
        break;
      }
    }

  }
  return 0;
}
