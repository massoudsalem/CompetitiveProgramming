/*******************************************
 * - Coded by Moh.Massoud
 * - Problem name: A. Beautiful Matrix
 * - Url: https://codeforces.com/contest/263/problem/A
 ********************************************/
 #include <bits/stdc++.h>
 using namespace std;
 int main(int argc, char const *argv[]) {
   int a;
   for (int i = 1;i<=5;++i)
    for (int j = 1;j<=5;++j){
        scanf("%d",&a);
        if(a==1){
          printf("%d\n",abs(3-i)+abs(3-j));
          break;
        }
    }
   return 0;
 }
