import pygame
import sys

pygame.init()
screen = pygame.display.set_mode([500, 500])
screen_rect = screen.get_rect()

platform = pygame.image.load("assets/land.png")
platform_rect = platform.get_rect()

#resize platform :  scale
platform = pygame.transform.scale(platform, (2*screen_rect.width, platform_rect.height))
platform_rect = platform.get_rect()
platform_rect.bottomleft = screen_rect.bottomleft

bird = pygame.image.load("assets/bird.png")
bird_rect = bird.get_rect()
bird_rect.center = screen_rect.center

pipe_top = pygame.Rect(0, 0, 0.15*screen_rect.width, 0.4*screen_rect.height)
pipe_top.topright = screen_rect.topright
pipe_head_top = pygame.Rect(0, 0, 1.2*pipe_top.width, 0.15*pipe_top.height)
pipe_head_top.midbottom = pipe_top.midbottom

pipe_bottom = pygame.Rect(0, 0, 0.15*screen_rect.width, 0.4*screen_rect.height)
pipe_head_bottom = pygame.Rect(0, 0, 1.2*pipe_bottom.width, 0.15*pipe_bottom.height)
pipe_bottom.bottomright = screen_rect.bottomright
pipe_head_bottom.midtop = pipe_bottom.midtop

def setup_screen():
    screen.fill((107, 52, 235))

def show_bird():
    screen.blit(bird, bird_rect)

bird_fly = False
def move_bird():
    if bird_fly:
        bird_rect.y -= 3
    else:
        bird_rect.y += 1

def draw_pipe():
    pygame.draw.rect(screen, (0, 200, 0), pipe_top)
    pygame.draw.rect(screen, (0, 200, 0), pipe_head_top)
    pygame.draw.rect(screen, (0, 200, 0), pipe_bottom)
    pygame.draw.rect(screen, (0, 200, 0), pipe_head_bottom)

def show_platform():
    screen.blit(platform, platform_rect)

def move_platform():
    platform_rect.x -= 5
    if platform_rect.centerx <= 0:
        platform_rect.bottomleft = screen_rect.bottomleft

def set_fps():
    pygame.time.Clock().tick(25)
    pygame.display.flip()

def check_event():
    global bird_fly

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            sys.exit()
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_SPACE:
                bird_fly = True
        elif event.type == pygame.KEYUP:
            if event.key == pygame.K_SPACE:
                bird_fly = False


while True:
    setup_screen()

    show_bird()
    move_bird()

    draw_pipe()

    show_platform()
    move_platform()

    set_fps()
    check_event()