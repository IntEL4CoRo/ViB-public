---
title: "Scene Understanding"
date: 2025-02-01T00:00:00-00:00
subtitle: ""
tags: ["Fame", "Innovation"]
dropCap: false
displayInMenu: false
displayInList: true
draft: false
---

TODO Intro text

## Connection with FAME

### Main Goal

- Detect events in the scene
  - Understanding task and context
- Create an action designator that replicates the observed scene 
  - Executing the observed action(s)


### Challenges

- Irrelevant events that count as noise
- Long term events that have their effects long after their cause
- Complex Motion events that are hard to detect
- Understanding and detecting of effects and transformations of objects
- Correct and Complete enough modeling of the world state


### Relevancy

- Robots need to understand the world around them and how it changes with the existence of actors that affect this state:
  - Learning from demonstration (Adaptation/Collaboration)
  - Prospection
  - Planning


### Solutions

- Mental Simulation of observed world state
  - Use of more complex and realistic simulators
- Segmentation of events in simulation
  - Use dynamic events as primitive events for more complex events
  - Use of semantic knowledge
  - Use of action knowledge
- Develop an incremental KR&R that learns from experience and collaboration with other agents


## Example Images

TODO


## Example Videos

- Event segmentation on data generated from videos
  <figure class="video_container">
    <video width="100%" height="300" muted controls>
      <source src="vid/picking_placing_3-2025.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </figure>


- Event segmentation on VR Data
  <figure class="video_container">
    <video width="100%" height="300" muted controls>
      <source src="vid/fallschool_demo-2024.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </figure>
  
- Mental Simulation During Robot Execution in the Multiverse
  <figure class="video_container">
    <video width="100%" height="300" muted controls>
      <source src="vid/segment_pick_up.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </figure>


## Navigate to FAME Parts

<div>
  For Detailed information on the differents parts of FAME click:<br>
  <div class="btn-group" style="width:100%">
    <a class="btn btn-primary" style="width:100%;" target="_blank" href="../"><b>Fame Main Page</b></a>
  </div>
  <div class="btn-group" style="width:100%">
    <a class="btn btn-success" style="width:33.3%;" target="_blank" href="../pose6d"><b>Computer Vision</b></a>
    <a class="btn btn-success" style="width:33.3%;" target="_blank" href="../action_segmentation"><b>Scene Understanding</b></a>
    <a class="btn btn-success" style="width:33.3%;" target="_blank" href="../prob_learning"><b>Probabilistic Models</b></a>
  </div>
  <div class="btn-group" style="width:100%">
    <a class="btn btn-success" style="width:33.3%;" target="_blank" href="../motion_control"><b>Geometric Control</b></a>
    <a class="btn btn-success" style="width:33.3%;" target="_blank" href="../geometric_learning"><b>Geometric Deep Learning</b></a>
    <a class="btn btn-success" style="width:33.3%;" target="_blank" href="../enviroment"><b>Environment Generation</b></a>
  </div>
</div>
<br>

