---
title: "Hello World"
date: 2024-01-01
tags: ["blog", "tech"]
description: "This is my first blog post using Astro and Markdown"
image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800"
images: [
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
  "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800"
]
---

# Hello World

これは最初のブログ記事です。Astroとマークダウンを使って書いています。

## マークダウンのテスト

数式も書けます：

$$
\theta = (X^T X)^{-1} X^T y
$$

コードブロックも書けます：

```python
import numpy as np

def linear_regression(X, y):
    # 正規方程式を使用した線形回帰
    X = np.column_stack([np.ones(len(X)), X])  # バイアス項を追加
    theta = np.linalg.inv(X.T @ X) @ X.T @ y
    return theta

# サンプルデータ
X = np.array([[1], [2], [3], [4]])
y = np.array([2, 4, 5, 4])

# パラメータの計算
theta = linear_regression(X, y)
print(f"切片: {theta[0]:.2f}")
print(f"傾き: {theta[1]:.2f}")
```