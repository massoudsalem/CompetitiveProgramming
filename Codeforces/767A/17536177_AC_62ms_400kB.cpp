#include <bits/stdc++.h>
using namespace std;
int n,a,flag[100000+5];
int main(int argc, char const *argv[]) {
	scanf("%d",&n);
	int t=n;
	while(t--){
		scanf("%d",&a);
		flag[a]=1;
		while(flag[n])
			printf("%d ",n--);
		puts("");
	}
	return 0;
}
