---
layout: default
---

<!-- HTML and CSS code goes here -->

<div style="display: flex; justify-content: center; align-items: center; height: 100vh; perspective: 1000px;">
  <div class="logo" style="font-family: 'Orbitron', sans-serif; font-size: 72px; color: red; animation: spin 5s infinite linear; transform-style: preserve-3d;">COOPER</div>
</div>

<style>
  @keyframes spin {
    from {
      transform: rotateY(0deg) rotateZ(0deg); /* Initial rotation */
    }
    to {
      transform: rotateY(360deg) rotateZ(360deg); /* Final rotation */
    }
  }
</style>
