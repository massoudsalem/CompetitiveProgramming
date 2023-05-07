 #include<bits/stdc++.h>
 using namespace std;
 char s[55],t[55];
 int main(){
   scanf("%s%s",s,t);
   int i=0,j=0;
   while(t[j]!='\0'){
     if(s[i]==t[j])i++;
     j++;
   }
   printf("%d\n",++i);
 }
