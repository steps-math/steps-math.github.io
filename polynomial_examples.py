import numpy as np
import matplotlib.pyplot as plt

# Set up the plotting style
plt.style.use('default')
fig, axes = plt.subplots(2, 2, figsize=(14, 12))
fig.suptitle('Polynomial Examples: Degrees 1, 2, 3, and 4', fontsize=16, fontweight='bold')

# Generate x values with wider range to show end behavior
x = np.linspace(-8, 8, 1000)

# Degree 1: Linear function f(x) = 3x - 2 (no turning points, clear end behavior)
y1 = 3*x - 2
axes[0, 0].plot(x, y1, 'b-', linewidth=3)
axes[0, 0].set_title('Degree 1: Linear', fontweight='bold', fontsize=12)
axes[0, 0].set_xlabel('x')
axes[0, 0].set_ylabel('y')
axes[0, 0].grid(True, alpha=0.3)
axes[0, 0].axhline(y=0, color='k', linestyle='-', alpha=0.3)
axes[0, 0].axvline(x=0, color='k', linestyle='-', alpha=0.3)
axes[0, 0].set_xlim(-8, 8)
axes[0, 0].set_ylim(-25, 25)
axes[0, 0].text(-6, 15, 'f(x) = 3x - 2', fontsize=12, fontweight='bold', 
                bbox=dict(boxstyle="round,pad=0.3", facecolor='lightblue', alpha=0.8))

# Degree 2: Quadratic function f(x) = x² - 4 (1 turning point, clear end behavior)
y2 = x**2 - 4
axes[0, 1].plot(x, y2, 'r-', linewidth=3)
# Mark the turning point
tp_x = 0
tp_y = tp_x**2 - 4
axes[0, 1].plot(tp_x, tp_y, 'ro', markersize=10, markeredgecolor='black', markeredgewidth=2)
axes[0, 1].set_title('Degree 2: Quadratic', fontweight='bold', fontsize=12)
axes[0, 1].set_xlabel('x')
axes[0, 1].set_ylabel('y')
axes[0, 1].grid(True, alpha=0.3)
axes[0, 1].axhline(y=0, color='k', linestyle='-', alpha=0.3)
axes[0, 1].axvline(x=0, color='k', linestyle='-', alpha=0.3)
axes[0, 1].set_xlim(-8, 8)
axes[0, 1].set_ylim(-10, 60)
axes[0, 1].text(-6, 40, 'f(x) = x² - 4', fontsize=12, fontweight='bold', 
                bbox=dict(boxstyle="round,pad=0.3", facecolor='lightcoral', alpha=0.8))

# Degree 3: Cubic function f(x) = x³ - 3x (2 turning points, clear end behavior)
y3 = x**3 - 3*x
axes[1, 0].plot(x, y3, 'g-', linewidth=3)
# Mark the turning points
tp1_x, tp2_x = -1, 1
tp1_y = tp1_x**3 - 3*tp1_x
tp2_y = tp2_x**3 - 3*tp2_x
axes[1, 0].plot(tp1_x, tp1_y, 'go', markersize=10, markeredgecolor='black', markeredgewidth=2)
axes[1, 0].plot(tp2_x, tp2_y, 'go', markersize=10, markeredgecolor='black', markeredgewidth=2)
axes[1, 0].set_title('Degree 3: Cubic', fontweight='bold', fontsize=12)
axes[1, 0].set_xlabel('x')
axes[1, 0].set_ylabel('y')
axes[1, 0].grid(True, alpha=0.3)
axes[1, 0].axhline(y=0, color='k', linestyle='-', alpha=0.3)
axes[1, 0].axvline(x=0, color='k', linestyle='-', alpha=0.3)
axes[1, 0].set_xlim(-8, 8)
axes[1, 0].set_ylim(-100, 100)
axes[1, 0].text(-6, 60, 'f(x) = x³ - 3x', fontsize=12, fontweight='bold', 
                bbox=dict(boxstyle="round,pad=0.3", facecolor='lightgreen', alpha=0.8))

# Degree 4: Quartic function f(x) = x⁴ - 6x² + 4 (3 turning points, clear end behavior)
y4 = x**4 - 6*x**2 + 4
axes[1, 1].plot(x, y4, 'm-', linewidth=3)
# Mark the turning points
tp1_x, tp2_x, tp3_x = -1.732, 0, 1.732  # sqrt(3), 0, sqrt(3)
tp1_y = tp1_x**4 - 6*tp1_x**2 + 4
tp2_y = tp2_x**4 - 6*tp2_x**2 + 4
tp3_y = tp3_x**4 - 6*tp3_x**2 + 4
axes[1, 1].plot(tp1_x, tp1_y, 'mo', markersize=10, markeredgecolor='black', markeredgewidth=2)
axes[1, 1].plot(tp2_x, tp2_y, 'mo', markersize=10, markeredgecolor='black', markeredgewidth=2)
axes[1, 1].plot(tp3_x, tp3_y, 'mo', markersize=10, markeredgecolor='black', markeredgewidth=2)
axes[1, 1].set_title('Degree 4: Quartic', fontweight='bold', fontsize=12)
axes[1, 1].set_xlabel('x')
axes[1, 1].set_ylabel('y')
axes[1, 1].grid(True, alpha=0.3)
axes[1, 1].axhline(y=0, color='k', linestyle='-', alpha=0.3)
axes[1, 1].axvline(x=0, color='k', linestyle='-', alpha=0.3)
axes[1, 1].set_xlim(-8, 8)
axes[1, 1].set_ylim(-10, 200)
axes[1, 1].text(-6, 120, 'f(x) = x⁴ - 6x² + 4', fontsize=12, fontweight='bold', 
                bbox=dict(boxstyle="round,pad=0.3", facecolor='plum', alpha=0.8))

# Adjust layout and display
plt.tight_layout()
plt.show()

# Print the polynomial functions
print("Polynomial Examples:")
print("Degree 1: f(x) = 3x - 2")
print("Degree 2: f(x) = x² - 4")
print("Degree 3: f(x) = x³ - 3x")
print("Degree 4: f(x) = x⁴ - 6x² + 4") 