---
title: "RoboKudo Perception Executive Laboratory"
date: 2013-10-03T10:35:35-05:00
subtitle: ""
tags: ["Subsystem"]
dropCap: false
displayInMenu: false
displayInList: true
draft: false
---

Our Perception Executive Laboratory is centered around RoboKudo, a cutting-edge
cognitive perception framework designed specifically for robotic manipulation tasks.
Employing a multi-expert approach, RoboKudo excels in processing unstructured
sensor data, annotating it through the expertise of various computer vision
algorithms. This open-source framework enables the flexible creation and execution
of task-specific perception processes by integrating multiple vision methods. The
technical backbone of RoboKudo is the Perception Pipeline Tree (PPT), a novel data
structure that enhances Behavior Trees with a focus on robot perception. Developed
to function within a robot’s perception-action loop, RoboKudo interprets perception
task queries—such as locating a milk box in a fridge—and crafts specialized
perception processes in the form of PPTs, integrating appropriate computer vision
methods to accomplish the tasks at hand.
<div class="hidde-after-preview">
<a class="btn btn-primary" target="_blank" href="https://binder.intel4coro.de/v2/git/https%3A%2F%2Fgitlab.informatik.uni-bremen.de%2Fyanxiang%2Frobokudo.git/binderhub">Run Code</a>
<a class="btn btn-success" target="_blank" href="https://gitlab.informatik.uni-bremen.de/robokudo/robokudo">Source Code</a>
</div>

<div class="hidde-after-preview">
  For Detailed information click
  <a class="btn btn-success" target="_blank" href="robokudo-perception-executive-laboratory"><b>here!</b></a>
</div>

<!--more-->

<!-- <div class="main-well-flex-container" style="margin:20px;align-items: center;">

  <div style="flex:30%;">
      <img src="profile_picture.png" style="clip-path: circle(35%);">
  </div>

  <div style="flex:70%;">
    <h3>Replace with Name</h3>
    Tel:     +49 XXXXXXXXXX <br>
    Fax:     +49 XXXXXXXXXX <br>
    Mail:    <a href="mailto:XXXXXXX@cs.uni-bremen.de">XXXXXX@cs.uni-bremen.de</a> <br>
    <a style="color:red" href="https://ai.uni-bremen.de/team/XXXXXXXXX">
      <span style="font-size: 15px;">Profile</span>
    </a>
  </div>

</div> -->

Description
---
RoboKudo, an open-source perception framework for mobile manipulation systems, allows to flexibly generate and execute task-specific perception processes that combine multiple vision methods. The framework is based on a novel concept that we call Unstructured Information Management (UIM) on Behavior Trees (BTs), short UIMoBT, which is a mechanism to analyze unstructured data with non-linear process flows. The technical realization is done with a datastructure called Perception Pipeline Tree (PPT), which is an extension of Behavior Trees with a focus on robot perception.
RoboKudo is developed to be included in a perception-action loop of a robot system. The system can state perception tasks to RoboKudo via a query-answering interface. The interface translates a perception task query such as “find a milk box in the fridge” into a specialized perception process, represented as a PPT, which contains a combination of suitable computer vision methods to fulfill the given task.

Overview video
---

<figure class="video_container">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/8jvDl-P2ba0?si=AGOn8iCWjDShdMeJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
</figure>

Our overview video presents the key ideas of the RoboKudo framework and highlights demonstrations and experiments implemented in RoboKudo. The video contains sound for narration.

Interactive Actions and/or Examples
---

<div>
<a class="btn btn-primary" target="_blank" href="https://binder.intel4coro.de/v2/git/https%3A%2F%2Fgitlab.informatik.uni-bremen.de%2Fyanxiang%2Frobokudo.git/binderhub">Run Code</a>
<a class="btn btn-success" target="_blank" href="https://gitlab.informatik.uni-bremen.de/robokudo/robokudo">Source Code</a>
<a class="btn btn-success" target="_blank" href="https://robokudo.ai.uni-bremen.de/">Website</a>
</div>

Publications
---

- [P. Mania; S. Stelter; G. Kazhoyan; M. Beetz, "An Open and Flexible Robot Perception Framework for Mobile Manipulation Tasks" 2024 IEEE International Conference on Robotics and Automation(ICRA). IEEE, 2024. Accepted for publication.](https://robokudo.ai.uni-bremen.de/)
- [P. Mania; F. K. Kenfack; M. Neumann; M. Beetz, "Imagination-enabled robot perception." 2021 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS). IEEE, 2021.](https://ieeexplore.ieee.org/abstract/document/9636359)

