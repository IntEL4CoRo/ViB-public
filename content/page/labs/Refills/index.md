---
title: "Retail Lab"
date: 2023-12-01T10:35:35-05:00
subtitle: ""
tags: ["Research"]
dropCap: false
displayInMenu: false
displayInList: true
draft: false
resources: 
- name: ActionButtons
  src: "buttons.json"
---
![](https://iris.informatik.uni-bremen.de/textbook/content/picking_up_actions.png)


<h1> The Lab</h1>

In the dynamic environment of a retail store, robots encounter unique challenges not found in household settings. They navigate through crowded spaces, manage a diverse array of products on shelves, and interact directly with customers to assist in locating items or answering queries. With the task of operating in large, complex layouts, these robots must also excel in inventory management, adapting to varying store layouts and policies, and coordinating with other robots to optimize efficiency. Safety, security, and the ability to handle delicate items with care are paramount, ensuring a seamless integration into the bustling retail ecosystem.

<param class="hidde-after-preview">
{{<action_forms data="ActionButtons">}}

<!--more-->


![](https://iris.informatik.uni-bremen.de/textbook/content/picking_up_actions.png)

<!-- ***"The EASE household challenge is subject of the IEEE spectrum article 'It's (Still) Really Hard for Robots to Autonomously Do Household Chores'"*** by Evan Ackerman (IEEE Spectrum, 17.06.2021) -->


Interactive Actions and/or Examples
---

{{<action_forms data="ActionButtons">}}


Manipulation planning and control for shelf replenishment
---
The paper "Manipulation Planning and Control for Shelf Replenishment" introduces a novel method integrating manipulation planning and reactive control for robotic shelf replenishment tasks. It addresses the challenges of manipulating a wide variety of objects in supermarkets with specific constraints, emphasizing the importance of dexterous manipulation without the need for high degrees of freedom in robotic grippers. By leveraging a new force/tactile sensor-equipped gripper and a control strategy that alternates between slipping avoidance and controlled sliding, the proposed approach enables robots to perform tasks previously unattainable with standard fixed grasps. This method significantly enhances a robot's autonomy in executing complex manipulation tasks, particularly in the constrained and cluttered environment of retail shelves.

<figure class="video_container">
  <iframe width="100%" height="360" src="https://www.youtube.com/embed/PAk1sXif25Y?si=K2Ys3XvBMhEWzdyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
</figure>

#### Publication

- [Costanzo M, Stelter S, Natale C, Pirozzi S, Bartels G, Maldonado A, Beetz M. Manipulation planning and control for shelf replenishment. IEEE Robotics and Automation Letters. 2020 Jan 24;5(2):1595-601.](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8968346)

Shelf replenishment in Simulation
---
The retail environments are also available in simulation.
Refilling tasks have been executed with multiple robots in both of them.

<figure class="video_container">
  <iframe width="100%" height="360" src="https://www.youtube.com/embed/lDCk80t-uqM?si=Kjvv9YP5BImjRl19" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
</figure>
<figure class="video_container">
  <iframe width="100%" height="360" src="https://www.youtube.com/embed/N-MsJOz8ID0?si=qP-8I6k1Kk9Tjyq9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
</figure>


Stock Tacking
---
Here is a video of the Kuka KMR performing a stock tacking action in the retail lab.
<figure class="video_container">
  <iframe width="100%" height="360" src="https://www.youtube.com/embed/nwfbI4-rJUY?si=DoCZDlNF8PIjiXDb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
</figure>






Software Components
---

- ### [CRAM <img class="sc-image" src="https://ai.uni-bremen.de/_media/team/cramlogocropped.png" height=50>](https://cram-system.org/)
  is a software toolbox for the implementation of autonomous robots.\
  [<img class="sc-image" src="https://iris.informatik.uni-bremen.de/images/github.svg" height=10> source code](https://github.com/cram2/cram)
  
- ### [KnowRob <img class="sc-image" src="https://ai.uni-bremen.de/_media/projects/knowrob.png" height=60>](https://www.knowrob.org/)
  is a knowledge processing system for robots.\
  [<img class="sc-image" src="https://iris.informatik.uni-bremen.de/images/github.svg" height=10> source code](https://github.com/knowrob/knowrob)

- ### [OpenEASE <img class="sc-image" src="https://ai.uni-bremen.de/_media/team/oe-logo2.png" height=50>](http://www.open-ease.org/)
  is a web-based knowledge service providing robot and human activity data.\
  [<img class="sc-image" src="https://iris.informatik.uni-bremen.de/images/github.svg" height=10> source code](https://github.com/ease-crc/openease)

- ### [GISKARD <img class="sc-image" src="https://ai.uni-bremen.de/_media/team/giskard_logo_tmp.png" height=20>](https://github.com/SemRoCo/giskardpy)
  is a framework for constraint- and optimization-based robot motion and planning control.\
  [<img class="sc-image" src="https://iris.informatik.uni-bremen.de/images/github.svg" height=10> source code](https://github.com/SemRoCo/giskardpy)

- ### [ROBOKUDO <img class="sc-image" src="https://ai.uni-bremen.de/_media/team/rk_logo_v3-300px.png" height=25>](https://robokudo.ai.uni-bremen.de/)
  is a perception framework targeted for robot manipulation tasks.\
  [<img class="sc-image" src="https://iris.informatik.uni-bremen.de/images/github.svg" height=10> source code](https://gitlab.informatik.uni-bremen.de/robokudo/robokudo)

- ### [PyCRAM <img class="sc-image" src="https://pycram.readthedocs.io/en/latest/_images/pycram_logo.png" height=50>](https://pycram.readthedocs.io/en/latest/index.html)
  is the Python 3 re-implementation of [CRAM](https://cram-system.org/). [PyCRAM](https://pycram.readthedocs.io/en/latest/index.html) is a toolbox for designing, implementing and deploying software on autonomous robots.\
  [<img class="sc-image" src="https://iris.informatik.uni-bremen.de/images/github.svg" height=10> source code](https://github.com/cram2/pycram)


Courses and/or Tutorial
---

- ### Courses:

  + ##### [Integrated Intelligent Systems](https://ai.uni-bremen.de/teaching/le-iis-ws23)
    This lecture covers contemporary techniques of AI in cognitive robotics.

  + ##### [Robot Programming with ROS](https://ai.uni-bremen.de/teaching/cs-ros-ws23)
    Getting into the Robot Operating System ROS is a steptone for future roboticists.


- ### Tutorials:

  + ##### [CRAM Plan Executive](https://cram-system.org/tutorials)
    Check out the online hands-on tutorials on the CRAM plan executive.

