#include <bits/stdc++.h>
using namespace std;
long long n,dist,mn=1e9,a;
vector<long long> v;
int main(int argc, char const *argv[]) {
  // #ifndef ONLINE_JUDGE
  freopen("input.txt","r",stdin);
  freopen("output.txt","w",stdout);
  // #endif
  scanf("%lld\n", &n);
  for(int i=0;i<n;++i){
    scanf("%lld\n",&a);
    v.push_back(a);
  }
  sort(v.begin(),v.end());
  for(int i=0;i<n;++i){
    dist=upper_bound(v.begin(),v.end(),v[i]*2)-v.begin();
    mn=min(mn,i+n-dist);
  }
  printf("%lld\n",mn);
  return 0;
}
