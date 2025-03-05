import pygame
from OpenGL.GL import *
import torch

print(f"Using OpenGL Version: {glGetString(GL_VERSION)}")
print(f"GPU Available for Compute: {torch.cuda.is_available()}")
print(f"GPU Name: {torch.cuda.get_device_name(0) if torch.cuda.is_available() else 'No GPU found'}")
