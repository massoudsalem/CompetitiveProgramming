#include <bits/stdc++.h>
using namespace std ;
long long n,k;
vector <long long>divisors;
void findDivisors(long long n){
  for(long long i = 1 ; i*i <= n ; ++i){
    if(n%i == 0){
      divisors.push_back(i);
      if(i*i!=n)divisors.push_back(n/i);
    }
  }
}
int main() {
  cin>>n>>k;
  findDivisors(n);
  sort(divisors.begin(),divisors.end());
  if(k>divisors.size())
    puts("-1");
  else
    printf("%lld\n",divisors[k-1]);
  return 0;
}
