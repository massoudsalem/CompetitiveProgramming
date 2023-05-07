#include <bits/stdc++.h>
using namespace std ;
const int N=1e6+50;
bitset<N> notprime;
long long dp[N],n,k;
void seive(){
    notprime[0]=notprime[1]=1;
    for(int i=2;i*i<N;++i)
        if(!notprime[i]){
            for(int j=i*i;j<N;j+=i){
                notprime[j]=1;
            }
        }
}
bool check(long long x){
    if(x<=0)return 0;
    long long c=log10(x)+1,rem=pow(10,c),here=2,next=0;
    while(rem>=1){
        if(here==next||notprime[here])return 0;
        here=x%rem;
        rem/=10;
        if(!rem>=1)break;
        next=x%rem;
    }
    return 1;
}
void buildcntdp(){
    for(int i = 2;i <= 1000000; i++){
        dp[i] = dp[i-1];
        if(!notprime[i]){
            if(check(i))
                dp[i]++;
        }
    }
}
int main() {
    seive();
    buildcntdp();
    scanf("%lld\n",&n);
    while(n--){
        scanf("%lld\n",&k);
        printf("%lld\n",dp[k]);
    }
    return 0;
}