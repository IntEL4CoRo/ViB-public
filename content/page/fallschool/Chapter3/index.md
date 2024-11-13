---
title: "Chapter 03 - Querying the Knowledge Base System"
date: 2023-13-03T10:35:35-06:00
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
<div class="hidde-after-preview">
On Chapter 3, you'll explore the role of a knowledge base in robot decision-making.
You'll learn how to make queries to the knowledge base to determine the actions the robot must take to accomplish its tasks, such as perceiving objects in the environment.

For Entering Chapter three click here:
<a class="btn btn-success" target="_blank" href="chapter3/"><b>Chapter 3!</b></a>
</div>

<!--more-->


<h1> Welcome to the third Chapter of our hands-on course!</h1>
Today, you will focus on understanding how a knowledge base supports robotic decision-making. You’ll learn to query the knowledge base to identify necessary actions for tasks, like how to perceive the milk inside the fridge.

**Goal**: By the end of the session, you will have successfully made queries to the knowledge base, enabling the robot to determine the steps required to complete its tasks.

## Prerequisites
- Ensure you finished Chapter 1 and understood the basics of URDF.
- In Chapter 2 you learned about robot movement and perception. This knowledge will be beneficial for understanding the robot's actions in this chapter.
- A basic understanding of logical queries and rules will be helpful.

## Theoretical Background
- We will provide an overview of how knowledge bases operate in the context of robotics.
- You'll learn how the robot can understand the need to open the fridge door to perceive the milk inside.

#### KnowRob: Knowledge processing for robots
KnowRob is a knowledge processing system that combines knowledge representation and reasoning methods with techniques 
for acquiring knowledge and for grounding the knowledge in a physical system and can serve as a common semantic framework for integrating information from different sources. 
KnowRob combines static encyclopedic knowledge, common-sense knowledge, task descriptions, environment models, 
object information and information about observed actions that has been acquired from various sources (manually axiomatized, derived from observations, or imported from the web).
For more information check out the [KnowRob Documentation](https://knowrob.org/).
#### Ontologies
KnowRob has been employing ontologies in order to conceptualize the world in which the robot acts since more then a decade. 
In the early days, KnowRob's knowledge modeling was inspired by definitions in Cyc. More recently, 
and as a consequence of working closely with linguistic researchers in CRC EASE, KnowRob's knowledge modeling was revised. 
The most fundamental change is that KnowRob's knowledge modeling was aligned to and derived from more abstract concepts defined in a carefully designed foundational ontology.
KnowRob employs the DUL foundational ontology which is a slim version of the Descriptive Ontology for Linguistic and Cognitive Engineering (DOLCE). 
DUL and DOLCE have a clear cognitive bias, and are both well established in the knowledge engineering community.

As a foundational ontology, however, DUL does not define very specific concepts such as fork or dish. 
However, these concepts are needed for our robots that do everyday activities. 
[SOMA](https://ease-crc.github.io/soma/) is an ontological model, developped in CRC EASE, that attempts to equip robotic agents with abstract 
knowledge to enable them performing activities in a more flexible and robust manner. 
The main focus of SOMA is the characterization of physical and social activity context, 
as well as the motions carried out by agents, and the interactions caused by them. SOMA is continuously deployed here,
and can be loaded with common ontology tools such as [WebVOWL](https://visualdataweb.de/webvowl/#iri=https://ease-crc.github.io/soma/owl/current/SOMA.owl).
![soma-vowl-zoomed.png](img%2Fsoma-vowl-zoomed.png)
Finally, ontologies maintained as part of KnowRob are thought to be specifically for the robot usecase.
For example, a concept “fork” would not be defined in these ontologies, but concepts such as “sensor” or “robot control system” would belong in these ontologies.

## Step-by-Step Hands-On Exercises
1. **Query the Knowledge Base**: Start by querying the knowledge base to understand the current state of the environment.
2. **Action Determination**: Ask the knowledge base, "What actions must the robot take to perceive the milk?" and interpret the responses.
3. **Plan Execution**: Based on the queries, plan the required actions (e.g., opening the fridge).

Throughout the exercises, code examples will demonstrate how to perform basic queries using Prolog or Python.

Interactive Actions and/or Examples
---

For Hands-On Exercises please use the following Virtual Lab: <a class="btn btn-success" target="_blank" href="https://binder.intel4coro.de/v2/gh/sunava/pycram/6dc265e85637794c734f85638d005ac050763491?urlpath=lab%2Ftree%2Fdemos%2Fpycram_fallschool_2024%2F03_Knowledge_Base_Queries.ipynb">Knowledge Base Queries</a>


## Summary
By the end of the session, you will have a robot opening the fridge and perceiving the milk inside. 
You will have learned how to query the knowledge base to determine the necessary actions for the robot to complete its tasks.


## Further Reading/Exercises
- For those interested in exploring more checkout PyCram Documentation about queries: [PyCram Documentation](https://pycram.readthedocs.io/en/latest/queries.html)



<div class="main-well-flex-container" style="margin:20px;align-items: center;">

  <div style="flex:30%;">
      <img src="img/vanessa.jpg" style="clip-path: circle(35%);">
  </div>

  <div style="flex:70%;">
       <h3> Vanessa Hassouna</h3>
    Tel:  +49 421 218 99651 <br>
    Mail:     <a href="mailto:hassouna@cs.uni-bremen.de">hassouna@cs.uni-bremen.de</a> <br>
      <a style="color:red" href="https://ai.uni-bremen.de/team/vanessa_hassouna">
      <span style="font-size: 15px;">Profile Vanessa Hassouna</span>
    </a>
  </div>
</div>

<div class="main-well-flex-container" style="margin:20px;align-items: center;">

  <div style="flex:30%;">
      <img src="img/alina.jpg" style="clip-path: circle(35%);">
  </div>

  <div style="flex:70%;">
    <h3> Alina Hawkin</h3>
    Tel: +49 421 218 64024 <br>
    Mail: <a href="mailto:hawkin@uni-bremen.de">hawkin@uni-bremen.de</a> <br>
    <a style="color:red" href="https://ai.uni-bremen.de/team/alina_hawkin">
        <span style="font-size: 15px;">Profile Alina Hawkin</span>
    </a>
</div>
</div>


<div class="main-well-flex-container" style="margin:20px;align-items: center;">

  <div style="flex:30%;">
      <img src="../mbeetza.jpg" style="clip-path: circle(35%);">
  </div>

  <div style="flex:70%;">
       <h3> Prof. Michael Beetz PhD</h3>
    Tel:  +49 421 218 64001 <br>
    Mail:     <a href="mailto:beetz@cs.uni-bremen.de">beetz@cs.uni-bremen.de</a> <br>
      <a style="color:red" href="https://ai.uni-bremen.de/team/michael_beetz">
      <span style="font-size: 15px;">Profile Michael Beetz</span>
    </a>
  </div>
</div>

