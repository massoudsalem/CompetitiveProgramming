/*******************************************
 * - Coded by Moh.Massoud
 * - Problem name: A. Sereja and Dima
 * - Url: https://codeforces.com/contest/381/problem/A
 ********************************************/
#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) {
  int n,a,b;
  deque <int> que;
  scanf("%d",&n);
  for(int i=0;i<n;++i){
    scanf("%d",&a);
    que.push_back(a);
  }
  a=0,b=0;
  for(int i=0;i<n;++i){
    int mx;
    if (que.front()>que.back()) mx=que.front(),que.pop_front(); else mx=que.back(),que.pop_back();
    (i%2)? a+=mx:b+=mx;
  }
  printf("%d %d\n",b,a);
}
