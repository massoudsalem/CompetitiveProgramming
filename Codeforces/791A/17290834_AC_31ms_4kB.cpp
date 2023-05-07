/*******************************************
 * - Coded by Moh.Massoud
 * - Problem name: A. Bear and Big Brother
 * - Url: https://codeforces.com/contest/791/problem/A
 ********************************************/
 #include <bits/stdc++.h>
 using namespace std;
 int main(int argc, char const *argv[]) {
   int a,b,ans=0;
   scanf("%d %d",&a,&b);
   while(a<=b) a*=3,b*=2,++ans;
   printf("%d\n",ans);
   return 0;
 }
