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
                dp[i]=min(dp[i],price[i]+dp[i-j]);
            else
                dp[i] = OO;
        }
    }
    return dp[k];
}
int a[1000000+5];
int main(int argc, char const *argv[]) {
    int n, r;
    cin>>n>>r;
    for(int i = 0; i<n;++i)
        cin>>a[i];
    for(int i = r; i < n;++i)
        cout<<a[i]<<" ";
    for(int i = 0; i<r;++i)
        cout<<a[i]<<" ";
    cout<<endl;
}