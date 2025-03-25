---
title: "Geometric Control"
date: 2025-02-01T00:00:00-00:00
subtitle: ""
tags: ["Fame", "Innovation"]
dropCap: false
displayInMenu: false
displayInList: true
draft: false
---

Differential geometry plays a crucial role in robotic manipulation by enabling real-time, energy-efficient movement while handling complex, non-linear tasks. It enables robots to navigate static and dynamic obstacles by representing motion in a general manifold space, where obstacles appear as voids. Unlike traditional Euclidean-based control, geometric approaches respect the natural curvature of motion, making them essential for tasks like in-hand object manipulation or fluid handling. By leveraging non-linear, geometry-aware optimization (e.g., Riemannian manifolds), robots can execute movements more precisely and efficiently, minimizing energy costs while ensuring optimal timing.

In human-robot interaction, smooth and adaptive motion is expected, often achieved through hand-coded interpolation of control inputs. However, a geometry-aware approach enables robots to natively compute non-linear movements, improving responsiveness and natural motion flow. For instance, Riemannian gradient descent incorporates lift and pull-back operations, preserving the intrinsic non-linearity of joint velocities rather than assuming linear variations over time. This approach enhances motion planning for multi-fingered grasping, obstacle avoidance, and articulated tool handling, making robotic systems more intuitive, efficient, and adaptable.

## Connection with FAME

### Main Goal

- Learnt from videos, aside from keyframe articulate movements, objects’ parameterizable geometry & physics/dynamics features are incorporated into the MPC problem of robotic hand object manipulation as constraints/cost-elements.


### Key Features

- Ensures real-time, energy-efficient movement for manipulation tasks.
- Enables static & dynamic obstacle avoidance for both mobile and manipulator robots.
- Translates motion into a general manifold space, treating obstacles as voids.
- Implements non-linear, geometry-aware force control (e.g., multi-fingered dexterous manipulation) in task space, in tandem with predictive sampling/optimization-based MPC.


### Challenges


- Both sampling and optimization-based MPC have their own limitations regarding robustness, intensive computation. Implementation typically requires careful design of parallelizing rollout tasks and powerful processors.
- Highly varied physical states and properties of objects, especially soft & deformable ones, during manipulation.
  - Infer most relevant features to be used in the control reward design.
- Object meshes, which are required for surface curvature analysis, are not always available.


### Solutions

- Implement reactive control using [Dynamic Fabrics](https://arxiv.org/abs/2205.08454) with flexible non-linear collision avoidance.
- Utilize MuJoCo-MPC as the baseline for the framework developed directly in C/C++, taking advantage of the highly-performant & physics-accurate engine API.
- Incorporate Discrete Differential Geometry (DDG) in object geometric analysis to help with providing more object-centric characteristic info to design more effective cost function for MPC task by coupling object geometric features + manipulation tasks.


## Example Videos

- Object target tracking while avoiding dynamic obstacles
  <figure class="video_container">
    <video width="100%" height="500" loop muted controls>
      <source src="vid/fab_dynamic_particle.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </figure>
  </br>

- Panda robot following dynamic green goal, avoiding dynamic red obstacles
  <figure class="video_container">
    <video width="100%" height="500" loop muted controls>
      <source src="vid/fab_panda_follow_dynamic_goal_obst.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </figure>


## Navigate to FAME Parts

<div>
  For Detailed information on the differents parts of FAME click:<br>
  <div class="btn-group" style="width:100%">
    <a class="btn btn-primary" style="width:100%;" target="_blank" href="../"><b>FAME Main Page</b></a>
  </div>
  <div class="btn-group" style="width:100%">
    <a class="btn btn-success" style="width:33.3%;" target="_blank" href="../perception"><b>Object Perception</b></a>
    <a class="btn btn-success" style="width:33.3%;" target="_blank" href="../scene_understanding"><b>Scene Understanding</b></a>
    <a class="btn btn-success" style="width:33.3%;" target="_blank" href="../probabilistic_learning"><b>Probabilistic Learning</b></a>
  </div>
  <div class="btn-group" style="width:100%">
    <a class="btn btn-success" style="width:33.3%;" target="_blank" href="../motion_control"><b>Motion Control</b></a>
    <a class="btn btn-success" style="width:33.3%;" target="_blank" href="../geometric_learning"><b>Geometric Deep Learning</b></a>
    <a class="btn btn-success" style="width:33.3%;" target="_blank" href="../enviroment"><b>Environment Generation</b></a>
  </div>
</div>
<br>


## Authors

{{< author name="Duc Than" img="../main/img/duc.jpg" mail="than@uni-bremen.de" profile="https://ai.uni-bremen.de/team/duc_than" >}}
{{< author name="Alessandro Santonicola" img="../main/img/santonicola.jpg" mail="ale_san@uni-bremen.de" profile="https://ai.uni-bremen.de/team/alessandro_santonicola" >}} 

