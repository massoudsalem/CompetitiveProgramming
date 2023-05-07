/*******************************************
 * - Coded by Moh.Massoud
 * - Problem name: B. Forming Teams
 * - Url: http://codeforces.com/contest/216/problem/B
 ********************************************/
#include <bits/stdc++.h>
using namespace std;
bool vis[2000+5]; //visited array
vector<int> AdjList[100000+5]; //Adj. List for storing the graph
int n,e,u,v; //n is nodes //e is edges //u is perent //v is child
void creatingAdjListGraph(){
    cin>>n>>e;
    for(int i=0;i<e;++i){
        cin>>u>>v;
        AdjList[u].push_back(v);
        AdjList[v].push_back(u); //undirected graph
    }
}

bool findCycle(int vertex, int parent, int &cnt){
    //Vertex, parent of node, count of nodes
    vis[vertex]=1;
    cnt++;
    for(auto v:AdjList[vertex]){
        if(!vis[v]){
            if(findCycle(v, vertex, cnt))
                return 1;
        }else if(v != parent){
            return 1;
        }
    }
    return 0;
    //ToboSort.push_back(root); //topological sort
}

int main(int argc, char const *argv[]) {
    creatingAdjListGraph();
    int nodeToRemove = 0;
    for (int i = 1; i <= n; i++){
        int cnt = 0;
        if(!vis[i])
        if(findCycle(i, 0, cnt))
            nodeToRemove += cnt & 1;
    }
    if((n-nodeToRemove)&1)
        nodeToRemove++;
    cout << nodeToRemove;
    return 0;
}
