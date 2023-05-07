#include <bits/stdc++.h>

using namespace std;
const int N = 2e8 +5 , Q = 1e5 +5, OO = 1000000007;

int n, nxt;
bitset<N> isComp;
int A[Q];

int main(){
  // freopen("i.in", "rt", stdin);
  // freopen("o.out", "wt", stdout);
  isComp[0] = 1;
  isComp[1] = 1;
  for(int i = 4 ; i < N ; i+=2) isComp[i] = 1;
  for(int i = 3 ; i*i <= N; i+=2){
    if(!isComp[i]){
      for(int j = i*i ; j<N ; j+=i){
        isComp[j] = 1;
      }
    }
  }
  for(int i = 3 ; i < N && nxt<Q ; ++i)
    if(!isComp[i] && !isComp[i+2])  A[++nxt] = i;
  while(~scanf("%d", &n)){
    printf("(%d, %d)\n", A[n], A[n]+2);
  }
  return 0;
}