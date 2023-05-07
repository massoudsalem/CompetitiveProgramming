#include <stdio.h>

int main(int argc, char const *argv[])
{
    //cin.sync_with_stdio(0);cin.tie(0);cout.tie(0);
    int n;
    scanf("%d",&n);
    int x = 0, sum =0;
    while(n){
        x = n % 10;
        sum += x;
        n /= 10;
    }
    printf("%d\n", sum);
}
