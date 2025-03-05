import torch

if torch.backends.mps.is_available():
    print("MPS (Apple GPU) is available!")
else:
    print("MPS not available. Falling back to CPU.")
