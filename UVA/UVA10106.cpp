/*******************************************
 * - Coded by Moh.Massoud
 * - Problem name: 10106 - Product
 * - Url: https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=1047
 ********************************************/
#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) { //Faster solution is to use python or biginteger in java
  cin.sync_with_stdio(0);cin.tie(0);cout.tie(0);
  string x,y;
  while(cin>>x){
    cin>>y;
    int product[1000];
    memset(product,0,sizeof product);
    reverse(x.begin(),x.end());
    reverse(y.begin(),y.end());
    for(int i=0;i<(int)x.length();++i)
      for(int j=0;j<(int)y.length();++j){
        product[i+j]+=(x[i]-'0')*(y[j]-'0');
      }
      for (int i=0;i<999;i++) {
  			product[i + 1]+=product[i]/10;
  			product[i]%=10;
  		}
      int i=999;
      while (i > 0 && product[i] == 0) i--;
      for (;i>=0;--i)cout<<product[i];
      cout<<endl;
  }
}
