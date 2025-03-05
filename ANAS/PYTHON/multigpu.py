import torch

# Check if multiple GPUs are available
print(f"Available GPUs: {torch.cuda.device_count()}")

if torch.cuda.device_count() > 1:
    model = torch.nn.DataParallel(model)  # Distribute model across GPUs
    model.to("cuda")  # Move to GPU
