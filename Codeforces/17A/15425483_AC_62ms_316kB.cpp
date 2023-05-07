#include <bits/stdc++.h>
using namespace std ;
const int N=1e5+5;
bitset<N> notprime;
vector <long long> primes;
long long cnt,n,k;
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
int main() {
  #ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("out.txt", "w", stdout);
  #endif
  cin>>n>>k;
  seive();
  for(int i=0;i<1001;++i){
    long long temp=primes[i]+primes[i+1]+1;
    if(temp<=n&&!notprime[temp]){
      // cout<<primes[i]+primes[i+1]+1<<endl;
      cnt++;
    }
  }
  (k<=cnt) ? puts("YES"):puts("NO");
  return 0;
}
