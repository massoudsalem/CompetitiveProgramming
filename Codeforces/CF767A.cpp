/*******************************************
 * - Coded by Moh.Massoud
 * - Problem name: A. Snacktower
 * - Url: https://codeforces.com/problemset/problem/767/A
 ********************************************/
 #include <bits/stdc++.h>
 using namespace std;
 int n,a,flag[100000+5];
 int main(int argc, char const *argv[]) {
   scanf("%d",&n);
   int j=n;
   while(n--){
     scanf("%d",&a);
     flag[a]=1;
     while (flag[j])
       printf("%d ",j--);
     printf("\n");
   }
 }
