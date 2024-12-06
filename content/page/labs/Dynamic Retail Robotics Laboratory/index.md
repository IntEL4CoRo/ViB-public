---
title: "Dynamic Retail Robotics Laboratory"
date: 2010-12-01T10:35:35-05:00
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


This laboratory focuses on addressing the complex challenges robots face within
retail settings. Robots in this lab can autonomously deploy themselves in retail stores
and constantly adapt to changing retail environments, including shelf layouts and
product placements. They are trained to manage inventory, guide customers, and
integrate real-time product information from various sources into actionable
knowledge. Our goal is to develop robots that not only support shopping and
inventory tasks but also seamlessly adjust to new products and store layouts,
enhancing customer service and operational efficiency in the retail ecosystem.

In this laboratory, you are provided with two versatile robot action plans tailored for
retail environments. The first plan focuses on creating semantic digital twins of shelf
systems in retail stores, while the second is designed for restocking shelves. You have
the flexibility to choose the specific task, robot, and environment. Once selected, you
can execute the action plan through a software container, streamlining the process of
implementing these robotic solutions in real-world retail settings.

<param class="hidde-after-preview">
{{<action_forms data="ActionButtons">}}

<div class="hidde-after-preview">
  For Detailed information click
  <a class="btn btn-success" target="_blank" href="dynamic-retail-robotics-laboratory"><b>here!</b></a>
</div>

<!--more-->

<div class="main-well-flex-container" style="margin:20px;align-items: center;">

  <div style="flex:30%;">
      <img src="MichaelaKümpel.png" width="200" style="clip-path: circle(35%);">
  </div>

  <div style="flex:70%;">
    <h3>Michaela Kümpel (Knowledge Graph) and Simon Stelter (Robot Stocktaking and Manipulation)</h3>
    Tel:     +49 421 218 64021,  +49 421 218 64014<br>
    <!--Fax:     +49 XXXXXXXXXX <br> -->
    Mail:    <a href="mailto:michaela.kuempel@cs.uni-bremen.de">michaela.kuempel@cs.uni-bremen.de</a>, 
    <a href="mailto:stelter@cs.uni-bremen.de">stelter@cs.uni-bremen.de</a><br>
    <a style="color:red" href="https://ai.uni-bremen.de/team/michaela_kuempel">
      <span style="font-size: 15px;">Profile Michaela Kümpel</span></a>
      <a style="color:red" href="https://ai.uni-bremen.de/team/simon_stelter">
      <span style="font-size: 15px;">Profile Simon Stelter</span>
    </a>
  </div>

</div>

Interactive Actions and/or Examples
---

{{<action_forms data="ActionButtons">}}

ProductKG: A Product Knowledge Graph for User Assistance in Daily Activities
---
#### Abstract
The Web offers plenty of product information that is valuable for supporting decision processes. Research
on Web knowledge acquisition and the Semantic Web has led to the creation of many domain ontologies
and Web applications. What still is lacking is a connection of such knowledge to the real world. If object
information is linked to environment information, users can get better, more personalised support in
their daily activities like shopping or cooking since this enables them to link information about leftover
products in the fridge to recipe information or a health profile to products the user is looking at in
the store. It has been shown that semantic Digital Twins can successfully link object to environment
information that can be used by agents like smartphone or service robot. Such semantic Digital Twins
can offer even more services to users if they are connected to product information from the Web.
This work introduces ProductKG, an open-source product knowledge graph integrating modular
product information from the Web as well as accurate environment information from a semantic Digital
Twin that can be customised for different applications and used devices as an example knowledge graph
for assisting users in daily activities. We describe the design process and modularity of the knowledge
graph as well as example applications of it, including an Augmented Reality shopping assistant, a dietary
recommender and a hands-free recipe application. The modular ontologies enable personalisation of
applications as well as accessing object information in relation to the current environment. We evaluate
the acceptance of one example application through a user study. ProductKG is publicly available and
will be maintained and extended over time in order to facilitate various applications such as in the retail
and household domain.  
**Resource Website**: [https://michaelakuempel.github.io/ProductKG/](https://michaelakuempel.github.io/ProductKG/)  
**Application Website**: [http://productkg.informatik.uni-bremen.de/](http://productkg.informatik.uni-bremen.de/)
and [https://ai.uni-bremen.de/productkg](https://ai.uni-bremen.de/productkg)

<figure class="video_container">
  <iframe width="100%" height="360" src="https://www.youtube.com/embed/nb-q137DylY?si=RFxBqHGVwc7XK47x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
</figure>

#### Publication

- [Kümpel, M. and Beetz, M. (2023). ProductKG: A Product Knowledge Graph for User Assistance in Daily Activities. In: Ontology Showcase and Demonstrations Track, 9th Joint Ontology Workshops (JOWO 2023), co-located with FOIS 2023. 19-20 July, 2023, Sherbrooke, Quèbec, Canada, 2023.](https://ceur-ws.org/Vol-3637/paper52.pdf)


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
  [<img class="sc-image" src="https://github.githubassets.com/favicons/favicon.svg" height=10> source code](https://github.com/cram2/cram)
  
- ### [KnowRob <img class="sc-image" src="https://ai.uni-bremen.de/_media/projects/knowrob.png" height=60>](https://www.knowrob.org/)
  is a knowledge processing system for robots.\
  [<img class="sc-image" src="https://github.githubassets.com/favicons/favicon.svg" height=10> source code](https://github.com/knowrob/knowrob)

- ### [OpenEASE <img class="sc-image" src="https://ai.uni-bremen.de/_media/team/oe-logo2.png" height=50>](http://www.open-ease.org/)
  is a web-based knowledge service providing robot and human activity data.\
  [<img class="sc-image" src="https://github.githubassets.com/favicons/favicon.svg" height=10> source code](https://github.com/ease-crc/openease)

- ### [GISKARD <img class="sc-image" src="https://ai.uni-bremen.de/_media/team/giskard_logo_tmp.png" height=20>](https://github.com/SemRoCo/giskardpy)
  is a framework for constraint- and optimization-based robot motion and planning control.\
  [<img class="sc-image" src="https://github.githubassets.com/favicons/favicon.svg" height=10> source code](https://github.com/SemRoCo/giskardpy)

- ### [ROBOKUDO <img class="sc-image" src="https://ai.uni-bremen.de/_media/team/rk_logo_v3-300px.png" height=25>](https://robokudo.ai.uni-bremen.de/)
  is a perception framework targeted for robot manipulation tasks.\
  [<img class="sc-image" src="https://github.githubassets.com/favicons/favicon.svg" height=10> source code](https://gitlab.informatik.uni-bremen.de/robokudo/robokudo)

- ### [PyCRAM <img class="sc-image" src="https://pycram.readthedocs.io/en/latest/_images/pycram_logo.png" height=50>](https://pycram.readthedocs.io/en/latest/index.html)
  is the Python 3 re-implementation of [CRAM](https://cram-system.org/). [PyCRAM](https://pycram.readthedocs.io/en/latest/index.html) is a toolbox for designing, implementing and deploying software on autonomous robots.\
  [<img class="sc-image" src="https://github.githubassets.com/favicons/favicon.svg" height=10> source code](https://github.com/cram2/pycram)

