---
title: "Enhanced Task Learning Using Actionable Knowledge Graphs Laboratory"
date: 2019-02-27T14:33:42-04:00
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
In this virtual research lab, we aim to empower robots with the ability to semantically enhance the task knowledge of task demonstrations so that robots are enabled to reason about the logged memories and differentiate between performed tasks, particularly in everyday manipulations like cutting or pouring. By integrating actionable knowledge graphs, robots are enabled to link contained object and environment information to ation information and map the information to the parameters from their generalized action plans. These plans then enable robots to adapt cutting techniques such as slicing, quartering, and peeling as looged in the task demonstrations, allowing for more specialised task execution.

In this laboratory, you have the opportunity to select a VR task demonstration to then explore actionable knowledge graph content tailored to specific task domains, including fruit cutting, by utilizing resources like Wikipedia, biology textbooks, nutrition information sources, and instructional websites such as WikiHow. Additionally, you’ll have access to a comprehensive robotic action plan designed specifically for fruit cutting tasks. The integration of actionable knowledge graph information with the task demonstration, such as ”quartering an apple,” can be translated into specific action parameters of the robot. The customized plan can be tested and refined within a simulated environment.


<div class="hidde-after-preview">
  {{<action_forms data="ActionButtons">}}
  </br>
  {{<Webinterface>}}
</div>


<!--more-->


<div class="main-well-flex-container" style="margin:20px;align-items: center;">

  <div style="flex:30%;">
      <img src="MichaelaKümpel.png" width="200" style="clip-path: circle(35%);">
  </div>
  <div style="flex:30%;">
      <img src="avyas2.jpg" style="clip-path: circle(35%);">
  </div>
<!--<div style="flex:30%;">
      <img src="avyas2.jpg" style="clip-path: circle(35%);">
  </div> -->


  <div style="flex:70%;">
    <h3>Michaela Kümpel (Knowledge Graphs) and Abhijit Vyas (VR Demonstrations) and Vanessa Hassouna (Robot Action Execution)</h3>
    Tel:     +49 421 218 64021, +49 421 218 64026, +49 421 218 99651 <br>
    <!--Fax:     +49 XXXXXXXXXX <br> -->
    Mail:    <a href="mailto:michaela.kuempel@cs.uni-bremen.de">michaela.kuempel@cs.uni-bremen.de</a>,  <a href="mailto:avyas@cs.uni-bremen.de">avyas@cs.uni-bremen.de</a> ,<a href="mailto:hassouna@cs.uni-bremen.de">hassouna@cs.uni-bremen.de</a> <br>
    <a style="color:red" href="https://ai.uni-bremen.de/team/michaela_kümpel">
      <span style="font-size: 15px;">Profile Michaela Kümpel</span>
       <a style="color:red" href="href="https://ai.uni-bremen.de/team/abhijit_vyas">
      <span style="font-size: 15px;">Profile Abhijit Vyas</span>
      <a style="color:red" href="https://ai.uni-bremen.de/team/vanessa_hassouna">
      <span style="font-size: 15px;">Profile Vanessa Hassouna</span>
    </a>
  </div>

</div> 

Interactive Actions and/or Examples
---
In this lab, we want to show how robots can perform task learning.
Our framework consists of three steps.

Step 1 is to select and load an episodic memory/ human task demonstration from our logged experience database. This can be done in the following notebook:

Load and Query the Virtual Reality Demonstrations NEEMs
<a class="btn btn-primary" target="_blank" href="https://binder.intel4coro.de/v2/gh/ease-crc/bootstrapping_giskard/74a869a38b3b62da3054e1f8fc74d54ba908a873?urlpath=lab%2Ftree%2Fnotebooks%2Fneem_query.ipynb">Load NEEM</a>

Step 2 is to query the linked actionable knowledge graph for task information. This is demonstrated in the following notebook:

Query the actionable knowledge graph
<a class="btn btn-primary" target="_blank" href="https://binder.intel4coro.de/v2/gh/Food-Ninja/WebKat-MealRobot/a8f389f4053b18155abead27b42139b549e0e605?urlpath=lab%2Ftree%2Fnotebooks%2FFindOutTask.ipynb">Query AKG</a>

Step 3 is to use the parameters for action parametrisation of the robot action plan. This is done in the following notebook:

Query the Robot Demonstrations
<a class="btn btn-primary" target="_blank" href="https://binder.intel4coro.de/v2/gh/LucaKro/pycram/f61804babfbe54652a3080684561d5de6b3a2737?urlpath=lab%2Ftree%2Fdemos%2Fpycram_virtual_building_demos%2Fcutting_actions%2Fcutting_demo_armar.ipynb">Run Code</a>

<br>
