public class Main
{
    public static void main(String[] args)
    {
        Temperature t = new Temperature(30, "C");
        Temperature f = t.inFarenheit();
        System.out.println(t);
        System.out.println(f);
    }   
}

class Temperature
{
    String scale;
    double deg;

    Temperature(double d, String s)
    {
        scale = s;
        deg = d;
    }

    public Temperature raise(double amn)
    {
        deg += amn;
        return this;
    }
    
    public Temperature inFarenheit()
    {
        Temperature result;
        deg *= 1.8;
        this = this.raise(32);
        result = new Temperature(deg, "F");
        return result;
    }

    public String toString()
    {
        return deg+" "+scale;
    }

    public static boolean isValidTemp(double tempDeg,String tempScale)
    {
        if (tempScale.equalsIgnoreCase("C") || tempScale.equalsIgnoreCase("F"))
        {
            return true;
        } 
        return false;
    }

}