#include <bits/stdc++.h>
using namespace std;
int main(int argc, char const *argv[]) {
  int n,bit=0;char s[50+5];
  scanf("%d",&n);
  while (n--) {
    scanf("%s",s);
    (s[1]=='+') ? ++bit:--bit;
  }
printf("%d\n",bit);
}