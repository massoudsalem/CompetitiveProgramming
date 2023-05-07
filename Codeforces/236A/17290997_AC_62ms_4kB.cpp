#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) {
    string s;
    cin>>s;
    sort(s.begin(),s.end());
    s.erase(unique(s.begin(),s.end()),s.end());
    cout<<((s.size()&1) ? "IGNORE HIM!":"CHAT WITH HER!");
  return 0;
}
