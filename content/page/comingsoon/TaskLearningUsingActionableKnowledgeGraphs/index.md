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
In this virtual research lab, we aim to empower robots with the ability to semantically enhance task knowledge included in task demonstrations so that robots are enabled to reason about the logged memories and differentiate between performed tasks, particularly in everyday manipulations like cutting or pouring. By integrating actionable knowledge graphs, robots are enabled to link contained object and environment information to ation information and map the information to the parameters from their generalized action plans. These plans then enable robots to adapt cutting techniques such as slicing, quartering, and peeling as looged in the task demonstrations, allowing for more specialised task execution.

In this laboratory, you have the opportunity to select a VR task demonstration to then explore actionable knowledge graph content tailored to specific task domains, including fruit cutting, by utilizing resources like Wikipedia, biology textbooks, nutrition information sources, and instructional websites such as WikiHow. Additionally, you’ll have access to a comprehensive robotic action plan designed specifically for fruit cutting tasks. The integration of actionable knowledge graph information with the task demonstration, such as ”quartering an apple,” can be translated into specific action parameters of the robot. The customized plan can be tested and refined within a simulated environment.


<div class="hidde-after-preview">
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

Query the NEEMs with Knowledge graph
<a class="btn btn-primary" target="_blank" href="https://binder.intel4coro.de/v2/gh/ease-crc/bootstrapping_giskard/72f355d5e906880d85a566afbe1a1041f8e0a3eb?urlpath=lab%2Ftree%2Fnotebooks%2Fneem_query.ipynb">Run Code</a>

{{<Webinterface>}}

<br>
<br>

<!--For Detailed information click 
<a href="https://food-ninja.github.io/WebKat-MealRobot//">here!</a> 
-->

<!--<hr>
<h2>Parameterising General Action Plans with Web Knowledge</h2>

<font size=3>To achieve our goal of enabling a robotic agent to handle unkown task variations by parameterising general action plans using web knowledge, we employ the following architecture:</font>

<p align="center">
  <img src="Motivation4.jpg" width="600" alt="Action Plans"/><br>
</p>

<font size=3>In general, the robot needs to have access to a general action designator of cutting that can be parameterised.
When the robot is given a task request, it can either query the graph database with the knowledge graph directly via its SPARQL REST API or use a knowledge framework with additional functionalities such as the KnowRob knowledge processing system[^1] and pose Prolog queries, which then are translated to SPARQL queries.
More information on the different ways of querying the knowledge graph can be found <a href="https://food-ninja.github.io/WebKat-MealRobot/posts/querylikearobot/">here</a>.</font>
-->
