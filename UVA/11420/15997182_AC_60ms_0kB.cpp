#include <bits/stdc++.h>
#define lol long long

using namespace std;

const int N = 1e2;
int n, s;
lol mem[N][N][2];

lol solve(int i = 0, int sec = 0, bool last = 1){
    if(i == n) return sec == s;
    lol &ans = mem[i][sec][last];
    if(~ans) return ans;
    return ans = solve(i+1, sec, 0) + solve(i+1, sec + last, 1);
}

int main(){
    
    //freopen("in", "r", stdin);
    cin.sync_with_stdio(0);
    
    while(cin >> n >> s, n >= 0 && s >= 0){
        memset(mem, -1, sizeof mem);
        printf("%lld\n", solve());
    }    

    return 0;
}