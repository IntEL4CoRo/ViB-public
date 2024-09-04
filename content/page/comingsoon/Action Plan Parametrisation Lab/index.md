---
title: "Action Plan Parametrisation Laboratory"
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
In this virtual research lab, we aim to empower robots with the ability to use general action plans that can be parameterised by various sources into a variation of actionable tasks, particularly in everyday manipulations like cutting, pouring or whisking. These plans enable robots to adapt cutting techniques such as slicing, quartering, and peeling to various fruits or to infer parameters for successful pouring and whisking based on the available ingredients and objects, making abstract knowledge practically applicable in robot perception-action loops.


<div class="hidde-after-preview">
  {{<Webinterface>}}
    <hr>
{{<PouringInterface>}}
</br>
 <!-- For Detailed information click
  <a class="btn btn-success" target="_blank" href="actionable-knowledge-graph-laboratory/"><b>here!</b></a>  -->
</div>

<!--more-->


<div class="main-well-flex-container" style="margin:20px;align-items: center;">

  <div style="flex:30%;">
      <img src="VHuMK3.png" width="200" style="clip-path: circle(35%);">
  </div>

  <div style="flex:70%;">
    <h3>Vanessa Hassouna (Robot Action Execution) and Michaela Kümpel (Knowledge Graph Parameters) and</h3>
    Tel:     +49 421 218 64021, +49 421 218 99651 <br>
    <!--Fax:     +49 XXXXXXXXXX <br> -->
    Mail:     <a href="mailto:hassouna@cs.uni-bremen.de">hassouna@cs.uni-bremen.de</a>, <a href="mailto:michaela.kuempel@cs.uni-bremen.de">michaela.kuempel@cs.uni-bremen.de</a> <br>
      <a style="color:red" href="https://ai.uni-bremen.de/team/vanessa_hassouna">
      <span style="font-size: 15px;">Profile Vanessa Hassouna</span>
        <a style="color:red" href="https://ai.uni-bremen.de/team/michaela_kümpel">
      <span style="font-size: 15px;">Profile Michaela Kümpel</span>
    </a>
  </div>

</div> 

Interactive Actions and/or Examples
---
{{<Webinterface>}}
<hr>
{{<PouringInterface>}}
</br>

For Detailed information click 
<a href="https://food-ninja.github.io/WebKat-MealRobot//">here!</a> 


<hr>
<h2>Parameterising General Action Plans with Web Knowledge</h2>

<font size=3>To achieve our goal of enabling a robotic agent to handle unkown task variations by parameterising general action plans using web knowledge, we employ the following architecture.</font>

For more information, please check and cite:<br>
Kümpel, Michaela, Töberg, Jan-Phillip, Hassouna, Vanessa, Cimiano, Phillip and Beetz, Michael, <b>"Towards a Knowledge Engineering Methodology for Flexible Robot Manipulation in Everyday Tasks"</b>, In <i>Actionable Knowledge Representation and Reasoning for Robots (AKR^3) at European Semantic Web Conference (ESWC)</i>, 2024.<br>

<p align="center">
  <img src="Motivation4.jpg" width="600" alt="Action Plans"/><br>
</p>


<hr>


<h2>Creating General Action Plans</h2>


<font size=3>In general, the robot needs to have access to a general action designator of cutting that can be parameterised.
When the robot is given a task request, it can either query the graph database with the knowledge graph directly via its SPARQL REST API or use a knowledge framework with additional functionalities such as the KnowRob knowledge processing system and pose Prolog queries, which then are translated to SPARQL queries.
More information on the different ways of querying the knowledge graph can be found <a href="https://food-ninja.github.io/WebKat-MealRobot/posts/querylikearobot/">here</a>.</font>
<p align="center">
<img src="CuttingWithParameters.png" width="800" alt="Parameters"/>
</p>

