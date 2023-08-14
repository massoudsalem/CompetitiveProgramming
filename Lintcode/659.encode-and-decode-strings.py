class Solution:
    """
    @param: strs: a list of strings
    @return: encodes a list of strings to a single string.
    """
    def encode(self, strs):
        if not strs:
            return ""
        return ''.join([str(len(s)) + ':' + s for s in strs])

    """
    @param: str: A string
    @return: decodes a single string to a list of strings
    """
    def decode(self, str):
        if not str:
            return []
        i, res = 0, []
        while i < len(str):
            j = str.find(':', i)
            i = j + 1 + int(str[i:j])
            res.append(str[j + 1:i])
        return res