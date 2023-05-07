#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) {
  string s;
  cin>>s;
  int upper=count_if(s.begin(),s.end(),::isupper),lower=s.size()-upper;
  upper>lower ? transform(s.begin(),s.end(),s.begin(), ::toupper):transform(s.begin(),s.end(),s.begin(), ::tolower);
  cout<<s<<endl;
}