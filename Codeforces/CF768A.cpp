/*******************************************
 * - Coded by Moh.Massoud
 * - Problem name: A. Oath of the Night's Watch
 * - Url: https://codeforces.com/contest/768/problem/A
 ********************************************/
 #include <bits/stdc++.h>
 using namespace std;
 int n,a,stewards[100000+5];
 int main(int argc, char const *argv[]) {
   scanf("%d",&n);
   for(int i=0;i<n;++i){
     scanf("%d",stewards+i);
   }
   sort(stewards,stewards+n);
   int ans=0;
   for(int i=1;i<n-1;++i){
     ans+=(stewards[0]<stewards[i]&&stewards[i]<stewards[n-1]);
   }
   printf("%d\n",ans);
 }
