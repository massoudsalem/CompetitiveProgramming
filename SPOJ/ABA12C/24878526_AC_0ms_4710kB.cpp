#include <bits/stdc++.h>
using namespace std;

int dp[20000+5];
int k;
int w,n,price[20000+5],weight[20000+5];
int OO = 0x3f3f3f3f;
int LKS(){  //single item dp
    dp[0] = 0;
    for(int i=1;i <= k;++i){
        for(int j=1;j <= i;++j){
            if(price[j] != -1)
                dp[i]=min(dp[i],price[j]+dp[i-j]);
            else
                dp[i] = OO;
        }
    }
    return dp[k];
}
int main(int argc, char const *argv[]) {
    int t;
    cin>>t;
    while(t--){
        memset(dp,OO,sizeof dp);
        cin>>n>>k;
        for(int i=1;i<=k;++i)
            cin>>price[i];
        int ans = LKS();
        if(ans == OO)
            ans = -1;
        cout<<ans<<endl;
    }
    return 0;
}