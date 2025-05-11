public class Sign
{
    private String msg;
    private int width;

    public Sign(String m, int w)
    {
        msg = m;
        width = w;
    }

    public int numberOfLines()
    {
        int lenMsg = msg.length();
        return (int) Math.ceil(lenMsg / (width*1.0) );
    }

    public String getLines()
    {
        String res = "";
        int start, end;
        for (int i = 0; i < numberOfLines(); i++)
        {
            start = i * width;
            end = Math.min(start + width, msg.length());
            if (i < numberOfLines() - 1)
                res += msg.substring(start, end)+";" ;
            else 
                res += msg.substring(start, end);
        }
        return res;
    }
}