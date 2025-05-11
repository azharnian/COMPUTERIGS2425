import java.util.*;

public class ArrayResizer
{
    public static void main(String[] args)
    {
        int[][] arr = {{2, 1, 0},
                        {1, 3, 2},
                        {0, 0, 0},
                        {4, 5, 6}};

        int[][] newArr = resize(arr);
        for (int[] row : newArr)
        {
            System.out.println(Arrays.toString(row));
        }
        
        
    }

    /** Returns true if and only if every value in row r of array2D is non-zero.
     * Precondition: r is a valid row index in array2D.
     * Postcondition: array2D is unchanged.
     */
    public static boolean isNonZeroRow(int[][] array2D, int r)
    { 
        int [] row = array2D[r];
        for (int n :  row)
        {
            if (n == 0)
            {
                return false;
            }
        }
        return true;
    
    }

    /** Returns the number of rows in array2D that contain all non-zero values.
     * Postcondition: array2D is unchanged.
     */
    public static int numNonZeroRows(int[][] array2D)
    { 
        int counter = 0;
        for (int i = 0; i < array2D.length; i++)
        {
            if (isNonZeroRow(array2D, i))
            {
                counter++;
            }
        }
        return counter;
    }

    /** Returns a new, possibly smaller, two-dimensional array that contains only rows
     * from array2D with no zeros, as described in part (b).
     * Precondition: array2D contains at least one column and at least one row with no zeros.
     * Postcondition: array2D is unchanged.
     */
    public static int[][] resize(int[][] array2D)
    { 
        int[][] newArr = new int [numNonZeroRows(array2D)][array2D[0].length];

        int counterNewRow = 0;
        for (int i = 0; i < array2D.length; i++)
        {
            if (isNonZeroRow(array2D, i))
            {
                newArr[counterNewRow] = array2D[i];
                counterNewRow++;
            }
        }

        return newArr;
    }
}