#include <bits/stdc++.h>
using namespace std ;
string s;
long long v;
// bool isPrime(long long n) {
//     if(n == 2)              return 1;
//     if(n < 2 || n%2 == 0) 	return 0;
//     for(long long i=3; i*i <= n; i+=2){
//     	if(n%i == 0) return 0;
//     }
//     return 1;
// }
bool isPrime(int x){
    for(int i = 2 ; i*i <= x ; ++i)
        if(x%i == 0) return 0;
    return 1;
}
int letterValue(char ch){
  return islower(ch) ? ch-'a'+1:ch-'A'+27;
}
int main() {
  #ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("out.txt", "w", stdout);
  #endif
  while(cin>>s){
    v=0;
    for(auto ch:s)
      v+=letterValue(ch);
    isPrime(v) ? printf("It is a prime word.\n"):printf("It is not a prime word.\n");
  }
  return 0;
}
