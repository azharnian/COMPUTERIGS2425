import pygame
import os

from config import Conf

class PlayButton:

    def __init__(self, Game):
        self.screen = Game.screen
        self.screen_rect = Game.screen_rect

        image_path = os.path.join(Conf.BASE_DIR, "assets", "play_button.png")
        self.image = pygame.image.load(image_path)
        self.rect = self.image.get_rect()

        self.image = pygame.transform.scale(self.image, (self.rect.width//10, self.rect.height//10))
        self.rect = self.image.get_rect()
        self.rect.center = self.screen_rect.center
        self.rect.y += 100

    def show(self):
        self.screen.blit(self.image, self.rect)
