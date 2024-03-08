---
title: "openEASE"
date: 2023-12-01T10:35:35-05:00
subtitle: ""
tags: ["Research", "Lab", "Knowledge", "Episodic Memory"]
dropCap: false
displayInMenu: false
displayInList: true
draft: false
on_homepage: false
resources:
- name: ActionButtons
  src: "buttons.json"
---

openEASE is a web-based knowledge service providing robot and human activity data. It contains semantically annotated data of manipulation actions, including the environment the agent is acting in, the objects it manipulates, the task it performs, and the behavior it generates. The episode representations can include images captured by the robot, other sensor datastreams as well as full-body poses. A powerful query language and inference tools, allow reasoning about the data and retrieving requested information based on semantic queries. Based on the data and using the inference tools robots can answer queries regarding to what they did, why, how, what happened, and what they saw. 

<param class="hidde-after-preview">
{{<action_forms data="ActionButtons">}}
<div class="hidde-after-preview">
  For Detailed information click  
  <a href="openEASE">here!</a> 
</div>


<!--more-->


Interactive Actions and/or Examples
---

{{<action_forms data="ActionButtons">}}

For a detailed overview of the episodes in openEASE click [here!](https://data.open-ease.org/).

Description
---

The information collected in the openEASE database consists of
semantically labelled episodic memories. In order to make use of it, and to
enhance it by additional meta information, we use and develop a set of
knowledge processing tools. One of these tools is KnowRob, which is the
base system for running the openEASE web console. It supplies a large
set of logical Prolog predicates that allow access to, and reasoning
about the information stored in the database. Furthermore, meta
information enhancing tools such as a labelling tool for recorded
sequences are available. In the labelling tool, sequences of recorded
activity can be annotated with semantic labels of what action was
performed, using which tools, and with which outcome. The collected episodic 
memories are uploaded to the [NEEMHub](/ViB-public/page/softwaretools/neemhub/). 

Example Videos
---

<figure class="video_container">
  <iframe width="100%" height="360" src="https://www.youtube.com/embed/jFjQtnqAeVU?si=ZlO3vSAfZpegwzss" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
</figure>

Publications
---

- [Moritz Tenorth, Jan Winkler, Daniel Beßler and Michael Beetz, "Open-EASE – A Cloud-Based Knowledge Service for Autonomous Learning", In KI – Künstliche Intelligenz, Springer Berlin Heidelberg, 2015, doi: 10.1007/s13218-015-0364-1](https://link.springer.com/article/10.1007/s13218-015-0364-1)

- [Michael Beetz, Moritz Tenorth and Jan Winkler, "Open-EASE – A Knowledge Processing Service for Robots and Robotics/AI Researchers", In IEEE International Conference on Robotics and Automation (ICRA), Seattle, Washington, USA, 2015, doi: 10.1109/ICRA.2015.7139458. Finalist for the Best Cognitive Robotics Paper Award.](https://ieeexplore.ieee.org/document/7139458)

- [Daniel Beßler, Robert Porzel, Mihai Pomarlan, Abhijit Vyas, Sebastian Höffner, Michael Beetz, Rainer Malaka and John Bateman, "Foundations of the Socio-physical Model of Activities (SOMA) for Autonomous Robotic Agents", In Formal Ontology in Information Systems - Proceedings of the 12th International Conference, FOIS 2021, Bozen-Bolzano, Italy, September 13-16, 2021, IOS Press, 2021, doi:10.3233/FAIA210379](https://ai.uni-bremen.de/papers/bessler21soma.pdf)

- [KnowRob 2.0 – A 2nd Generation Knowledge Processing Framework for Cognition-enabled Robotic Agents (Michael Beetz, Daniel Beßler, Andrei Haidu, Mihai Pomarlan, Asil Kaan Bozcuoglu and Georg Bartels), In International Conference on Robotics and Automation (ICRA), 2018](https://ai.uni-bremen.de/papers/beetz18knowrob.pdf)


Courses and/or Turorial
---

- ### Tutorials:

  + ##### [openEASE](https://data.open-ease.org/tutorials/)
    Check out the openEASE tutorials.

