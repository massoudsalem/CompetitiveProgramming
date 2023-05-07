#include <bits/stdc++.h>
using namespace std ;
const int N=2e8+50;
bitset<N> notprime;
long long t2primes[100000+5],n;
// vector <pair<long long,long long>> t2prime;
long long cnt;
void seive(){
  notprime[0]=notprime[1]=1;
  for(int i=2;i*i<N;++i)
      if(!notprime[i]){
        for(int j=i*2;j<N;j+=i){
          notprime[j]=1;
        }
      }
}
int main() {
  #ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("out.txt", "w", stdout);
  #endif
  seive();
  for(int i=3;i<N||cnt<100000+5;++i){
    if(!notprime[i]&&!notprime[i+2])
        t2primes[++cnt]=i;
  }
  while(cin>>n)
    printf("(%lld, %lld)\n",t2primes[n],t2primes[n]+2);
  return 0;
}
