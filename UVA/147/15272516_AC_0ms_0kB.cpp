#include <bits/stdc++.h>
using namespace std ;
double n;
int coins[11] = {5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000};
long long mem[11][30000+1];

long long solve(int idx=0,int rem=30000+1){
  if(rem==0)
    return 1;
  if(rem < coins[idx]||idx == 11)
    return 0;
  long long &ret=mem[idx][rem];
  if(~ret) return ret;
  return ret=solve(idx+1,rem)+solve(idx,rem-coins[idx]);
}
int main() {
  #ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("out.txt", "w", stdout);
  #endif
  memset(mem,-1,sizeof mem);
  while(cin>>n&&n){
    int cents=(int)(n*100 + 1e-7);
    cout<<setiosflags(ios::fixed)
			  <<setiosflags(ios::showpoint)
			  <<setprecision(2)
			  <<setw(6)
			  <<n
			  <<setw(17)
			  <<solve(0, cents)
		    <<endl;
  }


  return 0;
}
