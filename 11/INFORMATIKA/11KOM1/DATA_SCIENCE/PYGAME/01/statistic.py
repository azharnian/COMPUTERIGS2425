class Statistic:

    intro = True
    game_active = False
    high_score = 0
    current_score = 0
    level = 1
    life = 3

    @staticmethod
    def reset_game():
        Statistic.current_score = 0
        Statistic.level = 1
        Statistic.life = 3
