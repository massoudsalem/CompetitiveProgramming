#include <bits/stdc++.h>
using namespace std;
long long a, b, k;
int main(){
scanf("%lld %lld\n",&a,&b);
    while(a&&b){
        if(a >= b){
            k+=a/b;
            a%=b;
        }else{
            k+=b/a;
            b%=a;
        }
    }
    printf("%lld\n", k);
}