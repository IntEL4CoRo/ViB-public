---
title: "RoboKudo"
date: 2023-03-02T14:33:42-04:00
subtitle: ""
tags: ["Subsystem"]
dropCap: false
displayInMenu: false
displayInList: true
draft: false
resources:
- name: featuredImage
  src: "rk_logo_v3-1000px.png"
---

RoboKudo is a perception framework targeted for robot manipulation tasks. It is a multi-expert approach to analyze unstructured sensor data and annotate particular regions of the data given the expertise of specific computer vision algorithms.

<div class="hidde-after-preview">
<a class="btn btn-primary" target="_blank" href="https://binder.intel4coro.de/v2/git/https%3A%2F%2Fgitlab.informatik.uni-bremen.de%2Fyanxiang%2Frobokudo.git/binderhub">Run Code</a>
<a class="btn btn-success" target="_blank" href="https://gitlab.informatik.uni-bremen.de/robokudo/robokudo">Source Code</a>
</div>

<!--more-->


Interactive Actions and/or Examples
---

<div>
<a class="btn btn-primary" target="_blank" href="https://binder.intel4coro.de/v2/git/https%3A%2F%2Fgitlab.informatik.uni-bremen.de%2Fyanxiang%2Frobokudo.git/binderhub">Run Code</a>
<a class="btn btn-success" target="_blank" href="https://gitlab.informatik.uni-bremen.de/robokudo/robokudo">Source Code</a>
</div>


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


Publications
---

- [P. Mania; F. K. Kenfack; M. Neumann; M. Beetz, "Imagination-enabled robot perception." 2021 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS). IEEE, 2021.](https://ieeexplore.ieee.org/abstract/document/9636359)
- [P. Mania; S. Stelter; G. Kazhoyan; M. Beetz, "An Open and Flexible Robot Perception Framework for Mobile Manipulation Tasks" 2024 IEEE International Conference on Robotics and Automation(ICRA). IEEE, 2024. Submitted for review.](https://robokudo.ai.uni-bremen.de/)

