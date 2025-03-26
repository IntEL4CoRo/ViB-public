---
title: "Future-oriented cognitive Action Modelling Engine"
date: 2025-02-01T00:00:00-00:00
subtitle: ""
tags: ["Fame", "Innovation"]
dropCap: false
displayInMenu: false
displayInList: true
draft: false
---

<img class="img" src="img/fame_logo.jpg" align="left" style="padding: 20px;" alt="">

The FAME (Future Action Modelling Engine) Lab stands at the cutting edge of
robotics research, operating as a virtual research laboratory under the auspices of the
ERC project bearing the same name. This ambitious project is dedicated to
exploring how robots can conceptualize and deliberate on future actions to
preemptively address and avoid execution failures. A central focus of the FAME
Lab’s research is enabling robots to learn manipulation tasks by observing
instructional videos. This complex process involves the robot identifying essential
motion patterns within these videos, understanding the rationale behind their
effectiveness without explicit knowledge of the underlying physics, and adapting these
critical motions to its own operational context, which introduces a variety of
uncertainties. Overcoming these challenges would mark a significant milestone,
granting robots the ability to autonomously learn from instructional content, thereby
acquiring a wide range of skills and competencies. A practical application of this
research could enable a robot to adeptly cut any fruit, using any tool, for any
purpose, in any context, showcasing the potential for robots to achieve a remarkable
level of autonomous functionality and versatility.

## Approaching the Problem

<div style="position: relative; width: 100%:">
  <img class="img" src="img/FAME_flow_chart.png" alt="">
  <a title="Object Perception" class="img-hover-visible-hotspot" style="position:absolute; top:12%; left:29%; height:13%; width:16%; background: red;" href="../perception" target="_blank"></a>
  <a title="Scene Understanding" class="img-hover-visible-hotspot" style="position:absolute; top:12%; left:75%; height:13%; width:16%; background: red;" href="../scene_understanding" target="_blank"></a>
  <a title="Probabilistic Models" class="img-hover-visible-hotspot" style="position:absolute; top:68%; left:76%; height:13%; width:16%; background: red;" href="../probabilistic_learning" target="_blank"></a>
  <a title="Geometric Control" class="img-hover-visible-hotspot" style="position:absolute; top:69%; left:21%; height:13%; width:16%; background: red;" href="../motion_control" target="_blank"></a>
  <a title="CRAM" class="img-hover-visible-hotspot" style="position:absolute; top:43%; left:44%; height:20%; width:25%; background: red;" href="../../fallschool/chapter2" target="_blank"></a>
</div>
<p style="text-align:center;"><b>Click</b> the part you are interesset in!</p>


## Introduction

### What is the problem we want to tackle?

- Enabling robots to perform open-ended manipulation tasks
- Developing a knowledge representation and reasoning (KR&R) framework
- Learn task-specific motion patterns from demonstration
  - E.g. YouTube, WikiHow

- ***End Goal***:
  - Robots should in uncertain or novel environments be able to:
    - Reason, Simulate and Contextualize actions on the first attempt

### Why is it an interesting problem?

- Robots are currently unable to adapt to new complex tasks in real-world environments
- Robots would be capable of:
  - Autonomous decision-making
  - Learning from minimal data
  - Executing task with human-like adaptability

### Why is it a hard problem?

- ***Generalization***
  - Inability to handle novel tasks and scenarios effectively

- ***Simulation***
  - Lack of accurate, efficient mental simulations for prospective reasoning
- ***Contextualization***
  - Failure to interpret underdetermined or ambiguous task descriptions
- ***Integration***
  - Fragmented processing pipelines that prevent holistic reasoning and action
- ***Efficiency***
  - Computational limitations and data inefficiency hinder real-world applications

### Main Research Hypotheses

- ***Task Contextualization***
  - Infer missing details in underdetermined task requests
- ***Mental Simulation***
  - Use probabilistic mental simulation to anticipate the effects of robots’ actions
  - Reducing task failures and improving adaptability to uncertain environments
- ***Hybrid KR&R***
  - Combination of symbolic + subsymbolic reasoning allows robots to generalize knowledge across different contexts
- ***Causal and Teleological Reasoning***
  - Acquire task-specific causal models through observation and simulation
  - Enabling robots to reason about why certain actions achieve desired effects
  - Adapt actions to new tasks without direct programming
- ***One-Shot Learning***
  - Via observing demonstrations robots can:
    - Extract task-critical motion patterns
    - Understand their causal effect
    - Transfer these patterns to new objects, tools and environments
- ***Inverse Contextualization (IC)***
  - IC infers the underlying task goals, constraints and physics-based motion parameters
    - Allows to replicate and generalize the action
    - E.g. flipping a pancake
- ***Embodied Reasoning***
  - Improving physical skills by simulating how objects/materials behave under manipulation
    - Similar to how humans develop motor skills


## Example Goal Video:

- Show the Robot what to do! 
  <figure class="video_container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/_IQt39io0dE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </figure>

## Navigate to FAME Parts

<div>
  For Detailed information on the differents parts of FAME click:<br>
  <div class="btn-group" style="width:100%">
    <a class="btn btn-primary" style="width:100%;" target="_self" href="../"><b>FAME Main Page</b></a>
  </div>
  <div class="btn-group" style="width:100%">
    <a class="btn btn-success" style="width:33.3%;" target="_self" href="../perception"><b>Object Perception</b></a>
    <a class="btn btn-success" style="width:33.3%;" target="_self" href="../scene_understanding"><b>Scene Understanding</b></a>
    <a class="btn btn-success" style="width:33.3%;" target="_self" href="../probabilistic_learning"><b>Probabilistic Learning</b></a>
  </div>
  <div class="btn-group" style="width:100%">
    <a class="btn btn-success" style="width:33.3%;" target="_self" href="../motion_control"><b>Motion Control</b></a>
    <a class="btn btn-success" style="width:33.3%;" target="_self" href="../geometric_learning"><b>Geometric Deep Learning</b></a>
    <a class="btn btn-success" style="width:33.3%;" target="_self" href="../enviroment"><b>Environment Generation</b></a>
  </div>
</div>
<br>


[comment]: <> ({{< author name="Prof. Michael Beetz PhD" img="../main/img/mbeetza.jpg" phone="+49 421 218 64001" mail="beetz@cs.uni-bremen.de" profile="https://ai.uni-bremen.de/team/michael_beetz" >}} {{< author name="Abdelrhman Bassiouny" img="../main/img/bass.jpg" mail="bassioun@uni-bremen.de" profile="https://ai.uni-bremen.de/team/abdelrhman_bassiouny" >}} {{< author name="Max Gandyra" img="../main/img/max.jpg" mail="mgandyra@uni-bremen.de" profile="https://ai.uni-bremen.de/team/max_gandyra" >}} {{< author name="Zhiyuan Gao" img="../main/img/gao.jpg" phone="+49 421 218 64000" fax="+49 421 218 64047" mail="gao@uni-bremen.de" profile="https://ai.uni-bremen.de/team/zhiyuan_gao" >}} {{< author name="Alessandro Santonicola" img="../main/img/santonicola.jpg" mail="ale_san@uni-bremen.de" profile="https://ai.uni-bremen.de/team/alessandro_santonicola" >}} {{< author name="Tom Schierenbeck" img="../main/img/tom.jpg" fax="+49 -421 218 64032" mail="tom_sch@uni-bremen.de" profile="https://ai.uni-bremen.de/team/tom_schierenbeck" >}} {{< author name="Duc Than" img="../main/img/duc.jpg" mail="than@uni-bremen.de" profile="https://ai.uni-bremen.de/team/duc_than" >}})
