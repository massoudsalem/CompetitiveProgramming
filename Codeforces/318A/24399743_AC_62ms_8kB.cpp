#include <bits/stdc++.h>
using namespace std;
long long n, k;

int main(int argc, char const *argv[]) {
    cin >> n >> k;
    cout << ((n + 1)/2 < k ? (k - (n+1)/2) * 2 : 2*k-1);
    return 0;
}
