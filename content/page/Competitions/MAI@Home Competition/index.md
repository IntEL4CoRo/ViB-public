---
title: "MAI@Home Competition Lab"
date: 2013-01-27T14:33:42-04:00
subtitle: ""
tags: ["Research", "Teaching", "Education"]
dropCap: false
displayInMenu: false
displayInList: true
draft: false
resources:
- name: ActionButtons
  src: "buttons.json"
---

MAI@Home ("Multimodal AI Reasoning Challenge @Home") is a multimodal Embodied-AI competition proposed at ICRA '25. Here, AI systems are challenged to reason on multi-time spatiotemporal QA tasks in a daily living environment where your host human continuously changes the environment slightly.<br>
In this competition, submitted systems must process not only the current status but also have to “remember” and manage the status of the complex and dynamic environment, a crucial aspect for practical applications in the real world. <br>
One unique feature of this competition is that we provide spatiotemporal knowledge graphs and scene graphs in addition to the video footage, which can be considered a partial observation database that the agents can refer to as external knowledge.
<br><br>
For more information you can check out the <a href="http://ikgrc.org/2025/">competition website</a> and the github.
<br><br>
In the notebook below you can try out some example queries on the knowledge graph and video data



<div>
  {{<action_form data="ActionButtons">}}
  For Detailed information click
  <a class="btn btn-success" target="_blank" href="maihome-competition"><b>here!</b></a>
</div>

<!--more-->
<p align="left">
  <img src="put_food_in_fridge1.gif" width="500" alt="test"/><br>
</p>

<p align="center">
  <img src="put_food_in_fridge1_kg.png" width="500" alt="test"/><br>
</p>

## References
1. https://github.com/KnowledgeGraphJapan/KGRC-RDF/tree/kgrc4si
2. https://ikgrc.org/2025/rdf.html