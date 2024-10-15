import pygame
import sys
from random import choice

from conf import Conf
from statistic import Statistic
from sprites.platform import Platform
from sprites.bird import Bird
from sprites.pipe import Pipe

from sprites.basics.label import Label
from sprites.basics.button import PlayButton, Button
from sprites.basics.entry import Entry

class Game:

    pygame.init()
    screen = pygame.display.set_mode(Conf.SCREEN_SIZE)
    screen_rect = screen.get_rect()

    def __init__(self):
        self.game_title_label = Label(self, "Flappy Bird")
        self.player_entry = Entry(self, "")
        self.login_button = Button(self, "LOGIN")
        # self.play_button = PlayButton(self)
        self.play_button = Button(self, "PLAY NOW")
        self.platform = Platform(self)
        self.bird = Bird(self)
        self.pipes = [ Pipe(self, position) for position in ["top", "bottom"] ]

    def check_event(self):
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                sys.exit()

            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_SPACE:
                    self.bird.fly = True

            elif event.type == pygame.KEYUP:	
                if event.key == pygame.K_SPACE:
                    self.bird.fly = False

            elif event.type == pygame.MOUSEBUTTONDOWN:
                mouse_pos = pygame.mouse.get_pos()
                print(mouse_pos)

    def set_fps(self):
        pygame.time.Clock().tick(Conf.FPS)
        pygame.display.flip()

    def reset_pipes(self):
        self.pipes[0].rect.topleft = self.screen_rect.topright
        self.pipes[1].rect.bottomleft = self.screen_rect.bottomright

        random_height = choice([25, 50, 75, 100, 125, 150])
        minimum_height = self.platform.rect.height + (0.1*self.screen_rect.height)
        new_height_bottom = minimum_height + random_height
        new_height_top = self.screen_rect.height - new_height_bottom - self.screen_rect.height//5

        self.pipes[1].rect = pygame.Rect(0, 0, 0.15*self.screen_rect.width, new_height_bottom)
        self.pipes[0].rect = pygame.Rect(0, 0, 0.15*self.screen_rect.width, new_height_top)

        self.pipes[1].rect.bottomleft = self.screen_rect.bottomright
        self.pipes[0].rect.topleft = self.screen_rect.topright

    def game_intro(self):
        self.game_title_label.show()
        self.player_entry.show()
        self.login_button.show()

    def game_play(self):
        self.game_title_label.show()
        self.bird.show()
        for pipe in self.pipes:              
            pipe.show()
        self.platform.show()
        self.play_button.show()


        if Statistic.game_active:
            self.bird.move()
            for pipe in self.pipes:
                if pipe.rect.right <= 0:
                    self.reset_pipes()               
                pipe.move()
            self.platform.move()


    def loop(self):
        while True:
            self.screen.fill(Conf.SCREEN_BG_COLOR)  

            if Statistic.intro:
                self.game_intro()
            else:
                self.game_play()
            
            self.set_fps()
            self.check_event()

if __name__ == "__main__":
    game = Game()
    game.loop()
