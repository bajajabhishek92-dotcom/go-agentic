# Edge AI: Few-Command Model Bring-Up for Physical Agents

Cabin monitoring, robot perception, and line coordination need models next to sensors. These physical-AI applications must perceive, reason, and act within tight memory, power, and latency budgets. The historical tax was export/optimize/serve folklore that differed between lab PyTorch and embedded targets. NVIDIA’s TensorRT Edge-LLM path compresses that folklore into a **short, repeatable bring-up**—prototype on DGX Spark–class boxes, deploy with the same optimized runtime family on the device.

## Develop on Spark, deploy with TensorRT Edge-LLM

DGX Spark (including a 64GB configuration) lets embedded teams prototype, fine-tune, and test agents locally. **TensorRT Edge-LLM** is a lightweight C++ inference runtime aimed at embedded workloads, aligning development on Spark with deployment on platforms such as Jetson Thor, DRIVE AGX Thor, and IGX Thor. The `trtedge` CLI downloads a chosen model (for example Nemotron-3.5 Lightning NVFP4), builds TensorRT engines, supports terminal prompts and API serving for app prototyping, and can enable speculative decoding (**DSpark**) for faster generation.

Prerequisites are ordinary but strict: matching CUDA/TensorRT versions (e.g., CUDA 13, TensorRT ≥10.16.1.11 within 10.x) and Python 3.10–3.12. Install into a venv with system site packages so system TensorRT bindings remain visible; verify with a small import that loads the Edge-LLM runtime. First launch downloads the model (~21GB for the Lightning example) and builds engines into `~/.cache/tensorrt-edgellm` by default—budget disk. Later launches reuse matching cached engines. The teachable win is a **reproducible path from weights to a served local API**—not a unique model architecture. Version skew silently recreates the old “works on my laptop” tax.

## Local C++ apps beyond the CLI

Companion **Do Inference Now (DIN) Deploy** samples show how to move from Hugging Face checkpoints to native C++ applications: Python exporters produce ONNX artifacts; C++ CLIs built on ONNX Runtime (with TensorRT RTX execution provider) run shared inference code across Windows and Linux (including Arm64 presets). Vendor-specific CUDA appears only in optional accelerated paths. Samples span ASR (Whisper offline; Parakeet TDT and Nemotron ASR streaming), SAM 2.1 interactive masking, and FLUX.2 image generation with Vulkan/DirectX graphics interop and PTQ via Model Optimizer—quantized ONNX as a drop-in when interfaces stay stable. DGX Spark measurements in the samples show large GPU-vs-CPU speedups (e.g., tens to hundreds of × realtime for selected ASR workloads; SAM 2.1 ~38 FPS GPU vs ~0.5 FPS CPU). The teaching link: Edge-LLM CLI for LLM agents; DIN Deploy for broader local multimodal app patterns on the same class of machines.

## Edge still needs agent discipline

A smaller model actuating motors or cameras still needs tool allow-lists, offline fail-safes, and evals on the target power/thermal envelope. Latency and memory on-device are the product constraints; cloud parity is optional. Pair with smart-city edge literacy and robot input-integrity teaching: physical agents inherit both systems and safety constraints. Speculative decoding is a product lever under power limits—measure tokens/sec *and* watts on the target board, not only on the prototype box.

## How to teach edge bring-up

- Measure tokens/sec and watts on the **target** board, not only on the prototype box.
- Treat engine build as a release artifact with pinned versions and cache hygiene.
- Keep policy hygiene (sandboxes, confirmations) even when the model is small.
- Prefer few-command CLIs that encode tribal knowledge over wiki sprawl.
- Separate ONNX export from C++ deployment logic so conversion and app code evolve independently.

## Takeaways

- Edge AI literacy is the bring-up path: one optimized runtime from prototype to device.
- Speculative decoding and engine builds are product levers under power limits.
- Agent policy still applies at the edge—small models can still misuse tools.
- Version-matched stacks beat heroic one-off exports.
- CLI bring-up (trtedge) and native C++ samples (DIN Deploy / TensorRT RTX) are complementary layers of the same local-AI story.

## Sources

- [Run AI Models for Edge Application Development with Just a Few Commands](https://developer.nvidia.com/blog/run-ai-models-for-edge-application-development-with-just-a-few-commands/)
- [Build Local AI Apps with C++ and NVIDIA TensorRT RTX Samples](https://developer.nvidia.com/blog/build-local-ai-apps-with-c-and-nvidia-tensorrt-rtx-samples/)
