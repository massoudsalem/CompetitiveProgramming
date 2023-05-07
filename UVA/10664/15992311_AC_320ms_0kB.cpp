#include <bits/stdc++.h>
using namespace std;
int n,sum,i,k,luggage,luggages[8000];
int mem[8000][8000];
string s;
bool solve(int i=0,int load=0){
  if(i==k) return load==sum/2;
  int &ret=mem[i][load];
  if(~ret) return ret;
  return ret=max(solve(i+1,load),solve(i+1,load+luggages[i]));
}
int main(int argc, char const *argv[]) {
  #ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("out.txt", "w", stdout);
  #endif
  cin.sync_with_stdio(0);
  cin>>n;
  cin.ignore();
  while(n--){
    memset(mem, -1, sizeof mem);
    sum=0,k=0;
    getline(cin,s);
    stringstream ss(s);
    while(ss>>luggage){
      luggages[k]=luggage;
      sum+=luggage;
      ++k;
    }
    printf("%s\n",!(sum&1)&&solve()?"YES":"NO");
    // printf("%d %d\n", !(sum&1),solve());
  }
  return 0;
}
// #include <bits/stdc++.h>
// using namespace std;
// int n,sum,i,luggage,luggages[8000];
// int mem[8000][8000];
// string s;
// bool solve(int i=0,int load=0){
//   if(i==n)
//     return load==sum/2;
//   int &ret=mem[i][load];
//   if(~ret) return ret;
//   return ret=max(solve(i+1,load),solve(i+1,load+luggages[i]));
// }
// int main(int argc, char const *argv[]) {
//   #ifndef ONLINE_JUDGE
//     freopen("input.txt", "r", stdin);
//     freopen("out.txt", "w", stdout);
//   #endif
//   scanf("%d", &n);
//   while(n--){
//     memset(mem, -1, sizeof mem);
//     getline(cin,s);
//     sum=i=0;
//     stringstream ss(s);
//     while(ss>>luggage){
//       luggages[i]=luggage;
//       sum+=luggage;
//       ++i;
//     }
//     printf("%s\n",!(sum&1)&&solve()?"NO":"YES");
//     printf("%d %d\n", !(sum&1),solve());
//   }
//   return 0;
// }
