#include <bits/stdc++.h>
#define lol long long

using namespace std;

lol n, lo, hi, ans;
vector<lol> primes;

void seive(){
    const lol N = 1e6+50;
    bitset<N> s;
    s.set();
    s[0] = s[1] = 0;
    
    for(lol i = 2 ; i < N ; ++i){
        if(!s[i]) continue;
        primes.push_back(i);
        for(lol j = 2*i ; j < N ; j += i) s[j] = 0;
    }
    
}

lol cnt(lol x){
    lol t = x*x, c = 0;
    while(t < lo) t *= x;
    while(t <= hi){
        t *= x;
        c++;
    }
    return c;
}

int main(){

    seive();
    //freopen("out", "w", stdout);
    //freopen("in", "r", stdin);
    cin.sync_with_stdio(0);
    
    cin >> n;
    while(n--){
        cin >> lo >> hi;
        ans = 0;
        for(lol i : primes) ans += cnt(i);
        printf("%lld\n", ans);
    }

    return 0;
}