public class Scoreboard
{
    private String team1;
    private String team2;
    private int scoreTeam1 = 0;
    private int scoreTeam2 = 0;
    private boolean activeTeam = true; // true => team1, false => team2

    public Scoreboard(String t1, String t2)
    {
        team1 = t1;
        team2= t2;
    }

    public void recordPlay(int score)
    {
        if (activeTeam)
            scoreTeam1 += score;
        else 
            scoreTeam2 += score;

        if (score == 0)
            activeTeam = !activeTeam;
    }

    public String getScore()
    {
        if (activeTeam)
        {
            return scoreTeam1+"-"+scoreTeam2+"-"+team1;
        }
        return scoreTeam1+"-"+scoreTeam2+"-"+team2;
    }
}