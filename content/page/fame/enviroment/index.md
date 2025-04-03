---
title: "Environment Generation and Reinforcement Learning"
date: 2025-02-01T00:00:00-00:00
subtitle: ""
tags: ["Fame", "Innovation"]
dropCap: false
displayInMenu: false
displayInList: true
draft: false
---

Recent advances in cognitive robotics have enabled systems to generate increasingly detailed task plans from symbolic descriptions. A task like *“move the cup to the table”* can now be automatically decomposed into fine-grained steps—*approach the cup, grasp it, move toward the table, release it*—with the aid of perception modules that locate objects and motion planners that compute feasible trajectories. These capabilities mark real progress in bridging abstract reasoning with physical execution.

However, this structured pipeline still reveals limitations in real-world settings. Most current systems assume a relatively predictable mapping from symbolic steps to execution: once a high-level plan is generated, it is expected that execution will proceed in a fixed sequence, guided by visual feedback and motion primitives. But environments are often ambiguous, cluttered, and subject to subtle variation. Objects may be occluded or displaced; a valid motion in one layout may fail in another. These edge cases are typically not anticipated by the plan itself, and low-level control alone may not be enough to recover when assumptions break down.

The FAME project is motivated by precisely these challenges. It aims to build agents that can reason, simulate, and act in open-ended environments with human-like adaptability. Our research supports this vision by investigating how **reinforcement learning** can serve as a flexible optimization layer between symbolic planning and physical execution—**not replacing either**, but helping to adapt, refine, or re-interpret plans in ways that account for real-world variation and uncertainty.

To enable this, we also work on **randomized environment generation**. We have extended the ProcTHOR simulation framework to allow for user-defined room layouts and object configurations, exporting to USD format for downstream simulation and evaluation. A key feature is the ability to generate semantically similar but physically distinct environments, which is essential for testing generalization and robustness. We are also exploring natural language inputs to support intuitive scene creation such as Holodeck in future work.

Together, these components aim to strengthen FAME’s foundation by enabling richer evaluation scenarios and more adaptive task execution strategies.


## Connection with FAME

### Main Goal

- Develop a flexible intermediate layer between symbolic planning and low-level execution using reinforcement learning
- Improve robustness and adaptability of robotic agents in dynamic, uncertain environments
- Provide scalable and customizable environment generation for evaluating task generalization and policy flexibility


### Challenges

- Symbolic plans often assume idealized environments and lack awareness of physical constraints
- Low-level controllers require precise trajectories, which are difficult to derive from abstract plans
- Execution failures due to unseen variations are not always recoverable by reactive control alone
- Existing simulation environments offer limited diversity or control over scene semantics


### Relevancy

- Directly supports FAME’s objective of enabling agents to reason and act in open-ended, realistic environments
- Addresses a critical structural gap between abstract reasoning and physical behavior
- Enhances FAME’s evaluation pipeline by generating semantically controlled, physically diverse environments
- Complements existing KR&R and planning modules with adaptive learning and robust testing tools


### Solutions

- Use reinforcement learning to adapt, refine, and ground symbolic plans in real-world contexts
- Train RL agents to optimize execution in semantically equivalent but physically varied environments
- Extend ProcTHOR to support USD-based, user-defined room and object configurations
- Enable semantic-level scene variation for evaluating policy robustness and transferability
- Explore structured language or template-based scene generation for intuitive scenario creation


## Example Images

{{< gallery >}}
  {{< my_figure link="img/gui_example.jpg" caption="Input house setting" >}}
  {{< my_figure link="img/gui_output.jpg" caption="Output 3d house model" >}}
  {{< my_figure link="img/merged_image_grid_resized.jpg" caption="Generated houses" >}}
{{< /gallery >}}


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


## Authors

{{< author name="Zhiyuan Gao" img="../main/img/gao.jpg" phone="+49 421 218 64000" fax="+49 421 218 64047" mail="gao@uni-bremen.de" profile="https://ai.uni-bremen.de/team/zhiyuan_gao" >}}
{{< author name="Prof. Michael Beetz PhD" img="../main/img/mbeetza.jpg" phone="+49 421 218 64001" mail="beetz@cs.uni-bremen.de" profile="https://ai.uni-bremen.de/team/michael_beetz" >}}

