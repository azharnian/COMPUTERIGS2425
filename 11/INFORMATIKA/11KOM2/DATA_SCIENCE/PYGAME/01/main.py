import pygame
import sys

from config import Conf
from sprites.bird import Bird
from sprites.platform import Platform
from sprites.pipe import Pipe

class Game:

    pygame.init()
    screen = pygame.display.set_mode(Conf.SCREEN_SIZE)
    screen_rect = screen.get_rect()

    def __init__(self):
        self.bird = Bird(self)
        self.platform = Platform(self)
        self.pipes = [ Pipe(self, position) for position in ["top", "bottom"] ]

    def set_fps(self):
        pygame.time.Clock().tick(Conf.FPS)
        pygame.display.flip()
    
    def check_event(self):
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                sys.exit()

    def loop(self):
        while True:
            self.screen.fill(Conf.SCREEN_BG_COLOR) 

            self.bird.show()
            self.bird.move() 

            for pipe in self.pipes:              
                pipe.show()
                pipe.move()

            self.platform.show()
            self.platform.move()
        
            self.set_fps()
            self.check_event()

if __name__ == "__main__":
    game = Game()
    game.loop()