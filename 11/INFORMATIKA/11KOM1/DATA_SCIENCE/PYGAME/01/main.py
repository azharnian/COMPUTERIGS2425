import pygame
import sys
from random import choice

from conf import Conf
from sprites.platform import Platform
from sprites.bird import Bird
from sprites.pipe import Pipe

class Game:

    pygame.init()
    screen = pygame.display.set_mode(Conf.SCREEN_SIZE)
    screen_rect = screen.get_rect()

    def __init__(self):
        self.platform = Platform(self)
        self.bird = Bird(self)
        self.pipes = [ Pipe(self, position) for position in ["top", "bottom"] ]

    def check_event(self):
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                sys.exit()

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

    def loop(self):
        while True:
            self.screen.fill(Conf.SCREEN_BG_COLOR)  

            self.bird.show()
            self.bird.move()

            for pipe in self.pipes:
                if pipe.rect.right <= 0:
                    self.reset_pipes()               
                pipe.show()
                pipe.move()

            self.platform.show()  
            self.platform.move()
        
            self.set_fps()
            self.check_event()

game = Game()
if __name__ == "__main__":
    game.loop()
