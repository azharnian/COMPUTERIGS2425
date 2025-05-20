import java.util.*;

public class StepTracker
{

    private int minSteps;
    private ArrayList<Integer> steps = new ArrayList<Integer>();

    public StepTracker(int mS)
    {
        minSteps = mS;
    }

    public int activeDays(){
        int counter = 0;
        if (steps.size() == 0)
            return counter;

        for (int step : steps)
        {
            if (step >= minSteps)
                counter++;
        }
        return counter;
    }

    public double averageSteps()
    {
        double sum = 0;
        if (steps.size() == 0)
            return sum;

        for (int step : steps)
        {
            sum += step;
        }
        return sum / steps.size();
    }

    public void addDailySteps(int n)
    {
        steps.add(n);
    }

    /*
    public static void main(String[] args)
    {
        StepTracker tr = new StepTracker(10000);
        System.out.println(tr.activeDays()); // 0
        System.out.println(tr.averageSteps()); // 0.0
        tr.addDailySteps(9000);
        tr.addDailySteps(5000);
        System.out.println(tr.activeDays()); // 0
        System.out.println(tr.averageSteps()); // 7000.0
        tr.addDailySteps(13000);
        System.out.println(tr.activeDays()); // 1
        System.out.println(tr.averageSteps()); // 9000.0
    }
    */
}