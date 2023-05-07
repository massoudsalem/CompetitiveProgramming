#include <bits/stdc++.h>
using namespace std ;
const int N=1e3+50;
bitset<N> notprime;
vector <long long> primes;
long long cnt,n,k;
long long s,e;
void seive(){
  notprime.reset();
  primes.clear();
  primes.push_back(1);
  notprime[0]=notprime[1]=1;
  for(int i=2;i<=n;++i)
      if(!notprime[i]){
        primes.push_back(i);
        for(int j=i*2;j<=n;j+=i){
          notprime[j]=1;
        }
      }
}
int main() {
  #ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("out.txt", "w", stdout);
  #endif
  while(~scanf("%lld %lld\n",&n,&k)){
    seive();
    long long pSize=primes.size();
    if(pSize&1){
      s=max(pSize/2-k+1,0LL);
      e=min(pSize/2+k,pSize);
    }else{
      s=max(pSize/2-k,0LL);
      e=min(pSize/2+k,pSize);
    }
    printf("%lld %lld:",n,k);
    for(long long i=s;i<e;++i)printf(" %lld",primes[i]);
    puts("\n");

  }
}
