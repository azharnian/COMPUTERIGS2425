class Statistic:

    intro = False
    game_active = False
    play_again = True

    high_score = 0
    score = 0
    level = 1
    life = 3

    @staticmethod
    def reset_game():
        Statistic.current_score = 0
        Statistic.level = 1
        Statistic.life = 3
