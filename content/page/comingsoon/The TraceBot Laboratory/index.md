---
title: "The TraceBot Laboratory"
date: 2019-05-02T14:33:42-04:00
subtitle: ""
tags: ["Innovation"]
dropCap: false
displayInMenu: false
displayInList: true
draft: false
resources:
- name: ActionButtons
  src: "buttons.json"
---

The TraceBot Lab offers a pioneering platform for conducting research with robotic
systems uniquely designed to have a profound understanding of their actions and
perceptions, specifically targeting the automation of the membrane-based sterility
testing process. At the heart of the TraceBot Lab’s mission is the integration of
verifiable actions into robotic manipulations, facilitated by advanced reasoning over
sensor-actor trails within a comprehensive traceability framework. This framework
capitalizes on digital-twin technology, which serves to replicate the physical world
within a virtual environment, enhancing robot motion planners with the ability to
autonomously execute self-checking procedures. These innovative procedures aim to
create a semantic trace of the robot’s actions, ensuring that every manipulation is not
only verifiable but also meets the rigorous standards required in regulated
environments like healthcare. Through this approach, the TraceBot Lab is setting
new benchmarks for the reliability and accountability of robotic systems in critical
sectors.


<param class="hidde-after-preview">
{{<action_form data="ActionButtons">}}

For more information, you can
<a class="btn btn-success" target="_blank" href="https://www.tracebot.eu/"><b>visit the webpage</b></a>
of TraceBot to get a better idea of the complete project.

<div class="hidde-after-preview">
  For Detailed information click
  <a class="btn btn-success" target="_blank" href="the-tracebot-laboratory"><b>here!</b></a>
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

![](SemDT-Astech-w-CEA-Gripper.png)


Interactive Actions and/or Examples
---

{{<action_form data="ActionButtons">}}

Description
---

The EU funded TraceBot project aims at addressing healthcare-related processes, and more exactly the membrane-based sterility testing process. The objective of TraceBot is to bring verifiable actions to robot manipulation by reasoning over sensor-actor trails in a traceability framework based on digital-twin technology and extend current robot motion planners with the automatic execution of self-checking procedures that create a semantic trace of the actions performed. The goal is to create robotic systems able to understand what they perceive and do, to ensure that any manipulation action is verified, thus meeting the needs of the regulated environment.

The TraceBot project brings together six strong partners from five countries: Astech Projects Limited (England), Commissariat à l‘Energie Atomique et aux Energies Alternatives (France), Fundación Tecnalia Research & Innovation (Spain), Invite GmbH (Germany), Technische Universität Wien (Austria) and Universität Bremen (Germany) and is being guided by representatives of the pharmaceutical industry. Each partner contributes its own expertise by providing a solution working hand-in-hand with each other partner’s solution. This cooperation will permit the development of tactile grippers for handling medical products, the design of a set of manipulation skills to execute the regulatory checking actions for every assembly step, the generation of an intuitive programming method for a quick adaptation to novel products and tasks and, last but not least, the development of a reasoning framework to monitor and control the safe and failure-resistant operation of the robot system, in order to meet the need of safety-critical automation. The TraceBot project’s coordination, communication and dissemination is carried out by the health network BioLAGO (Germany). Example Videos

---
<figure class="video_container">
  <iframe width="100%" height="360" src="https://www.youtube.com/embed/C72p3hOWFss?si=nvpeSFb2E5F6nKdg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
</figure>

---
<figure class="video_container">
  <iframe width="100%" height="360" src="https://www.youtube.com/embed/FGplce7JJzo?si=abPUJoLtAfvsd4SH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
</figure>

More Videos on the <a href="https://www.youtube.com/@tracebot1243">TraceBot</a> YouTube channel


Publications
---

- [F. K. Kenghagho et al., "NaivPhys4RP - Towards Human-like Robot Perception “Physical Reasoning based on Embodied Probabilistic Simulation”," 2022 IEEE-RAS 21st International Conference on Humanoid Robots (Humanoids), Ginowan, Japan, 2022, pp. 815-822, doi: 10.1109/Humanoids53995.2022.10000153.](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10000153)

- [Kenghagho Kenfack, Franklin & Neumann, Michael & Mania, Patrick & Beetz, Michael. (2023). Perception through Cognitive Emulation: "A Second Iteration of NaivPhys4RP for Learningless and Safe Recognition and 6D-Pose Estimation of (Transparent) Objects". ](https://www.researchgate.net/publication/374084206_Perception_through_Cognitive_Emulation_A_Second_Iteration_of_NaivPhys4RP_for_Learningless_and_Safe_Recognition_and_6D-Pose_Estimation_of_Transparent_Objects)

- Mania, Patrick, Stelter, Simon, Kazhoyan, Gayane and Beetz, Michael, "An Open
  and Flexible Robot Perception Framework for Mobile Manipulation Tasks", In
  2024 International Conference on Robotics and Automation (ICRA),
  2024(Accepted for publication)

- [F. Kenghagho K.; J.B. Weibel; S. Aloui; M. Prada; M. Neumann; M. Grossard; A. Remazeilles; M. Vincze; M. Beetz, "RobAuditor: A Flexible Framework for Automated Verification and Audit Trail Generation in Safety-Critical Processes: "Plug, Trace, Verify, (Recover,) Report"", 2024 IEEE International Conference on Humanoid Robots (Humanoids). Submitted](https://www.researchgate.net/publication/379310647_RobAuditor_-_A_Highly_Scalable_Framework_for_Automated_Verification_and_Audit_Trail_Generation_in_Mission-Critical_Processes_When_robots_understand_what_they_see_and_do_then_give_account_of)


Software Components
---

- ### [URoboSim](https://github.com/urobosim/DemoProject)
  is a UE4/5 plugin to simulate robots.\
  [<img class="sc-image" src="https://github.githubassets.com/favicons/favicon.svg" height=10> source code](https://github.com/urobosim/URoboSim)

- ### [KnowRob <img class="sc-image" src="https://ai.uni-bremen.de/_media/projects/knowrob.png" height=60>](https://www.knowrob.org/)
  is a knowledge processing system for robots.\
  [<img class="sc-image" src="https://github.githubassets.com/favicons/favicon.svg" height=10> source code](https://github.com/knowrob/knowrob)

- ### [OpenEASE <img class="sc-image" src="https://ai.uni-bremen.de/_media/team/oe-logo2.png" height=50>](http://www.open-ease.org/)
  is a web-based knowledge service providing robot and human activity data.\
  [<img class="sc-image" src="https://github.githubassets.com/favicons/favicon.svg" height=10> source code](https://github.com/ease-crc/openease)

- ### [ROBOKUDO <img class="sc-image" src="https://ai.uni-bremen.de/_media/team/rk_logo_v3-300px.png" height=25>](https://robokudo.ai.uni-bremen.de/)
  is a perception framework targeted for robot manipulation tasks.\
  [<img class="sc-image" src="https://github.githubassets.com/favicons/favicon.svg" height=10> source code](https://gitlab.informatik.uni-bremen.de/robokudo/robokudo)

