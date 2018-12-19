/*******************************************
 * - Coded by Moh.Massoud
 * - Problem name: 408 - Uniform Generator
 * - Url: https://uva.onlinejudge.org/index.php?option=onlinejudge&page=show_problem&problem=349
 ********************************************/
 #include <bits/stdc++.h>
 using namespace std;
 int main(int argc, char const *argv[]) {
   cin.sync_with_stdio(0);cin.tie(0);cout.tie(0);
   int step,mod,curr=0;
   while(cin>>step>>mod){
     set <int> st;
     for(int i=0;i<mod;++i){
       int gen=(curr+step)%mod;
       st.insert(gen);
       curr=gen;
     }
     cout<<setw(10)<<step<<setw(10)<<mod<<"    "<<((st.size()==(unsigned int)mod)?"Good Choice\n\n":"Bad Choice\n\n");
   }
 }
