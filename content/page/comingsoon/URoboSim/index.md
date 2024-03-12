---
title: "URoboSim Artificial World Laboratory"
date: 2010-11-03T10:35:35-05:00
subtitle: ""
tags: ["Research, Unreal Engine"]
dropCap: false
displayInMenu: false
displayInList: true
draft: false
---

URoboSim is an Unreal Engine 4/5 plugin that allows importing robots
to Unreal Engine using the URDF/SDF format and control them using various ROS interfaces.
Using URoboSim it is not only possible to execute real robot plans in
simulation, it is also possible to emulate the actions of a real robot in order
to build a continuous belief state of the world.

You can <a class="btn btn-success" target="_blank" href="https://github.com/urobosim/DemoProject"><b>try out an example project </b></a> here.


<div class="hidde-after-preview">
<a class="btn btn-primary" disabled target="_blank">Run Code</a>
<a class="btn btn-success" target="_blank" href="https://github.com/urobosim/URoboSim">Source Code</a>
</div>

<div class="hidde-after-preview">
  For Detailed information click
  <a class="btn btn-success" target="_blank" href="urobosim"><b>here!</b></a>
</div>

<!--more-->


Interactive Actions and/or Examples
---
<div>
<a class="btn btn-primary" disabled target="_blank">Run Code</a>
<a class="btn btn-success" target="_blank" href="https://github.com/urobosim/URoboSim">Source Code</a>
</div>

---
<figure class="video_container">
  <iframe width="100%" height="360" src="https://www.youtube.com/embed/C8b3CTWFE8o?si=6PKbxz4bf5HGkM5O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
</figure>

---
<figure class="video_container">
  <iframe width="100%" height="360" src="https://www.youtube.com/embed/feCqV_-n9Pw?si=cAzNClyLYloZwidg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
</figure>

Description
---

The goal of URoboSim is firstly, to allow users to simulate robots in a
photorealistic environment. Secondly, it allows users to emulate the action of a
real robot, thus creating a continuous belief state. For this, URoboSim makes it
possible to import robots to Unreal Engine from SDF files, which can be auto
generated from URDF. The model can that be controlled using ROS. The controllers
allow the robot to be moved in a kinetically (without physics) or dynamically (with physics).
The ROS interfaces such as joint state publishers or follow joint trajectory
actions that are required to be used with the CRAM architecture as well as
emulating the robots action are already included.


Publications
---
- [Patrick Mania, Franklin Kenghagho Kenfack, Michael Neumann and Michael Beetz, "Imagination-enabled Robot Perception", In International Conference on Intelligent Robots and Systems (IROS), 2021. Best Paper Award on Cognitive Robotics]()

- [Michael Neumann, Andrei Haidu and Michael Beetz, "URoboSim — a simulation-based predictive modelling engine forcognition-enabled robot manipulation", In 2nd Embodied AI Workshop (CVPR), 2021.](https://embodied-ai.org/papers/URoboSim.pdf)

- [Patrick Mania, Franklin Kenghagho Kenfack, Michael Neumann and Michael Beetz, "Imagination-enabled Robot Perception", 2020.](https://arxiv.org/abs/2011.11397)
