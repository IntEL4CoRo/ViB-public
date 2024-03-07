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


In the dynamic environment of a retail store, robots encounter unique challenges not found in household settings. 
They navigate through crowded spaces, manage a diverse array of products on shelves, and interact directly with customers to assist in locating items or answering queries. 
With the task of operating in large, complex layouts, these robots must also excel in inventory management, adapting to varying store layouts and policies, and coordinating with other robots to optimize efficiency. 
Safety, security, and the ability to handle delicate items with care are paramount, ensuring a seamless integration into the bustling retail ecosystem.

<param class="hidde-after-preview">
{{<action_forms data="ActionButtons">}}
<div class="hidde-after-preview">
  For Detailed information click 
  <a href="retail-lab">here!</a> 
</div>

<!--more-->


Interactive Actions and/or Examples
---

{{<action_forms data="ActionButtons">}}

Robots Collecting Data: Modelling Stores
---
<h4>Abstract</h4> Retail stores are a promising application domain for autonomous robotics.
Unlike other domains, such as households, the environments are more structured, products are designed to be easily recognizable, and items are consciously placed to facilitate their detection and manipulation. 
In this book chapter we exploit these properties and propose a mobile robot systems that can be deployed in drugstores and autonomously acquire a semantic digital twin model of the store. 
This facilitates autonomous robot fetch and place and shopping in a virtual replica of the store. 
The potential commercial impact is substantial because in the retail business stores are an information blackbox and being able to automate inventory on a regular basis could improve the knowledge of retailers about their business drastically.

In this video the Kuka KMR IIWA performs a stock tacking action in the retail lab.
<figure class="video_container">
  <iframe width="100%" height="360" src="https://www.youtube.com/embed/nwfbI4-rJUY?si=DoCZDlNF8PIjiXDb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
</figure>

#### Publication

- [Beetz M, Stelter S, Beßler D, Dhanabalachandran K, Neumann M, Mania P, Haidu A. Robots collecting data: Modelling stores. InRobotics for Intralogistics in Supermarkets and Retail Stores 2022 Sep 2 (pp. 41-64). Cham: Springer International Publishing.](https://link.springer.com/chapter/10.1007/978-3-031-06078-6_2)

Manipulation planning and control for shelf replenishment
---
<h4>Abstract</h4>
Manipulation planning and control are relevant building blocks of a robotic system and their tight integration is a key factor to improve robot autonomy and allows robots to perform manipulation tasks of increasing complexity, such as those needed in the in-store logistics domain. 
Supermarkets contain a large variety of objects to be placed on the shelf layers with specific constraints, doing this with a robot is a challenge and requires a high dexterity. 
However, an integration of reactive grasping control and motion planning can allow robots to perform such tasks even with grippers with limited dexterity. 
The main contribution of the letter is a novel method for planning manipulation tasks to be executed using a reactive control layer that provides more control modalities, i.e., slipping avoidance and controlled sliding.
Experiments with a new force/tactile sensor equipping the gripper of a mobile manipulator show that the approach allows the robot to successfully perform manipulation tasks unfeasible with a standard fixed grasp.

<figure class="video_container">
  <iframe width="100%" height="360" src="https://www.youtube.com/embed/7IaRh5FfA5E?si=Rtqxnc7-u5AbxWMy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
</figure>

#### Publication

- [Costanzo M, Stelter S, Natale C, Pirozzi S, Bartels G, Maldonado A, Beetz M. Manipulation planning and control for shelf replenishment. IEEE Robotics and Automation Letters. 2020 Jan 24;5(2):1595-601.](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8968346)


Robotic Clerks: Autonomous Shelf Refilling
---
<h4>Abstract</h4>
Nowadays, robots are used in the retail market mostly for warehousing, while they could be of great help in different in-store logistics processes as discussed in previous chapters. 
The present chapter deals with the shelf replenishment task; 
its execution by a robot requires overcoming of technological and methodological barriers in the handling of single products rather than the boxes containing them.
The challenges a robot has to face to replenish a supermarket shelf are all related to manipulation in narrow spaces of products with a large variety of size, shape, weight, and fragility. 
The solution proposed by REFILLS is based on a robotic system where perception is used at all hierarchical levels of the control architecture, from high-level task planning algorithms and motion planning to reactive control layers based on physics models, where tactile and visual perception are combined to achieve highly reliable manipulation of items. 
Experiments in an emulated supermarket shelf are carried out to demonstrate the effectiveness of the approach.

<figure class="video_container">
  <iframe width="100%" height="360" src="https://www.youtube.com/embed/7SX306sxEaI?si=eZ1R4ebIeHURaJT5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
</figure>

#### Publication

- [Cavallo A, Costanzo M, De Maria G, Natale C, Pirozzi S, Stelter S, Kazhoyan G, Koralewski S, Beetz M. Robotic Clerks: Autonomous Shelf Refilling. InRobotics for Intralogistics in Supermarkets and Retail Stores 2022 Sep 2 (pp. 137-170). Cham: Springer International Publishing.](https://link.springer.com/chapter/10.1007/978-3-031-06078-6_6)


Shelf replenishment in Simulation
---

<figure class="video_container">
  <iframe width="100%" height="360" src="https://www.youtube.com/embed/lDCk80t-uqM?si=Kjvv9YP5BImjRl19" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
</figure>
<!-- <figure class="video_container">
  <iframe width="100%" height="360" src="https://www.youtube.com/embed/N-MsJOz8ID0?si=qP-8I6k1Kk9Tjyq9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
</figure> -->

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
