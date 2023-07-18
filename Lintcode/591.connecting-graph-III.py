class ConnectingGraph3:
    """
    @param a: An integer
    @param b: An integer
    @return: nothing
    """

    def __init__(self, n):
        self.teamLeader = [i for i in range(n + 1)]
        self.numberOfMembers = [0 for i in range(n + 1)]
        self.countOfTeams = n
        
    def link(self, a, b):
        if self.numberOfMembers[a] > self.numberOfMembers[b]:
            a, b = b, a
        self.teamLeader[a] = b
        if self.numberOfMembers[a] == self.numberOfMembers[b]:
            self.numberOfMembers[b] += 1
        if self.teamLeader[b] != b:
            self.numberOfMembers[self.findTeam(b)] = self.numberOfMembers[b]
    
    def findTeam(self, a):
        if self.teamLeader[a] == a:
            return a
        self.teamLeader[a] = self.findTeam(self.teamLeader[a])
        return self.teamLeader[a]

    def connect(self, a, b):
        teamOfA = self.findTeam(a)
        teamOfB = self.findTeam(b)
        if teamOfA != teamOfB:
            self.link(teamOfA, teamOfB)
            self.countOfTeams -= 1
        return self.countOfTeams
    
    def query(self):
        return self.countOfTeams