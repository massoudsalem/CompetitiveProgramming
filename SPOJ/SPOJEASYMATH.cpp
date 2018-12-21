/*******************************************
 * - Coded by Moh.Massoud
 * - Problem name: EASYMATH - EASY MATH
 * - Url: https://www.spoj.com/problems/EASYMATH/
 ********************************************/
 #include <bits/stdc++.h>
 using namespace std;
 long long lcm(long long a,long long b){
   return (a*b)/__gcd(a,b);
 }
 int main(int argc, char const *argv[]) {
   long long n,m,a,d,p,q;
   int limit=1<<5,t;
   scanf("%d",&t);
   while(t--){
     scanf("%lld %lld %lld %lld",&n,&m,&a,&d);
     long long num[5]={a,a+d,a+d*2,a+d*3,a+d*4};
     p=--n,q=m;
     for(int i=1;i<limit;i++){
       long long LCM=1LL;
       int taken=0;
       for(int j=0;j<5;++j){
         if(i&(1<<j)){
           LCM=lcm(LCM,num[j]);
           taken++;
         }
       }
       if(taken&1){
         p-=n/LCM;
         q-=m/LCM;
       }else{
         p+=n/LCM;
         q+=m/LCM;
       }
     }
     printf("%lld\n",q-p);
   }
   return 0;
 }
