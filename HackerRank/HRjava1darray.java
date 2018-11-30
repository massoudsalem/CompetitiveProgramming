/*******************************************
 * - Coded by Moh.Massoud
 * - Problem name: Java 1D Array (Part 2)
 * - Url: https://www.hackerrank.com/challenges/java-1d-array
 ********************************************/
import java.util.*;
public class Solution {

    public static boolean canWin(int leap, int[] game,int n) {
        if(n<0||game[n]==1)
            return false;
        else if (n+1>=game.length||n+leap>=game.length)
            return true;
        game[n]=1;
        return canWin(leap,game,n+1)||canWin(leap,game,n-1)||canWin(leap,game,n+leap);
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int q = scan.nextInt();
        while (q-- > 0) {
            int n = scan.nextInt();
            int leap = scan.nextInt();
            int[] game = new int[n];
            for (int i = 0; i < n; i++) {
                game[i] = scan.nextInt();
            }
            System.out.println( (canWin(leap, game,0)) ? "YES" : "NO" );
        }
        scan.close();
    }
}
