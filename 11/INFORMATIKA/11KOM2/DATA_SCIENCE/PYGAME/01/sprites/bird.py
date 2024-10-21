import pygame
import os

from config import Conf

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
        self.angle = 0

    def move(self):
        if self.fly:
            self.rect.y -= Conf.BIRD_FLY_SPEED
            self.angle = max(30, self.angle-1)
        else:
            self.rect.y += Conf.GRAVITY
            self.angle = min(-30, self.angle+1)

    def show(self):
        rotated_image = pygame.transform.rotate(self.image, self.angle)
        rotated_rect = rotated_image.get_rect(center = self.rect.center)
        self.screen.blit(rotated_image, rotated_rect.topleft)