#include <bits/stdc++.h>
#define jester07 ios_base::sync_with_stdio(false)
#define ll long long
using namespace std;
int a[500+5][500+5];
ll mn=1e9+1;
int n,m;
ll cnt;
const int N = 1e6;
bitset<N>num;
vector<int> primes;
void sieve(){
	num[0] = num[1] = 1;
	for(int i = 2 ; i < N ; ++i){
		if(!num[i]){
			primes.push_back(i);
			for(int j = i*2 ; j < N ; j += i){
				num[j] = 1;
			}
		}
	}
}
int main()
{
    jester07;
    sieve();
    cin>>n>>m;
    for(int i=0;i<n;++i)
    for(int j=0;j<m;++j){
        cin>>a[i][j];
    }

    for(int i=0;i<n;++i){
        cnt=0;
    for(int j=0;j<m;++j){
        if(!num[a[i][j]])continue;
        cnt+=abs(*upper_bound(primes.begin(),primes.end(),a[i][j])-a[i][j]);
    }
    mn=min(mn,cnt);
    }
    for(int i=0;i<m;++i){
        cnt=0;
    for(int j=0;j<n;++j){
        if(!num[a[j][i]])continue;
        cnt+=abs(*upper_bound(primes.begin(),primes.end(),a[j][i])-a[j][i]);
    }
    mn=min(mn,cnt);
    }
    cout<<mn;
    return 0;
}