/*******************************************
 * - Coded by Moh.Massoud
 * - Problem name: A. Lineland Mail
 * - Url: https://codeforces.com/contest/567/problem/A
 ********************************************/
#include <bits/stdc++.h>
using namespace std;
int v[100000+5];
int main(){
	int n,i;
	scanf("%d",&n);
	for(i=1;i<=n;++i)
		scanf("%d",v+i);
	v[0]=v[2];v[n+1]=v[n-1];
	for(i=1;i<=n;++i)
	printf("%d %d\n",min(abs(v[i-1]-v[i]),abs(v[i+1]-v[i])),max(v[i]-v[1],v[n]-v[i]));
}
