#include <bits/stdc++.h>
using namespace std;
int arr[100000 + 5];
int main(int argc, char const *argv[])
{
    int n;
    cin >> n;
    for (int i = 0; i < n; ++ i){
        cin >> arr[i];
    }
    for (int i = n - 1; i >= 0; i--){
        cout << arr[i] << " ";
    }
        return 0;
}
