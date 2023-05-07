#include <bits/stdc++.h>
using namespace std ;
const int N=1e6+50;
bitset<N> notprime;
vector <long long> primes;
long long high,low,ans,n;
void seive(){
  notprime[0]=notprime[1]=1;
  for(int i=2;i<N;++i)
      if(!notprime[i]){
        primes.push_back(i);
        for(int j=i*2;j<N;j+=i){
          notprime[j]=1;
        }
      }
}
long long countTprimes(long long x){
  long long Tprime=x*x,cnt=0;
  while(Tprime<low) Tprime*=x;
  while (Tprime<=high) {
    Tprime*=x;
    cnt++;
  }
  return cnt;
}
int main() {
  #ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("out.txt", "w", stdout);
  #endif
  seive();
  cin>>n;
  while(n--){
    cin>>low>>high;
    ans=0;
    for(auto i:primes)ans+=countTprimes(i);
    printf("%lld\n",ans);
  }
}
