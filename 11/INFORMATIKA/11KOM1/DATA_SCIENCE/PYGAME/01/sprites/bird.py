import pygame
import os

from conf import Conf

class Bird():

    def __init__(self, Game):
        self.screen = Game.screen
        self.screen_rect = Game.screen_rect
        
        image_path = os.path.join(Conf.BASE_DIR, "assets", "bird.png")
        self.image = pygame.image.load(image_path)
        self.rect = self.image.get_rect()
        self.fly = False
        self.pass_pipe = False

        self.rect.center = self.screen_rect.center

    def move(self):
        if self.fly:
            self.rect.y -= Conf.BIRD_FLY_SPEED
        else:
            self.rect.y += Conf.GRAVITY

    def show(self):
        self.screen.blit(self.image, self.rect)