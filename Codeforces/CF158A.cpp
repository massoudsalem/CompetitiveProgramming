/*******************************************
* - Coded by Moh.Massoud
* - Problem name: A. Next Round
* - Url: https://codeforces.com/contest/158/problem/A
********************************************/
#include <bits/stdc++.h>
using namespace std;
int main(){
  int participants[50+5];
  int n,k,max;scanf("%d %d",&n,&k);
  for (int i = 0; i < n; ++i)
  {
    scanf("%d",participants+i);
    if(i+1==k)
      max= participants[i];
  }
  int count=0;
  for (int i = 0; i < n; ++i)
  {
    if(participants[i]>=max && participants[i] > 0)
      count++;
  }
  printf("%d",count);
 return 0;
}
